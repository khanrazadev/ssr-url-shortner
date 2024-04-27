import asyncHandler from "express-async-handler";
import { nanoid } from "nanoid";
import { Url } from "../models/url-models.js";

export const generateNewShortUrl = asyncHandler(async (req, res) => {
  const { redirectUrl } = req.body;
  if (!redirectUrl) {
    res.status(400);
    throw new Error("Please write redirect Url");
  }

  const shortId = nanoid(8);

  const newUrl = await Url.create({
    shortId,
    redirectUrl,
  });

  res.status(200).json(newUrl);
  return res.render("home", { id: shortId });
});

export const getShortId = asyncHandler(async (req, res) => {
  const { shortId } = req.params;
  if (!shortId) {
    res.status(404);
    throw new Error("Id not found");
  }

  const newUrl = await Url.findOneAndUpdate(
    { shortId },
    {
      $push: {
        visitUrlHistory: {
          timestamps: Date.now(),
        },
      },
    },
    { new: true }
  );
  if (!newUrl) {
    res.status(400);
    throw new Error("New url not found");
  }
  return res.redirect(newUrl?.redirectUrl);
});

export const getAnalytics = asyncHandler(async (req, res) => {
  const { shortId } = req.params;
  console.log(shortId);
  if (!shortId) {
    res.status(404);
    throw new Error("Id not found");
  }

  const result = await Url.findOne({ shortId });

  res.status(200).json({
    totalClicks: result.visitUrlHistory.length,
    analytics: result.visitUrlHistory,
  });
});
