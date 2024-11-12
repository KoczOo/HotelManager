import { Injectable } from "@angular/core";
import { MessageService } from "primeng/api";

@Injectable({
  providedIn: 'root'
})
export class MessageServiceService {
	sessionMessageExist = false;

	constructor(private messageService: MessageService) {}

	showMessageSuccess(message: string) {
		this.messageService.add({
			severity: "success",
			summary: "Sukces",
			detail: message,
		});
	}

	showMessageError(message: string) {
		this.messageService.add({
			severity: "error",
			summary: "Błąd",
			detail: message,
		});
	}

	showSessionTimerMessage() {
		this.removeSessionTimerMessage();
		this.messageService.add({
			key: "session-timer-toast",
			summary: "Uwaga",
			closable: false,
			severity: "warn",
			life: 9999999, //wstawiony taki czas, by popup się nie zamknął
		});
		this.sessionMessageExist = true;
	}

	removeSessionTimerMessage() {
		this.sessionMessageExist = false;
		this.messageService.clear("session-timer-toast");
	}

	checkIfSessionMessageExist(): boolean {
		return this.sessionMessageExist;
	}
}
