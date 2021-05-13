import React, { Component } from 'react';
export default class ContactUs extends Component {
  render() {
    // eslint-disable-next-line
    let resumeData = this.props.resumeData;
    return (
      <section id="contact">
          <div className="row section-head">
            <div className="ten columns">
              <p className="lead">
              Feel free to contact me for any work or suggestions below
              </p>
            </div>
          </div>
          <div className="row">
            <aside className="eigth columns footer-widgets">
              <div className="widget">
                <h4><a href="mailto:austincu29@gmail.com">Email Me</a>
                </h4>
              </div>
            </aside>
          </div>
        </section>
        );
  }
}