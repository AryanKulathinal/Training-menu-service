import { HttpException, Injectable } from '@nestjs/common';
import { CreateMenuDto } from './dto/create-menu.dto';
import { UpdateMenuDto } from './dto/update-menu.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Menu } from './entities/menu.entity';

@Injectable()
export class MenuService {
  constructor(
    @InjectRepository(Menu)
    private readonly menuRepository: Repository<Menu>,
  ) {}

  async create(
    createMenuDto: CreateMenuDto,
  ): Promise<Menu> {
    const menuData =
      await this.menuRepository.create(
        createMenuDto,
      );
    return this.menuRepository.save(menuData);
  }

  async findAll(): Promise<Menu []> {
    return await this.menuRepository.find();
  }

  async findOne(id: number): Promise<Menu> {
    const menuData =
      await this.menuRepository.findOneBy({ id });
    if (!menuData) {
      throw new HttpException(
        'Menu Not Found',
        404,
      );
    }
    return menuData;
  }

  async update(
    id: number,
    updateMenuDto: UpdateMenuDto,
  ): Promise<Menu> {
    const existingMenu = await this.findOne(id);
    const menuData = this.menuRepository.merge(
      existingMenu,
      updateMenuDto,
    );
    return await this.menuRepository.save(
      menuData,
    );
  }

  async remove(id: number): Promise<Menu> {
    const existingMenu = await this.findOne(id);
    return await this.menuRepository.remove(
      existingMenu,
    );
  }
}