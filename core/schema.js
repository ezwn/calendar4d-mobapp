const txt = `

# 05/04/2021 09:30:00

# ------------
# CalendarUser
# ------------

struct CalendarUser
    #userName: text(2..16)
	password: password(6..128)
   
# password: a1*a1*a1*
space<CalendarUser>
    "n" 	"$2y$12$K3tLc8T8t1v5T4Jusij76.iVp92vT2owjef4komhSfioiw7iYI8ei"
	"a"		"$2y$12$K3tLc8T8t1v5T4Jusij76.iVp92vT2owjef4komhSfioiw7iYI8ei"
	"d"		"$2y$12$K3tLc8T8t1v5T4Jusij76.iVp92vT2owjef4komhSfioiw7iYI8ei"
	
repo<CalendarUser> for System
	save()
	findByUserName()

# ----
# Role
# ----

struct Role
    #id: text(4..8)

finite space<Role>
    "ADMIN"
    "USER"


# --------
# UserRole
# --------

struct UserRole
    #id: text(16)
	userId: CalendarUser
    role: Role

space<UserRole>
    "n-ADMIN"	"n"		"ADMIN"
    "n-USER"	"n"		"USER"
	"a-USER"	"a"		"USER"
	"d-USER"	"d"		"USER"

repo<UserRole> for System
	findAllByUserId()

# -----
# Topic
# -----

struct Topic
    #id: text(16)
	@calendarUser: CalendarUser
    name: text(1..64)

space<Topic>
    "NICOLAS_HEALTH"    	"n"	"My health"
    "NICOLAS_CLIENTS"	    "n"	"Work time by client"
    "ANNE_CLIENTS"	    	"a"	"Work time by client"

repo<Topic> for Admin
	findAll()
	save()
	delete()

repo<Topic> for User
	findAllMine()
	saveMine()
	deleteMine()

# --------------------
# AttributeRequirement
# --------------------

struct AttributeRequirement
	#id: text(32)
	meaning: text

finite space<AttributeRequirement>
    "DISABLED"	"Attribute can't be used"
    "ENABLED"   "Attribute can be used"
    "REQUIRED"	"Attribute is required"

# --------------
# EntryTypeClass
# --------------

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

# ---------
# EntryType
# ---------

struct EntryType
    #id: text(16)
	@calendarUser: CalendarUser
	entryTypeClass: EntryTypeClass
    name: text(1..64)
	energyPerHour: int[0..1]

space<EntryType>
    "NOTE"      			"n"	"NOTE"						"Note"      			null
    "RESOURCE"      		"n"	"RESOURCE"					"Ressource"    			null

    "WALKING_SLOW"      	"n"	"PHYSICAL_ACTIVITY"			"Marche lente"      	210
    "WALKING_NORMAL"    	"n"	"PHYSICAL_ACTIVITY"			"Marche"            	300
    "WALKING_FAST"      	"n"	"PHYSICAL_ACTIVITY"			"Marche rapide"     	420
    "RUNNING"           	"n"	"PHYSICAL_ACTIVITY"			"Course"            	600
    "STEPPING"          	"n"	"PHYSICAL_ACTIVITY"			"Stepping"          	600
    "BIKING_10"         	"n"	"PHYSICAL_ACTIVITY"			"Vélo 10km/h"       	210
    "BIKING_15"         	"n"	"PHYSICAL_ACTIVITY"			"Vélo 15km/h"       	420
    "BIKING_20"         	"n"	"PHYSICAL_ACTIVITY"			"Vélo 20km/h"       	600

    "MATHEMATICS"      		"n"	"INTELLECTUAL_ACTIVITY"		"Mathématiques"      	null
    "CHINESE"		    	"n"	"INTELLECTUAL_ACTIVITY"		"Chinois"            	null
    "HEALTH"		    	"n"	"INTELLECTUAL_ACTIVITY"		"Santé"	            	null
    "ENGLISH"		    	"n"	"INTELLECTUAL_ACTIVITY"		"Anglais"            	null
    "ANXIETY"      			"n"	"SYMPTOM"					"Anxiété"				null

    "COUGH"					"n"	"SYMPTOM"					"Toux"					null
    "DIARRHEA"				"n"	"SYMPTOM"					"Diarrhé"				null
    "DISCOURAGEMENT"		"n"	"SYMPTOM"					"Découragement"			null
    "FATIGUE"      			"n"	"SYMPTOM"					"Fatigue"				null
    "HEADACHE"				"n"	"SYMPTOM"					"Mal de tête"			null
    "INSOMNIA"				"n"	"SYMPTOM"					"Insomnie"				null
    "NIGHT_SWEATS" 			"n"	"SYMPTOM"					"Sueurs nocturnes"		null
    "NAUSEA"				"n"	"SYMPTOM"					"Nausée"				null
    "RHINITIS"				"n"	"SYMPTOM"					"Rhinite"				null
    "BACK_PAIN"      		"n"	"SYMPTOM"					"Mal au dos"			null

repo<EntryType> for Admin
	findAll()
	save()
	delete()

repo<EntryType> for User
	findAllMine()
	saveMine()
	deleteMine()

# -----
# Entry
# -----

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

# ---------------------
# PhysicalActivityStats
# ---------------------
	
struct PhysicalActivityStats
    #date: text(16)
    duration: int
	energy: int

`;

export default txt;
