import Modal from "@mui/material/Modal";
import Paper from "@mui/material/Paper";

interface ModalType {
    isOpen:boolean,
    closeModal:any,
    children:any
}


const CustomModal = ({ isOpen, closeModal, children }:ModalType) => {
  return (
    <Modal open={isOpen} onClose={closeModal}>
      <Paper
        elevation={2}
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 800,
          maxWidth: "100%",
          maxHeight: "90%",
          overflowY: "auto",
        }}
      >
        {children}
      </Paper>
    </Modal>
  );
}

export default CustomModal;