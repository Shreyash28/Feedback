import { createContext, useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [feedback, setFeedback] = useState([]);
  useEffect(() => {
    fetchFeedback();
  }, []);

  const fetchFeedback = async () => {
    const response = await fetch(`/feedback?_sort=id&_order=desc`);
    const data = await response.json();
    setFeedback(data);
    setIsLoading(false);
  };
  const deleteFeedback = async (id) => {
    window.confirm("Are you sure you want to delete");
    await fetch(`/feedback/${id}`, {
      method: "DELETE",
    });
    setFeedback(feedback.filter((item) => item.id !== id));
  };

  const updateFeedback = async (id, updItems) => {
    const response = await fetch(`/feedback/${id}`, {
      method: "PUT",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(updItems),
    });
    const data = await response.json();

    setFeedback(
      feedback.map((item) => (item.id === id ? { ...item, ...data } : item))
    );
  };

  const addFeedback = async (newFeedback) => {
    const response = await fetch("/feedback", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(newFeedback),
    });
    // newFeedback.id = uuidv4();
    const data = await response.json();
    console.log(newFeedback);
    setFeedback([data, ...feedback]);
  };
  const [feedbackEdit, setFeedbackEdit] = useState({
    id: {},
    edit: false,
  });
  const editFeedback = (item) => {
    setFeedbackEdit({
      item,
      edit: true,
    });
  };
  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        deleteFeedback,
        addFeedback,
        editFeedback,
        isLoading,
        feedbackEdit,
        updateFeedback,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
