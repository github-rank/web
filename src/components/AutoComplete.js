import React from 'react';
import AutoComplete from 'material-ui/AutoComplete';

export default class AutoCompleteExampleSimple extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      dataSource: [],
    };
  }

  handleUpdateInput = (value) => {
    const dataSourceTarget = this.props.dataSourceTarget;
    const dataList = {
      location: [
        'Russia',
        'China'
      ],
      language: [
        'javascript',
        'pyoton'
      ]
    };

    this.setState({
      dataSource: dataList[dataSourceTarget]
    });
  };

  render() {
    return (
      <div>
        <AutoComplete
          hintText={"type " + this.props.dataSourceTarget}
          dataSource={this.state.dataSource}
          onUpdateInput={this.handleUpdateInput}
        />
      </div>
    );
  }
}