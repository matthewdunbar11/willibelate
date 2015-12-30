import {Pipe} from 'angular2/core';

@Pipe({ name: 'abs' })
export class AbsPipe {
	transform(value: number, args: string[]): any {
		return Math.abs(value);
	}
}