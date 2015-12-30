import {Pipe} from 'angular2/core';

@Pipe({ name: 'millisecondsToSeconds' })
export class MillisecondsToSecondsPipe {
	transform(value: number, args: string[]): any {
		return Math.round(value / 1000);
	}
}