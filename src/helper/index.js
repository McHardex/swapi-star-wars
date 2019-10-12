export const randomTextGenerator = () => {
  const random = Math.floor(Math.random() * 12);
  const arrayOfTexts = [
    'Help me, Obi-Wan Kenobi. You’re my only hope.',
    'I find your lack of faith disturbing.',
    'The Force will be with you. Always.',
    'Never tell me the odds!',
    'Now, young Skywalker, you will die.',
    'Just for once, let me look on you with my own eyes. — Anakin Skywalker',
    'There’s always a bigger fish. — Qui-Gon Jinn',
    '“Do. Or do not. There is no try. — Yoda',
    'Power! Unlimited power! — Darth Sidious',
    'The garbage’ll do! — Rey',
    '“Oh, my dear friend. How I’ve missed you. — C-3PO'
  ];

  return arrayOfTexts[random];
};
