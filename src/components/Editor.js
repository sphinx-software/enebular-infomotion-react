import React from 'react';
import PropTypes from 'prop-types';
import {infomotionUI} from 'enebular-infomotion'
import Modal from 'react-modal';

class Editor extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modalEditor: false
        }
    }

    onEditorClick() {

        this.setState({modalEditor: true}, () => {
            let graphEditor = infomotionUI.graphEditor(this.formEditorElement)
                .withDatasources(this.props.datasources)
                .withPluginManager(this.props.pluginManager)
                .withSettings(this.props.graphEditor)
                .hasCancelButton(this.props.hasCancelBtn)
                .make();

            this.props.onReady(graphEditor);

            graphEditor.open();

            graphEditor.onChange((config) => {
                this.props.onChange(config);
                this.closeEditorModal();
            });

            graphEditor.onCancel(() => {
                this.props.onCancel();
                this.closeEditorModal();
            });
        });
    }

    closeEditorModal() {
        this.setState({modalEditor: false})
    }

    render() {
        return <div style={{display: 'inline-block'}} className="info-react-control-wrapper">
            <button className={`btn-editor ${this.props.className}`} onClick={this.onEditorClick.bind(this)}>
                {this.props.children}
            </button>
            <Modal isOpen={this.state.modalEditor}
                   className='enebular-component-react-modal'
                   overlayClassName='enebular-component-react-overlay'
                   onRequestClose={this.closeEditorModal.bind(this)} contentLabel='Modal'>
                <div className='modal-content'>
                    <h3 style={{margin: '3px 0'}}>Editor Graph</h3>
                    <div ref={(element) => {
                        this.formEditorElement = element
                    }}/>
                </div>
            </Modal>
        </div>
    }
}

Editor.propTypes = {
    datasources: PropTypes.array.isRequired,
    pluginManager: PropTypes.any.isRequired,
    graphEditor: PropTypes.object.isRequired,
    className: PropTypes.string,
    hasCancelBtn: PropTypes.bool,
    onReady: PropTypes.func,
    onChange: PropTypes.func,
    onCancel: PropTypes.func
};

Editor.defaultProps = {
    className: '',
    hasCancelBtn: false,
    datasources: [],
    graphEditor: {},
    onReady: () => {
    },
    onChange: () => {
    },
    onCancel: () => {
    }
};

export default Editor;