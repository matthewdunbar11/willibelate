import {Pipe} from 'angular2/core';

@Pipe({ name: 'secondsToMinutes' })
export class SecondsToMinutesPipe {
	transform(value: number, args: string[]): any {
		return Math.round(value / 60);
	}
}