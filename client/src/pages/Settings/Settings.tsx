import React from 'react';
import { connect } from 'react-redux'


const Settings: React.FC< {} > = (props: any) => {

  console.log('settings.props', props)

  return (
    <div>
      Settings
      <div>
        activeFrame {props.activeFrame}
      </div>
    </div>
  )
};

const mapStateToProps = (state: any) => {
  return state
}


export default connect(
  mapStateToProps,
  // mapDispatchToProps
)(Settings)
