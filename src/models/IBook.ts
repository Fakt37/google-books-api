export interface IBook {
   	etag: string;
		volumeInfo: {
			imageLinks: {
				thumbnail?: string;
			};	
			categories?: string[];
			authors?: string[];
			title: string;
			id: string
	}
}

export interface IBooks {
	kind: string;
	totalItems: number;
   items: IBook[];
}