import Studio from 'jsreport-studio'

// a custom property section added to the templates
const Properties = (props) => (
  <div className='properties-section'>
    <div className='form-group'>
      <label>custom content</label>
      <input
        type='text'
        placeholder='a custom string'
        value={props.entity.custom}
        onChange={(v) => props.onChange({custom: v.target.value, _id: props.entity._id})}
      />
    </div>
  </div>
)

Studio.addPropertiesComponent('custom', Properties, (entity) => entity.__entitySet === 'templates')

Studio.initializeListeners.push(async () => {
  console.log('Doing some async initialization')
})

Studio.readyListeners.push(async () => {
  console.log('Studio is now rendered')
  Studio.openModal(() => <span>Hello from the custom extension</span>)
})
