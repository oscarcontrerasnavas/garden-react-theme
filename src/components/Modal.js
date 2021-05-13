import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setModalStatus } from "../features/products/productsSlice";
import styled from "styled-components";

const Modal = ({ modal }) => {
  const { text, status } = modal;
  const dispatch = useDispatch();

  useEffect(() => {
    if (status) {
      const closeModal = setInterval(() => {
        dispatch(setModalStatus(false));
      }, 5000);
      return () => {
        clearInterval(closeModal);
      };
    }
  }, [status, dispatch]);

  return (
    <Wrapper>
      <div class={`modal fade ${status ? "show" : null}`} tabindex="-1">
        <div class="modal-dialog">
          <div class="modal-content border-0 shadow-sm">
            <div class="modal-header border-0">
              <button
                type="button"
                class="btn-close"
                onClick={() => dispatch(setModalStatus(false))}
              ></button>
            </div>
            <div class="modal-body">{text}</div>
            <div class="modal-footer d-flex justify-content-center border-0">
              <button
                type="button"
                class="btn btn-primary text-light"
                onClick={() => dispatch(setModalStatus(false))}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .modal {
    background-color: rgba(0, 0, 0, 0.3);

    &.show {
      display: block;
      opacity: 1;
    }
  }
`;
export default Modal;
