import React, { useState } from "react";

const Accnew = () => {
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
      title: <div className="accordian-main-1">नेटफ्लिक्स क्या है?</div>,
      content: (
        <p className="p-dawn">
          नेटफ्लिक्स एक स्ट्रीमिंग सेवा है जो हजारों इंटरनेट से जुड़े उपकरणों पर
          विभिन्न प्रकार के पुरस्कार विजेता टीवी शो, फिल्में, एनीमे, वृत्तचित्र
          और बहुत कुछ प्रदान करती है।
          <br />
          <br />
          आप जब चाहें, जितना चाहें, बिना किसी विज्ञापन के देख सकते हैं - सब कुछ
          एक कम मासिक कीमत पर। खोजने के लिए हमेशा कुछ नया होता है, और हर हफ्ते
          नए टीवी शो और फिल्में जोड़ी जाती हैं!
        </p>
      ),
    },
    {
      title: (
        <div className="accordian-main-1">नेटफ्लिक्स की लागत कितनी है?</div>
      ),
      content: (
        <p className="p-dawn">
          अपने स्मार्टफोन, टैबलेट, स्मार्ट टीवी, लैपटॉप या स्ट्रीमिंग डिवाइस पर
          नेटफ्लिक्स देखें, सब कुछ एक निश्चित मासिक शुल्क पर। प्लान ₹149 से ₹649
          प्रति माह तक हैं। कोई अतिरिक्त लागत नहीं, कोई अनुबंध नहीं।
        </p>
      ),
    },
    {
      title: <div className="accordian-main-1">मैं कहाँ देख सकता हूँ?</div>,
      content: (
        <p className="p-dawn">
          कहीं भी, कभी भी देखें. देखने के लिए अपने नेटफ्लिक्स खाते से साइन इन
          करें अपने पर्सनल कंप्यूटर से या तुरंत वेब पर Netflix.com पर इंटरनेट से
          जुड़ा कोई भी उपकरण जिसमें नेटफ्लिक्स ऐप भी शामिल है स्मार्ट टीवी,
          स्मार्टफोन, टैबलेट, स्ट्रीमिंग मीडिया प्लेयर और गेम शान्ति.
          <br />
          <br />
          आप अपने पसंदीदा शो iOS, Android, या से भी डाउनलोड कर सकते हैं विंडोज़
          10 ऐप. जब आप यात्रा पर हों तो देखने के लिए डाउनलोड का उपयोग करें बिना
          इंटरनेट कनेक्शन के. नेटफ्लिक्स को अपने साथ कहीं भी ले जाएं।
        </p>
      ),
    },
    {
      title: <div className="accordian-main-1">मैं कैसे रद्द करूं?</div>,
      content: (
        <p className="p-dawn">
          नेटफ्लिक्स लचीला है. कोई कष्टप्रद अनुबंध नहीं हैं और नहीं
          प्रतिबद्धताएँ आप दो क्लिक में आसानी से अपना खाता ऑनलाइन रद्द कर सकते
          हैं। कोई रद्दीकरण शुल्क नहीं है - अपना खाता किसी भी समय शुरू या बंद
          करें।
        </p>
      ),
    },
    {
      title: (
        <div style={{ width: "100%" }} className="accordian-main-1">
          मैं नेटफ्लिक्स पर क्या देख सकता हूँ?
        </div>
      ),
      content: (
        <p className="p-dawn">
          नेटफ्लिक्स के पास फीचर फिल्मों, वृत्तचित्रों, टीवी की एक विस्तृत
          लाइब्रेरी है शो, एनीमे, पुरस्कार विजेता नेटफ्लिक्स मूल, और बहुत कुछ।
          उतना ही देखो जैसा आप चाहें, जब भी आप चाहें।
        </p>
      ),
    },
    {
      title: (
        <div className="accordian-main-1">
          क्या नेटफ्लिक्स बच्चों के लिए अच्छा है?
        </div>
      ),
      content: (
        <p style={{ color: "white" }} className="p-dawn">
          नेटफ्लिक्स किड्स अनुभव आपकी सदस्यता में शामिल है जब बच्चे परिवार के
          अनुकूल टीवी शो और फिल्मों का आनंद लेते हैं तो माता-पिता नियंत्रण रखते
          हैं उनका अपना स्थान.
          <br />
          <br />
          बच्चों की प्रोफ़ाइल पिन-सुरक्षित अभिभावक नियंत्रण के साथ आती हैं जो
          आपको इसकी सुविधा देती हैं बच्चों द्वारा देखी और ब्लॉक की जा सकने वाली
          सामग्री की परिपक्वता रेटिंग को सीमित करें विशिष्ट शीर्षक जो आप नहीं
          चाहते कि बच्चे देखें।
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
                  <div className="setting-1">{item.title}</div>
                </div>
                <div className="setting-2">+</div>
              </div>
            </div>

            {activeIndex === index && <p>{item.content}</p>}
          </div>
        ))}
      </div>
    </>
  );
};

export default Accnew;
