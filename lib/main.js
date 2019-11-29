module.exports = (reporter, definition) => {
  // add new property to templates
  reporter.documentStore.model.entityTypes['TemplateType'].custom = {type: 'Edm.String'}

  // change the rendered template based on the custom property submitted
  reporter.beforeRenderListeners.add('custom', (req, res) => {
    // do it just for the main content, not for the headers or child templates
    if (!req.context.isChildRequest) {
      req.template.content = `Custom content added: ${req.template.custom} ${req.template.content}`
    }
  })
}
