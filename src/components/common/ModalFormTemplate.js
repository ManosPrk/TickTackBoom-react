import React from 'react';
import ModalTemplate from './ModalTemplate';
import FormTemplate from './FormTemplate';

function ModalFormTemplate(props) {
    return (
        <ModalTemplate
            title={props.modalTitle}
            modalButtonText={props.modalButtonText}
            body={
                <FormTemplate
                    formLabel={props.formLabel}
                    placeholder={props.formInputPlaceholder}
                    mutedText={props.handleClose}
                    buttonText={props.formButtonText}
                    handleSubmit={props.formHandleSubmit}
                    handleBlur={props.formInputHandleBlur}
                    name={props.formInputName}
                />
            }
        />
    );
}

export default ModalFormTemplate;