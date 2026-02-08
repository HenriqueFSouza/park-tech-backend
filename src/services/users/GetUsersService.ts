import prisma from "../../config/database";

class GetUsersService {
  async execute() {
    const users = await prisma.user.findMany({
      where: {
        role: "OPERATOR",
      },
    });

    return users;
  }
}

export default GetUsersService;
