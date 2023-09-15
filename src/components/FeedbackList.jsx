import { motion, AnimatePresence } from "framer-motion";
import React from "react";
import { useContext } from "react";
import FeedbackItem from "./FeedBackItem";
import Spinner from "./shared/Spinner";
//import PropTypes from "prop-types";
import FeedbackContext from "./context/FeedBackContext";

function FeedBackList() {
  const { feedback, isLoading } = useContext(FeedbackContext);
  if (!isLoading && (!feedback || feedback.length === 0)) {
    return <p>No feedback</p>;
  }
  console.log(feedback);
  return isLoading ? (
    <Spinner />
  ) : (
    <div className="feedback-list">
      <AnimatePresence>
        {feedback.map((item) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            layout
          >
            <FeedbackItem key={item.id} item={item} />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}

export default FeedBackList;
