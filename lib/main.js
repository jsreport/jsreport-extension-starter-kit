module.exports = (reporter, definition) => {
  // add new property to templates
  reporter.documentStore.model.entityTypes.TemplateType.custom = { type: 'Edm.String' }
}
