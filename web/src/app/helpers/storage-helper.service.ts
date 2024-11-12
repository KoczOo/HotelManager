import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root',
})
export class StorageHelperService {
	getItemOrWarn(key: string): string {
		const value = localStorage.getItem(key);
		if (value === null) {
			console.warn(`Brak ${key} w localStorage`);
			return "";
		}
		return value;
	}

	setItem(key: string, value: string): void {
		localStorage.setItem(key, value);
	}

	getItem(key: string): string | null {
		return localStorage.getItem(key);
	}

	removeItem(key: string): void {
		localStorage.removeItem(key);
	}

	clear(): void {
		localStorage.clear();
	}
}
