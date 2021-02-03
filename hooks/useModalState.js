import { useState, useEffect } from "react";

export default (initialState) => {
  const [modalVisible, setModalVisible] = useState(initialState);
  const [forceModalVisible, setForceModalVisible] = useState(false);

  const setModal = (modalState) => {
    // tyring to open "already open" modal
    if (modalState && modalVisible) {
      setForceModalVisible(true);
    }
    setModalVisible(modalState);
  };

  useEffect(() => {
    if (forceModalVisible && modalVisible) {
      setModalVisible(false);
    }
    if (forceModalVisible && !modalVisible) {
      setForceModalVisible(false);
      setModalVisible(true);
    }
  }, [forceModalVisible, modalVisible]);

  return [modalVisible, setModal];
};
