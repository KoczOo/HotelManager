export class PageableDto {
	page: number;
	size: number;
	sortField: string | string[] | null | undefined;
	sortOrder: number | null | undefined;
	isSorted: boolean | null;

	constructor(page: number, size: number, isSorted: boolean | null);
	constructor(
		page: number,
		size: number,
		isSorted: boolean | null,
		sortField: string,
		sortOrder: number,
	);
	constructor(
		page: number,
		size: number,
		isSorted: boolean,
		sortField?: string,
		sortOrder?: number,
	) {
		this.page = page;
		this.size = size;
		this.sortField = sortField ?? null;
		this.sortOrder = sortOrder ?? null;
		this.isSorted = isSorted ?? null;
	}
}
