const txt = `

# 30/03/2021 17:21:00

struct CalendarUser
    #userName: text(2..16)
	password: password(6..128)
   
# password: a1*a1*a1*
space<CalendarUser>
    "n" 	"$2y$12$K3tLc8T8t1v5T4Jusij76.iVp92vT2owjef4komhSfioiw7iYI8ei"
	"a"		"$2y$12$K3tLc8T8t1v5T4Jusij76.iVp92vT2owjef4komhSfioiw7iYI8ei"
	"d"		"$2y$12$K3tLc8T8t1v5T4Jusij76.iVp92vT2owjef4komhSfioiw7iYI8ei"

struct Role
    #id: text(4..8)

finite space<Role>
    "ADMIN"
    "USER"

struct UserRole
    #id: text(16)
	userId: CalendarUser
    role: Role

space<UserRole>
    "n-ADMIN"	"n"		"ADMIN"
	"a-USER"	"a"		"USER"
	"d-USER"	"d"		"USER"

struct Topic
    #id: text(16)
	calendarUser: CalendarUser
    name: text(1..64)

space<Topic>
    "NICOLAS_HEALTH"    	"nicolas"	"My health"
    "NICOLAS_CLIENTS"	    "nicolas"	"Work time by client"
    "ANNE_CLIENTS"	    	"anne"		"Work time by client"

repo<Topic> for Admin
	findAll()
	save()
	delete()

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

struct EntryTypeClass
    #id: text(32)
    name: text
	duration: AttributeRequirement
	position: AttributeRequirement

finite space<EntryTypeClass>
    "NOTE" 					"Note"						"ENABLED"	"ENABLED"
    "PHYSICAL_ACTIVITY" 	"Physical activity"			"REQUIRED"	"ENABLED"
	"WORK"					"Work"						"REQUIRED"	"ENABLED"
	"INTELLECTUAL_ACTIVITY"	"Intellectual activity"		"REQUIRED"	"ENABLED"
    "SYMPTOM"   			"Symptom"					"ENABLED"	"DISABLED"
    "RESOURCE"				"Resource"					"DISABLED"	"REQUIRED"

struct EntryType
    #id: text(16)
	@calendarUser: CalendarUser
	entryTypeClass: EntryTypeClass
    name: text(1..64)
	physicalActivity: PhysicalActivity[0..1]

space<EntryType>
    "NOTE"      			"n"	"NOTE"						"Note"      			null
    "RESOURCE"      		"nicolas"	"RESOURCE"					"Ressource"    			null

    "WALKING_SLOW"      	"nicolas"	"PHYSICAL_ACTIVITY"			"Marche lente"      	"WALKING_SLOW"
    "WALKING_NORMAL"    	"nicolas"	"PHYSICAL_ACTIVITY"			"Marche"            	"WALKING_NORMAL"
    "WALKING_FAST"      	"nicolas"	"PHYSICAL_ACTIVITY"			"Marche rapide"     	"WALKING_FAST"
    "RUNNING"           	"nicolas"	"PHYSICAL_ACTIVITY"			"Course"            	"RUNNING"
    "STEPPING"          	"nicolas"	"PHYSICAL_ACTIVITY"			"Stepping"          	"STEPPING"
    "BIKING_10"         	"nicolas"	"PHYSICAL_ACTIVITY"			"Vélo 10km/h"       	"BIKING_10"
    "BIKING_15"         	"nicolas"	"PHYSICAL_ACTIVITY"			"Vélo 15km/h"       	"BIKING_15"
    "BIKING_20"         	"nicolas"	"PHYSICAL_ACTIVITY"			"Vélo 20km/h"       	"BIKING_20"

    "MATHEMATICS"      		"nicolas"	"INTELLECTUAL_ACTIVITY"		"Mathématiques"      	null
    "CHINESE"		    	"nicolas"	"INTELLECTUAL_ACTIVITY"		"Chinois"            	null
    "HEALTH"		    	"nicolas"	"INTELLECTUAL_ACTIVITY"		"Santé"	            	null
    "ENGLISH"		    	"nicolas"	"INTELLECTUAL_ACTIVITY"		"Anglais"            	null
    "ANXIETY"      			"nicolas"	"SYMPTOM"					"Anxiété"				null

    "COUGH"					"nicolas"	"SYMPTOM"					"Toux"					null
    "DIARRHEA"				"nicolas"	"SYMPTOM"					"Diarrhé"				null
    "DISCOURAGEMENT"		"nicolas"	"SYMPTOM"					"Découragement"			null
    "FATIGUE"      			"nicolas"	"SYMPTOM"					"Fatigue"				null
    "HEADACHE"				"nicolas"	"SYMPTOM"					"Mal de tête"			null
    "INSOMNIA"				"nicolas"	"SYMPTOM"					"Insomnie"				null
    "NIGHT_SWEATS" 			"nicolas"	"SYMPTOM"					"Sueurs nocturnes"		null
    "NAUSEA"				"nicolas"	"SYMPTOM"					"Nausée"				null
    "RHINITIS"				"nicolas"	"SYMPTOM"					"Rhinite"				null
    "BACK_PAIN"      		"nicolas"	"SYMPTOM"					"Mal au dos"			null

struct Entry
    #id: text(16)
	@calendarUser: CalendarUser
    type: EntryType
	topic: Topic
    time: datetime
    duration: duration[0..1]
	latitude: decimal(3,9)[0..1]
	longitude: decimal(2,9)[0..1]
	comment: text[0..1]
    *modificationTime: datetime[0..1]
	-deleted: bool[0..1]

repo<Entry> for Admin
	findAll()
	save()
	saveAll()
	delete()
	
repo<Entry> for User
	findAllMine()
	findAllMineByModificationTimeAfter()
	saveMine()
	saveAllMine()
	deleteMine()
	
repo<CalendarUser> for System
	save()
	findByUserName()

repo<UserRole> for System
	findAllByUserId()
	
struct PhysicalActivityStats
    #date: text(16)
    duration: int
	energy: int

`;

export default txt;
