const express = require("express");
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const router = express.Router();

router.get("/members", async (req, res) => {
    const members = await prisma.member.findMany({
        include: {
            tags: true,
        },
    });
    res.json(members);
});

module.exports = router;