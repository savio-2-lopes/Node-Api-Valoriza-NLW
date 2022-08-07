import { getCustomRepository } from "typeorm";
import { TagRepositories } from "../repositories/TagRepositories";

class CreateTagService {
  async execute(name: string) {
    const tagRepositories = getCustomRepository(TagRepositories);

    if (!name) {
      throw new Error("Incorrect name");
    }

    const tagAlreadyExists = await tagRepositories.findOne({
      name,
    });

    if (tagAlreadyExists) {
      throw new Error("Tag already exists");
    }

    const tag = tagRepositories.create({
      name,
    });

    await tagRepositories.save(tag);
    return tag;
  }
}

export { CreateTagService };
