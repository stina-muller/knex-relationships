
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('profiles').del()
    .then(function () {
      // Inserts seed entries
      return knex('profiles').insert([
        {user_id: 99901, url: 'Ambitious Aardvark', gender: 'aardvark@example.org'},
        {user_id: 99902, url: 'Bamboozled Baboon', gender: 'baboon@example.org'},
        {user_id: 99903, url: 'Curious Capybara', gender: 'capybara@example.org'},
        {user_id: 99904, url: 'Dilapidated Duck', gender: 'duck@example.org'},
        {user_id: 99905, url: 'Exuberant Elephant', gender: 'elephant@example.org'},
        {user_id: 99906, url: 'Fascinated Flying Fox', gender: 'flying.fox@example.org'},
        {user_id: 99907, url: 'Generous Gila Monster', gender: 'gila.monster@example.org'},
        {user_id: 99908, url: 'Hilarious Heron', gender: 'heron@example.org'},
        {user_id: 99909, url: 'Intransigent Impala', gender: 'impala@example.org'},
        {user_id: 99910, url: 'Jocular Jerboa', gender: 'jerboa@example.org'},
        {user_id: 99911, url: 'Kafkaesque Kinkajou', gender: 'kinkajou@example.org'},
        {user_id: 99912, url: 'Loquacious Lemur', gender: 'lemur@example.org'},
        {user_id: 99913, url: 'Misanthropic Mongoose', gender: 'mongoose@example.org'},
        {user_id: 99914, url: 'Nonchalant Nyala', gender: 'nyala@example.org'},
        {user_id: 99915, url: 'Ornery Ocelot', gender: 'ocelot@example.org'},
        {user_id: 99916, url: 'Peaceful Pangolin', gender: 'panda@example.org'},
        {user_id: 99917, url: 'Querulous Quokka', gender: 'quokka@example.org'},
        {user_id: 99918, url: 'Resolute Rail', gender: 'rail@example.org'},
        {user_id: 99919, url: 'Senescent Sloth', gender: 'sloth@example.org'},
        {user_id: 99920, url: 'Tumultuous Terrapin', gender: 'terrapin@example.org'},
        {user_id: 99921, url: 'Unassailable Urial', gender: 'urial@example.org'},
        {user_id: 99922, url: 'Voracious Viscacha', gender: 'viscacha@example.org'},
        {user_id: 99923, url: 'Wondering Wombat', gender: 'wombat@example.org'},
        {user_id: 99924, url: 'Xenial Xerus', gender: 'xerus@example.org'},
        {user_id: 99925, url: 'Yielding Yak', gender: 'yak@example.org'},
        {user_id: 99926, url: 'Zaftig Zebu', gender: 'zebu@example.org'}
      ]);
    });
};
