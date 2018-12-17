import { Component, OnInit, Input } from '@angular/core';
import { Task } from '../../task';
import { TaskDataService } from '../../services/task-data.service';
import { CustomPaginationService } from '../../../pagination/services/custom-pagination.service';
import { Page } from '../../../pagination/page';
import { Pageable } from '../../../pagination/pageable';
import { Project } from '../../../projects/project';

@Component({
  selector: 'app-tasks-table',
  templateUrl: './tasks-table.component.html',
  styleUrls: ['./tasks-table.component.scss']
})
export class TasksTableComponent implements OnInit {
  page: Page<Task> = new Page();
  @Input() project:Project;

  constructor(
    private taskDataService: TaskDataService,
    private paginationService: CustomPaginationService
  ) { }

  ngOnInit() {
    this.getData();
  }

  private getData(): void {
    this.taskDataService.getPage(this.project.id, this.page.pageable)
    .subscribe(page => this.page = page);
  }

  public getNextPage(): void {
    this.page.pageable = this.paginationService.getNextPage(this.page);
    this.getData();
  }

  public getPreviousPage(): void {
    this.page.pageable = this.paginationService.getPreviousPage(this.page);
    this.getData();
  }

  public getPageInNewSize(pageSize: number): void {
    this.page.pageable = this.paginationService.getPageInNewSize(this.page, pageSize);
    this.getData();
  }

  private updateTasksList():void {
    this.page.pageable.pageNumber = Pageable.FIRST_PAGE_NUMBER;
    this.getData();
  }

}
