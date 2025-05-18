import { faker } from '@faker-js/faker';

export function getRandomBotReply() {
  const replies = [
    faker.lorem.sentence(),
    faker.hacker.phrase(),
    faker.company.catchPhrase(),
    faker.animal.cat(),
    faker.animal.dog(),
    faker.lorem.text(),
    'Bạn cần tôi giúp gì nữa không?',
    'Hãy gửi thêm thông tin nhé!',
  ];
  return replies[Math.floor(Math.random() * replies.length)];
}
