'use strict';

exports = module.exports = function(app, mongoose) {
	var eventSchema = new mongoose.Schema({
		event:{
			
			event_name:{type: String, default: ''},
			event_description:{type: String, default: ''},
			event_date: { type: Date, default: Date.now },
			event_venue:{type: String, default: ''}

          }
     });


  eventSchema.plugin(require('./plugins/pagedFind'));
  //eventSchema.index({ user: 1 });
  //eventSchema.index({ 'status.id': 1 });
  //eventtSchema.index({ search: 1 });
  eventSchema.set('autoIndex', (app.get('env') === 'development'));
  app.db.model('Event', eventSchema);


};