import React, { useState } from "react";

const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const toggleAccordion = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  const accordionData = [
    {
      title: <div className="accordian-main-1">What is Netflix?</div>,
      content: (
        <p className="p-dawn">
        Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices.<br/><br/>

        You can watch as much as you want, whenever you want, without a single ad – all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!
        </p>
      ),
    },
    {
      title: <div className="accordian-main-1">How much does it cost?</div>,
      content: (
        <p className="p-dawn">
        Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹ 149 to ₹ 649 a month. No extra costs, no contracts.
        </p>
      ),
    },
    {
      title: <div className="accordian-main-1">Where can I watch?</div>,
      content: (
        <p className="p-dawn">
        Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.<br/><br/>

        You can also download your favourite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.
        </p>
      ),
    },
    {
      title: <div className="accordian-main-1">How do i cancel?</div>,
      content: (
        <p className="p-dawn">
        Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.
        </p>
      ),
    },
    {
      title: <div style={{width:"100%"}} className="accordian-main-1">Where can i watch Netflix?</div>,
      content: (
        <p className="p-dawn">
        Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.
        </p>
      ),
    },
    {
      title: <div className="accordian-main-1">Is Netflix good for kids?</div>,
      content: (
        <p style={{color:"white"}} className="p-dawn">
        The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and films in their own space.<br/><br/>

        Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.
        </p>
      ),
    },
  ];

  return (
    <>
      <div className="container">
        {accordionData.map((item, index) => (
          <div key={index}>
            <div className="ACCORDIAN" onClick={() => toggleAccordion(index)}>
              <div className="accordian-child-1">
                <div className="setting">
                <div className="setting-1">
                {item.title}
                </div>
                </div>
                <div className="setting-2">
                +
                </div>
              </div>

            </div>

            {activeIndex === index && <p>{item.content}</p>}
          </div>
        ))}
      </div>
    </>
  );
};

export default Accordion;
