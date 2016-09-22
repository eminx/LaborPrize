var Schemas = {};

Schemas.Rankings = new SimpleSchema({
	accepted: {
    type: Number,
    label: `Accepted`
	},
	declined: {
    type: Number,
    label: `Declined`
	},
	`_info.is_accepted`: {
		type: Boolean,
		label: `Is Prize Accepted?`
	},
	`_info.date_accepted`: {
		type: Date,
		label: `Date of Acceptance`
	},
	`_info.date_declined`: {
		type: Date,
		label: `Date of Decline`
	},
});

Rankings.attachSchema(Schemas.Rankings);