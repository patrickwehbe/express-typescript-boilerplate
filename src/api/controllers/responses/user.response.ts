
import User from '../models/user.model';
export class UserResponse {
	/**
	 * _key of user in database
	 */
	id: string;

	/**
	 * name of User
	 */
	name: string;


	 /**
	 * Email of user
	 */
	  email: string;

     /**
	 * Avatar of User
	 */
	  avatar?: string;

	public static getUserResponse(user: User): UserResponse {
		if (!user._key)
			throw new Error("Something wrong with the user's key");

		return {
			id: user._key,
			name: user.name,
			
			email: user.email,
			avatar: user.avatar,
			
		};
	}

	public static getUserResponseList(users: User[]): UserResponse[] {
		let userResponseList: UserResponse[] = [];

		for (const user of users) {
			userResponseList.push(UserResponse.getUserResponse(user));
		}

		return userResponseList;
	}