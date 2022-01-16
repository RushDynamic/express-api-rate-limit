const handleApiCall = (req, res) => {
  console.log("Received request");
  res.status(200).json({ success: true });
};

export { handleApiCall };
