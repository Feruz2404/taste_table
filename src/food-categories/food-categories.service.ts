import { Injectable } from '@nestjs/common';
import { CreateFoodCategoryDto } from './dto/create-food-category.dto';
import { UpdateFoodCategoryDto } from './dto/update-food-category.dto';
import { InjectModel } from '@nestjs/mongoose';
import { FoodCategory, FoodCategoryDocument } from './Schemas/food-category.schema';
import { Model } from 'mongoose';

@Injectable()
export class FoodCategoriesService {
  constructor(
    @InjectModel(FoodCategory.name) private foodCategoryModel: Model<FoodCategoryDocument>,
  ){}
  create(createFoodCategoryDto: CreateFoodCategoryDto) {
      return this.foodCategoryModel.create(createFoodCategoryDto)
  }

  findAll() {
    return this.foodCategoryModel.find()
  }

  findOne(id: string) {
    return this.foodCategoryModel.findById(id);
  }

  update(id: string, updateFoodCategoryDto: UpdateFoodCategoryDto) {
    return this.foodCategoryModel.findByIdAndUpdate(id)
  }

  remove(id: string) {
    return this.foodCategoryModel.findByIdAndDelete(id)
  }
}
