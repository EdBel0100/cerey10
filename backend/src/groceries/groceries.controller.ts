import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { GroceriesService } from './groceries.service';


@Controller('groceries')
export class GroceriesController {
  constructor(private readonly groceriesService: GroceriesService) {}

 
}
