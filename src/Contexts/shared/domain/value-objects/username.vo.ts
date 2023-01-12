import { ValueObject } from './value-object';
import { VOFormatException } from '../errors/vo-format.exception';

export class UsernameVO extends ValueObject<string> {
	public equals(valueObject: UsernameVO): boolean {
		return valueObject.value === this.value;
	}

	protected assertIsValid(value: string): void {
		if (value.length < 4) throw new VOFormatException(UsernameVO.name, value);
	}
}
