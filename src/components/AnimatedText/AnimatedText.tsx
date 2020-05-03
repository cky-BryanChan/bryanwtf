import React, { useState, useEffect } from "react";

//styles
import { Container, FlashingAnchor } from "./styles";

const duration = 110;
const s_duration = 300;

interface Props {
  words: string;
}

const AnimatedText: React.FC<Props> = (props) => {
  const [words, setWords] = useState("");
  useEffect(() => {
    const words_ = props.words;
    var d = duration;

    setTimeout(() => {
      for (let i = 0; i < words_.length; i++) {
        const w = words_[i];
        if (w === " ") {
          d += s_duration;
        } else if (w === ",") {
          d += s_duration * 4;
        } else {
          d += duration;
        }
        setTimeout(() => {
          setWords((wds) => wds + w);
        }, d);
      }
    }, 500);
  }, [props.words]);

  return (
    <Container>
      <p>
        {words}
        <FlashingAnchor>|</FlashingAnchor>
      </p>
    </Container>
  );
};

export default AnimatedText;
