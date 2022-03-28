import React from "react";
import Highlighter from "react-highlight-words";
import Header from "./Header";
import chapters from "../chapters";
import "../styles/Chapter.css";

const Chapter = ({ chapter }) => {
  return (
    <>
      <Header
        title={chapters[chapter].title}
        prev={chapter}
        next={chapter + 2}
      />

      <div className="content">
        <img className="image" src={chapters[chapter].image} />

        <div className="info">
          <Highlighter
            highlightClassName="highlighted"
            searchWords={[
              "Hallucination",
              "Disorganized thinking",
              "Disturbed Perceptions",
              "Inappropriate Emotions",
              "Inappropriate Actions",
              "DSM-5",
              "Psychosis",
              "Schizophrenia",
              "Dissociative Identity Disorder",
              "Narcissistic Personality Disorder",
              "Borderline Personality Disorder",
              "Antisocial Personality Disorder",
              "Body Dysmorphic Disorder",
              "Delusions",
              "Deviant",
              "Dysfunctional",
              "Distressful",
              "Disorder",
              "Cognitive",
              "Trauma",
              "Post-traumatic stress disorder",
              "Post-traumatic growth",
              "Antipsychotic drugs",
              "Bulimia nervosa",
              "Dangerous",
              "Eclectic approach",
              "Psychotherapy",
            ]}
            autoEscape={true}
            textToHighlight={chapters[chapter].content}
          />
        </div>
      </div>
    </>
  );
};

export default Chapter;
