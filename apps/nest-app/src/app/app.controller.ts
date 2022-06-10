import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { v4 as uuid } from 'uuid';
import {
  workspaceLib,
  nestedFunctionInWorkspaceLib,
} from '@happynxjest/workspace-lib';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getData() {
    console.log(uuid());
    console.log(workspaceLib());
    console.log(nestedFunctionInWorkspaceLib());
    return this.appService.getData();
  }
}
