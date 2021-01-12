const txt = `

# 08/12/2020 08:15:00

struct Subject
    #id: text(16)
    name: text

finite space<Subject>
    "ME" 				"Moi"

struct PhysicalActivity
    #id: text(16)
    energy: int

space<PhysicalActivity>
    "WALKING_SLOW"      210
    "WALKING_NORMAL"   	300
    "WALKING_FAST"     	420
    "RUNNING"          	600
    "STEPPING"      	600
    "BIKING_10"       	210
    "BIKING_15"       	420
    "BIKING_20"       	600

struct AttributeRequirement
	#id: text(32)
	meaning: text

finite space<AttributeRequirement>
    "DISABLED"	"Attribute can't be used"
    "ENABLED"   "Attribute can be used"
    "REQUIRED"	"Attribute is required"

struct EntryTypeCategory
    #id: text(32)
    name: text
	duration: AttributeRequirement
	position: AttributeRequirement

finite space<EntryTypeCategory>
    "NOTE" 					"Note"						"ENABLED"	"ENABLED"
    "PHYSICAL_ACTIVITY" 	"Activité physique"			"REQUIRED"	"ENABLED"
	"INTELLECTUAL_ACTIVITY"	"Activité intellectuelle"	"REQUIRED"	"ENABLED"
    "SYMPTOM"   			"Symptôme"					"ENABLED"	"DISABLED"
    "RESOURCE"				"Resource"					"DISABLED"	"REQUIRED"

struct EntryType
    #id: text(16)
	category: EntryTypeCategory
    name: text
	physicalActivity: PhysicalActivity[0..1]

space<EntryType>
    "NOTE"      			"NOTE"						"Note"      			null
    "RESOURCE"      		"RESOURCE"					"Ressource"    			null

    "WALKING_SLOW"      	"PHYSICAL_ACTIVITY"			"Marche lente"      	"WALKING_SLOW"
    "WALKING_NORMAL"    	"PHYSICAL_ACTIVITY"			"Marche"            	"WALKING_NORMAL"
    "WALKING_FAST"      	"PHYSICAL_ACTIVITY"			"Marche rapide"     	"WALKING_FAST"
    "RUNNING"           	"PHYSICAL_ACTIVITY"			"Course"            	"RUNNING"
    "STEPPING"          	"PHYSICAL_ACTIVITY"			"Stepping"          	"STEPPING"
    "BIKING_10"         	"PHYSICAL_ACTIVITY"			"Vélo 10km/h"       	"BIKING_10"
    "BIKING_15"         	"PHYSICAL_ACTIVITY"			"Vélo 15km/h"       	"BIKING_15"
    "BIKING_20"         	"PHYSICAL_ACTIVITY"			"Vélo 20km/h"       	"BIKING_20"

    "MATHEMATICS"      		"INTELLECTUAL_ACTIVITY"		"Mathématiques"      	null
    "CHINESE"		    	"INTELLECTUAL_ACTIVITY"		"Chinois"            	null
    "HEALTH"		    	"INTELLECTUAL_ACTIVITY"		"Santé"	            	null
    "ENGLISH"		    	"INTELLECTUAL_ACTIVITY"		"Anglais"            	null
    "ANXIETY"      			"SYMPTOM"					"Anxiété"				null

    "COUGH"					"SYMPTOM"					"Toux"					null
    "DIARRHEA"				"SYMPTOM"					"Diarrhé"				null
    "DISCOURAGEMENT"		"SYMPTOM"					"Découragement"			null
    "FATIGUE"      			"SYMPTOM"					"Fatigue"				null
    "HEADACHE"				"SYMPTOM"					"Mal de tête"			null
    "INSOMNIA"				"SYMPTOM"					"Insomnie"				null
    "NIGHT_SWEATS" 			"SYMPTOM"					"Sueurs nocturnes"		null
    "NAUSEA"				"SYMPTOM"					"Nausée"				null
    "RHINITIS"				"SYMPTOM"					"Rhinite"				null
    "BACK_PAIN"      		"SYMPTOM"					"Mal au dos"			null

struct Entry
    #id: text(16)
    type: EntryType
	subject: Subject
    time: datetime
    duration: duration[0..1]
	latitude: decimal(3,9)[0..1]
	longitude: decimal(2,9)[0..1]
	comment: text[0..1]
    @modificationTime: datetime[0..1]
	-deleted: bool[0..1]
	
repo<Entry>
	findAllByModificationTimeAfter(time)
	
struct PhysicalActivityStats
    #date: text(16)
    duration: int
	energy: int
	
`;

export default txt;