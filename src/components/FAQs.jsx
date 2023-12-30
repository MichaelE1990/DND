const faqs = [
    {
      id: 1,
      question: "How does Alchemy Forge enhance my campaign experience?",
      answer:
        "Our app offers a suite of tools for efficient campaign management, character development, and dynamic storytelling. It simplifies organization and enhances the gameplay experience for both Dungeon Masters and players.",
    },
    {
      id: 2,
      question: "Is there a trial period for new users?",
      answer:
        "Yes, we offer a trial period so you can explore the features of our app. Experience firsthand how it can transform your campaigns before making a commitment.",
    },
    {
      id: 3,
      question: "Can I manage multiple campaigns at once?",
      answer:
        "Absolutely! Our app is designed to handle multiple campaigns simultaneously, allowing you to switch seamlessly between different stories and groups.",
    },
    {
      id: 4,
      question: "Does the app support character customization?",
      answer:
        "Yes, we provide extensive tools for character creation and customization, including skills, equipment, and backstories to bring your characters to life.",
    },
    {
      id: 5,
      question: "Are updates and new features added regularly?",
      answer:
        "We constantly update the app with new features, enhancements, and content to ensure an evolving and fresh experience for all users.",
    },
    {
      id: 6,
      question: "How does the app handle in-game resources?",
      answer:
        "Our app includes a rich library of in-game resources such as maps, NPC templates, and rulebooks, all easily accessible for seamless gameplay.",
    },
  ]
  
  
  export default function Example() {
    return (
        <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8 font-display">
          <h2 className="text-2xl font-bold leading-10 tracking-tight text-gray-900">Frequently Asked Questions</h2>
          <p className="mt-6 max-w-2xl text-base leading-7 text-gray-600">
            Have a different question and can’t find the answer you’re looking for? Reach out to our support team by{' '}
            <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
              sending us an email
            </a>{' '}
            and we’ll get back to you as soon as we can.
          </p>
          <div className="mt-20">
            <dl className="space-y-16 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-16 sm:space-y-0 lg:grid-cols-3 lg:gap-x-10">
              {faqs.map((faq) => (
                <div key={faq.id}>
                  <dt className="text-base font-semibold leading-7 text-gray-900">{faq.question}</dt>
                  <dd className="mt-2 text-base leading-7 text-gray-600">{faq.answer}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

    )
  }