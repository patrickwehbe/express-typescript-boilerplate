import * as Faker from 'faker';
import { define } from 'typeorm-seeding';
import * as uuid from 'uuid';

import { User } from '../../api/models/user.model';

define(User, (faker: typeof Faker, settings: { role: string }) => {
    const gender = faker.random.number(1);
    const name = faker.name.firstName(gender);
    const lastName = faker.name.lastName(gender);
    const email = faker.internet.email(name, lastName);
    

    const user = new User();
    user.id = uuid.v1();
    user.name = name;
    user.email = email;
    user.password = '1234';
    return user;
});
