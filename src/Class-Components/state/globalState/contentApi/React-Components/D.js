import React, { Component } from 'react'

import { nameContext } from './A'
import { ageContext } from './A'
import { colorContext } from './A'

export class D extends Component {
  render() {
    return <nameContext.Consumer>
      {
        (name) => {
         return <ageContext.Consumer>
            {
              (age) => {
                return <colorContext.Consumer>
                  {
                    (color) => {
                      return <div>
                        <h3>Name: {name}</h3>
                        <h3>Age: {age}</h3>
                        <h3>Color: {color}</h3>
                      </div>
                    }
                  }
                </colorContext.Consumer>
              }
            }
          </ageContext.Consumer>
        }
      }
    </nameContext.Consumer>
  }
}

export default D
