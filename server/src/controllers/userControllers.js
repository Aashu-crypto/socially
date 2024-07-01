const { PrismaClient } = require("@prisma/client");
const jwt = require("jsonwebtoken");
const JWT_SECRET = "CYNIC";
const prisma = new PrismaClient();
const createUser = async (req, res) => {
  try {
    const { body } = req;
    console.log(body);
    const userExist = await prisma.user.findFirst({
      where: {
        email: body.email,
      },
    });
    if (userExist) {
      return res.json({ user: "user Already exist" });
    }
    const hashedPassword = await bcrypt.hash(body.password, 10);
    const user = await prisma.user.create({
      data: {
        name: body.name,
        email: body.email,
        password: hashedPassword,
      },
    });
    const userId = user.id;
    const token = jwt.sign(
      {
        userId,
      },
      JWT_SECRET
    );
    return res.json({
      message: "User Create Successfully",
      userId: user._id,
      token: token,
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      message: "Error creating instructor",
      error: error.message,
    });
  }
};
const userLogin = async (req, res) => {
  res.json({controleer:"working fine"})
};

module.exports = {
  createUser,
  userLogin
};
