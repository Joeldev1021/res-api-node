import { UsernameVO } from '../../../../src/Contexts/shared/domain/value-objects/username.vo';
import { StateVO } from '../../../../src/Contexts/shared/domain/value-objects/state.vo';
import { PasswordVO } from '../../../../src/Contexts/shared/domain/value-objects/password.vo';
import { UuidVO } from '../../../../src/Contexts/shared/domain/value-objects/uuid.vo';
import { EmailVO } from '../../../../src/Contexts/shared/domain/value-objects/email.vo';
import { UserEmailMother } from './user-email.mother';
import { UserIdMother } from './user-id.mother';
import { UserNameMother } from './user-name.mother';
import { UserPasswordMother } from './user-password.mother';
import { UserStateMother } from './user-state.mother';
import {
	IUserPrimitives,
	UserModel,
} from '../../../../src/Contexts/user/domain/models/user.model';
export class UserModelMother {
	static create(
		id: UuidVO,
		username: UsernameVO,
		email: EmailVO,
		password: PasswordVO,
		state: StateVO
	): UserModel {
		return new UserModel(id, username, email, password, state);
	}

	static fromRequest(request: IUserPrimitives): UserModel {
		return this.create(
			new UuidVO(request.user_id),
			new UsernameVO(request.username),
			new EmailVO(request.email),
			new PasswordVO(request.password),
			new StateVO(request.state)
		);
	}

	static async random(): Promise<UserModel> {
		return this.create(
			UserIdMother.random(),
			UserNameMother.random(),
			UserEmailMother.random(),
			UserPasswordMother.random(),
			UserStateMother.random()
		);
	}
}
