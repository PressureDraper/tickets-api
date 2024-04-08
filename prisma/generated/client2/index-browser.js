
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  detectRuntime,
} = require('./runtime/index-browser')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 5.3.1
 * Query Engine version: 61e140623197a131c2a6189271ffee05a7aa9a59
 */
Prisma.prismaVersion = {
  client: "5.3.1",
  engine: "61e140623197a131c2a6189271ffee05a7aa9a59"
}

Prisma.PrismaClientKnownRequestError = () => {
  throw new Error(`PrismaClientKnownRequestError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  throw new Error(`PrismaClientUnknownRequestError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientRustPanicError = () => {
  throw new Error(`PrismaClientRustPanicError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientInitializationError = () => {
  throw new Error(`PrismaClientInitializationError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientValidationError = () => {
  throw new Error(`PrismaClientValidationError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.NotFoundError = () => {
  throw new Error(`NotFoundError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  throw new Error(`sqltag is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.empty = () => {
  throw new Error(`empty is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.join = () => {
  throw new Error(`join is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.raw = () => {
  throw new Error(`raw is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  throw new Error(`Extensions.getExtensionContext is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.defineExtension = () => {
  throw new Error(`Extensions.defineExtension is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}

/**
 * Enums
 */

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.Adm_tutorialesScalarFieldEnum = {
  id: 'id',
  titulo: 'titulo',
  liga: 'liga',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Adm_tutoriales_rolesScalarFieldEnum = {
  id: 'id',
  id_tutorial: 'id_tutorial',
  id_roles: 'id_roles',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.BitacoraScalarFieldEnum = {
  id: 'id',
  idUsuario: 'idUsuario',
  idConfirmo: 'idConfirmo',
  nick: 'nick',
  modulo: 'modulo',
  accion: 'accion',
  datos: 'datos',
  datos_adicionales: 'datos_adicionales',
  ubicacion: 'ubicacion',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Cat_areasScalarFieldEnum = {
  id: 'id',
  clave: 'clave',
  nombre: 'nombre',
  nombre_corto: 'nombre_corto',
  id_via_ingreso: 'id_via_ingreso',
  zona: 'zona',
  estatus: 'estatus',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at'
};

exports.Prisma.Cat_asentamientosScalarFieldEnum = {
  id: 'id',
  d_codigo: 'd_codigo',
  d_asenta: 'd_asenta',
  d_tipo_asenta: 'd_tipo_asenta',
  d_mnpio: 'd_mnpio',
  d_estado: 'd_estado',
  d_ciudad: 'd_ciudad',
  d_cp: 'd_cp',
  c_estado: 'c_estado',
  c_oficina: 'c_oficina',
  c_cp: 'c_cp',
  c_tipo_asenta: 'c_tipo_asenta',
  c_mnpio: 'c_mnpio',
  id_asenta_cpcons: 'id_asenta_cpcons',
  d_zona: 'd_zona',
  c_cve_ciudad: 'c_cve_ciudad',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at'
};

exports.Prisma.Cat_asignacionesScalarFieldEnum = {
  id: 'id',
  nombre: 'nombre',
  deleted_at: 'deleted_at',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Cat_bancosScalarFieldEnum = {
  id: 'id',
  clave: 'clave',
  nombre: 'nombre',
  razon_social: 'razon_social',
  activo: 'activo',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at'
};

exports.Prisma.Cat_camasScalarFieldEnum = {
  id: 'id',
  nombre: 'nombre',
  estatus: 'estatus',
  tipo: 'tipo',
  activa: 'activa',
  id_area: 'id_area',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at'
};

exports.Prisma.Cat_categoriasScalarFieldEnum = {
  id: 'id',
  codigo: 'codigo',
  nombre: 'nombre',
  activo: 'activo',
  sueldo_base: 'sueldo_base',
  sueldo_diario: 'sueldo_diario',
  area: 'area',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at'
};

exports.Prisma.Cat_cateter_sitio_anatomicoScalarFieldEnum = {
  id: 'id',
  nombre: 'nombre',
  activo: 'activo',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Cat_cateter_tipoScalarFieldEnum = {
  id: 'id',
  nombre: 'nombre',
  activo: 'activo',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Cat_checklist_preguntasScalarFieldEnum = {
  id: 'id',
  nombre: 'nombre',
  formato: 'formato',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at'
};

exports.Prisma.Cat_checklist_respuestasScalarFieldEnum = {
  id: 'id',
  nombre: 'nombre',
  categoria: 'categoria',
  formato: 'formato',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at'
};

exports.Prisma.Cat_cie10ScalarFieldEnum = {
  id: 'id',
  letra: 'letra',
  catalog_key: 'catalog_key',
  asterisco: 'asterisco',
  nombre: 'nombre',
  lsex: 'lsex',
  linf: 'linf',
  lsup: 'lsup',
  trivial: 'trivial',
  erradicado: 'erradicado',
  n_inter: 'n_inter',
  nin: 'nin',
  ninmtobs: 'ninmtobs',
  no_cbd: 'no_cbd',
  no_aph: 'no_aph',
  fetal: 'fetal',
  clave_capitulo_type: 'clave_capitulo_type',
  capitulo_type: 'capitulo_type',
  rubrica_type: 'rubrica_type',
  year_modifi: 'year_modifi',
  year_aplicacion: 'year_aplicacion',
  notdiaria: 'notdiaria',
  notsemanal: 'notsemanal',
  sistema_especial: 'sistema_especial',
  birmm: 'birmm',
  cve_causa_type: 'cve_causa_type',
  causa_type: 'causa_type',
  epi_morta: 'epi_morta',
  epi_morta_m5: 'epi_morta_m5',
  edas_e_iras_en_m5: 'edas_e_iras_en_m5',
  lista1: 'lista1',
  lista5: 'lista5',
  prinmorta5: 'prinmorta5',
  prinmorbi: 'prinmorbi',
  lm_morbi: 'lm_morbi',
  lm_morta: 'lm_morta',
  lgbd165: 'lgbd165',
  lomsbeck: 'lomsbeck',
  lgbd190: 'lgbd190',
  es_causes: 'es_causes',
  num_causes: 'num_causes',
  es_suive_morta: 'es_suive_morta',
  daga: 'daga',
  epi_clave: 'epi_clave',
  epi_clave_desc: 'epi_clave_desc',
  es_suive_morb: 'es_suive_morb',
  es_suive_notin: 'es_suive_notin',
  es_suive_est_epi: 'es_suive_est_epi',
  es_suive_est_brote: 'es_suive_est_brote',
  sinac: 'sinac',
  codigox: 'codigox',
  cod_sit_lesion: 'cod_sit_lesion',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at'
};

exports.Prisma.Cat_cluesScalarFieldEnum = {
  id: 'id',
  clues: 'clues',
  inst: 'inst',
  cve_ent: 'cve_ent',
  cve_jur: 'cve_jur',
  cve_mun: 'cve_mun',
  cve_loc: 'cve_loc',
  tipo1: 'tipo1',
  tipo2: 'tipo2',
  nom_uni: 'nom_uni',
  domicil: 'domicil',
  cp: 'cp',
  respon_unidad: 'respon_unidad',
  estatus: 'estatus',
  numtel: 'numtel',
  email: 'email',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at'
};

exports.Prisma.Cat_codigos_postalesScalarFieldEnum = {
  id: 'id',
  clave: 'clave',
  nombre: 'nombre',
  abrev: 'abrev',
  id_municipio: 'id_municipio',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at'
};

exports.Prisma.Cat_codigos_urgenciasScalarFieldEnum = {
  id: 'id',
  nombre: 'nombre',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at'
};

exports.Prisma.Cat_coloniasScalarFieldEnum = {
  id: 'id',
  clave: 'clave',
  nombre: 'nombre',
  abrev: 'abrev',
  id_municipio: 'id_municipio',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at'
};

exports.Prisma.Cat_consulta_horariosScalarFieldEnum = {
  id: 'id',
  tipo: 'tipo',
  day: 'day',
  fecha_inicio: 'fecha_inicio',
  fecha_fin: 'fecha_fin',
  hora_inicio: 'hora_inicio',
  hora_fin: 'hora_fin',
  intervalo: 'intervalo',
  cita: 'cita',
  iniciar: 'iniciar',
  vacaciones: 'vacaciones',
  id_medico: 'id_medico',
  id_especialidad: 'id_especialidad',
  id_consultorio: 'id_consultorio',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at',
  isFestivos: 'isFestivos'
};

exports.Prisma.Cat_departamento_empleadoScalarFieldEnum = {
  id: 'id',
  id_departamento: 'id_departamento',
  id_empleado: 'id_empleado',
  deleted_at: 'deleted_at',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Cat_departamentosScalarFieldEnum = {
  id: 'id',
  codigo: 'codigo',
  nombre: 'nombre',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at'
};

exports.Prisma.Cat_documentosScalarFieldEnum = {
  id: 'id',
  nombre: 'nombre',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at'
};

exports.Prisma.Cat_enfermeriaScalarFieldEnum = {
  id: 'id',
  tabla: 'tabla',
  tipo: 'tipo',
  nombre: 'nombre',
  puntos: 'puntos',
  icon: 'icon',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at'
};

exports.Prisma.Cat_equiposScalarFieldEnum = {
  id: 'id',
  nombre: 'nombre',
  estado_situacional: 'estado_situacional',
  clasificacion_equipo: 'clasificacion_equipo',
  marca: 'marca',
  modelo: 'modelo',
  serie: 'serie',
  no_inventario: 'no_inventario',
  condicion_equipo: 'condicion_equipo',
  no_factura: 'no_factura',
  instructivo_trabajo: 'instructivo_trabajo',
  observaciones: 'observaciones',
  ficha_tecnica: 'ficha_tecnica',
  placa: 'placa',
  foto: 'foto',
  manual: 'manual',
  estatus: 'estatus',
  id_ubicacion: 'id_ubicacion',
  id_piso: 'id_piso',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at'
};

exports.Prisma.Cat_escolaridadesScalarFieldEnum = {
  id: 'id',
  nombre: 'nombre',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at'
};

exports.Prisma.Cat_escuelasScalarFieldEnum = {
  id: 'id',
  cct: 'cct',
  id_turno: 'id_turno',
  turno: 'turno',
  nombre: 'nombre',
  tipo_educativo: 'tipo_educativo',
  nivel_educativo: 'nivel_educativo',
  servicio_educativo: 'servicio_educativo',
  nombre_control: 'nombre_control',
  tipo_sostenimiento: 'tipo_sostenimiento',
  cve_entidad: 'cve_entidad',
  entidad: 'entidad',
  cve_municipio: 'cve_municipio',
  municipio: 'municipio',
  cve_localidad: 'cve_localidad',
  localidad: 'localidad',
  domicilio: 'domicilio',
  no_exterior: 'no_exterior',
  entre_calle: 'entre_calle',
  y_calle: 'y_calle',
  calle_posterior: 'calle_posterior',
  cve_colonia: 'cve_colonia',
  colonia: 'colonia',
  cp: 'cp',
  lada: 'lada',
  telefono: 'telefono',
  ext: 'ext',
  sitio_web: 'sitio_web',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at'
};

exports.Prisma.Cat_especialidadesScalarFieldEnum = {
  id: 'id',
  nombre: 'nombre',
  estatus: 'estatus',
  tipo: 'tipo',
  cve_sinba: 'cve_sinba',
  esp_sinba: 'esp_sinba',
  id_servicio: 'id_servicio',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at'
};

exports.Prisma.Cat_estado_civilScalarFieldEnum = {
  id: 'id',
  nombre: 'nombre',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at'
};

exports.Prisma.Cat_estadosScalarFieldEnum = {
  id: 'id',
  clave: 'clave',
  abreviatura: 'abreviatura',
  nombre: 'nombre',
  renapo: 'renapo',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at'
};

exports.Prisma.Cat_evento_adverso_factores_incidenteScalarFieldEnum = {
  id: 'id',
  nombre: 'nombre',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Cat_evento_adverso_tipo_incidenteScalarFieldEnum = {
  id: 'id',
  nombre: 'nombre',
  tipo: 'tipo',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Cat_extensionesScalarFieldEnum = {
  id: 'id',
  extension: 'extension',
  nombre: 'nombre',
  piso: 'piso',
  jefe: 'jefe',
  secretarias: 'secretarias',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at'
};

exports.Prisma.Cat_festivosScalarFieldEnum = {
  id: 'id',
  descripcion: 'descripcion',
  fecha: 'fecha',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at'
};

exports.Prisma.Cat_formato_preguntasScalarFieldEnum = {
  id: 'id',
  nombre: 'nombre',
  slug: 'slug',
  orden: 'orden',
  relacion: 'relacion',
  formato: 'formato',
  tipo: 'tipo',
  respuestas: 'respuestas',
  categoria: 'categoria',
  default: 'default',
  validation: 'validation',
  mask: 'mask',
  sexo: 'sexo',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at'
};

exports.Prisma.Cat_formato_respuestasScalarFieldEnum = {
  id: 'id',
  nombre: 'nombre',
  categoria: 'categoria',
  formato: 'formato',
  selected: 'selected',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at'
};

exports.Prisma.Cat_fuentes_financiamientoScalarFieldEnum = {
  id: 'id',
  nombre: 'nombre',
  deleted_at: 'deleted_at',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Cat_guardiasScalarFieldEnum = {
  id: 'id',
  posicion: 'posicion',
  nombre: 'nombre',
  activo: 'activo',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at'
};

exports.Prisma.Cat_historia_clinicaScalarFieldEnum = {
  id: 'id',
  nombre: 'nombre',
  seccion: 'seccion',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at'
};

exports.Prisma.Cat_iaas_germenesScalarFieldEnum = {
  id: 'id',
  clave: 'clave',
  nombre: 'nombre',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at'
};

exports.Prisma.Cat_iaas_sitios_infeccionScalarFieldEnum = {
  id: 'id',
  clave: 'clave',
  nombre: 'nombre',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at'
};

exports.Prisma.Cat_localidadesScalarFieldEnum = {
  id: 'id',
  clave: 'clave',
  nombre: 'nombre',
  id_estado: 'id_estado',
  id_municipio: 'id_municipio',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at'
};

exports.Prisma.Cat_marcasScalarFieldEnum = {
  id: 'id',
  nombre: 'nombre',
  estatus: 'estatus',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at'
};

exports.Prisma.Cat_medicamento_dosisScalarFieldEnum = {
  id: 'id',
  clave: 'clave',
  nombre: 'nombre',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at'
};

exports.Prisma.Cat_medicamento_horariosScalarFieldEnum = {
  id: 'id',
  clave: 'clave',
  nombre: 'nombre',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at'
};

exports.Prisma.Cat_medicamento_intervalosScalarFieldEnum = {
  id: 'id',
  clave: 'clave',
  nombre: 'nombre',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at'
};

exports.Prisma.Cat_medicamento_viasScalarFieldEnum = {
  id: 'id',
  clave: 'clave',
  nombre: 'nombre',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at'
};

exports.Prisma.Cat_modelosScalarFieldEnum = {
  id: 'id',
  nombre: 'nombre',
  estatus: 'estatus',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at'
};

exports.Prisma.Cat_motivos_bajaScalarFieldEnum = {
  id: 'id',
  nombre: 'nombre',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at'
};

exports.Prisma.Cat_municipiosScalarFieldEnum = {
  id: 'id',
  clave: 'clave',
  nombre: 'nombre',
  id_estado: 'id_estado',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at'
};

exports.Prisma.Cat_nacionalidadesScalarFieldEnum = {
  id: 'id',
  nombre: 'nombre',
  codigo: 'codigo',
  clave: 'clave',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at'
};

exports.Prisma.Cat_nandaScalarFieldEnum = {
  id: 'id',
  cve_dominio: 'cve_dominio',
  dominio: 'dominio',
  cve_clase: 'cve_clase',
  clase: 'clase',
  clase_descripcion: 'clase_descripcion',
  codigo: 'codigo',
  diagnostico: 'diagnostico',
  tipo: 'tipo',
  tipo_cae: 'tipo_cae',
  rango: 'rango',
  nombre: 'nombre',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at'
};

exports.Prisma.Cat_nivelesScalarFieldEnum = {
  id: 'id',
  clave: 'clave',
  nombre: 'nombre',
  estatus: 'estatus',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at'
};

exports.Prisma.Cat_ocupacionesScalarFieldEnum = {
  id: 'id',
  nombre: 'nombre',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at'
};

exports.Prisma.Cat_parentescosScalarFieldEnum = {
  id: 'id',
  nombre: 'nombre',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at'
};

exports.Prisma.Cat_patologia_procedimientosScalarFieldEnum = {
  id: 'id',
  nombre: 'nombre',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at'
};

exports.Prisma.Cat_patologia_tipo_estudioScalarFieldEnum = {
  id: 'id',
  nombre: 'nombre',
  clave: 'clave',
  tipo: 'tipo',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at'
};

exports.Prisma.Cat_pensionesScalarFieldEnum = {
  id: 'id',
  nombre: 'nombre',
  deleted_at: 'deleted_at',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Cat_permisosScalarFieldEnum = {
  id: 'id',
  nombre: 'nombre',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at'
};

exports.Prisma.Cat_pisosScalarFieldEnum = {
  id: 'id',
  nombre: 'nombre',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at'
};

exports.Prisma.Cat_plazasScalarFieldEnum = {
  id: 'id',
  nombre: 'nombre',
  clave: 'clave',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at'
};

exports.Prisma.Cat_procedimientos_invasivosScalarFieldEnum = {
  id: 'id',
  tabla: 'tabla',
  tipo: 'tipo',
  nombre: 'nombre',
  clave: 'clave',
  puntos: 'puntos',
  reglas: 'reglas',
  cvp: 'cvp',
  picc: 'picc',
  cvc: 'cvc',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at'
};

exports.Prisma.Cat_productosScalarFieldEnum = {
  id: 'id',
  clave: 'clave',
  nombre: 'nombre',
  nombre_lasa: 'nombre_lasa',
  nombre_comercial: 'nombre_comercial',
  presentacion: 'presentacion',
  cv: 'cv',
  antibioticos: 'antibioticos',
  laboratorio: 'laboratorio',
  familia: 'familia',
  cbn: 'cbn',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at'
};

exports.Prisma.Cat_programasScalarFieldEnum = {
  id: 'id',
  nombre: 'nombre',
  clave: 'clave',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at'
};

exports.Prisma.Cat_proveedoresScalarFieldEnum = {
  id: 'id',
  rfc: 'rfc',
  nombre: 'nombre',
  domicilio: 'domicilio',
  noexterior: 'noexterior',
  nointerior: 'nointerior',
  colonia: 'colonia',
  ciudad: 'ciudad',
  estado: 'estado',
  pais: 'pais',
  cp: 'cp',
  localidad: 'localidad',
  condpago: 'condpago',
  telefono: 'telefono',
  cuentad: 'cuentad',
  cuentah: 'cuentah',
  ivad: 'ivad',
  ivah: 'ivah',
  estatus: 'estatus',
  curp: 'curp',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at'
};

exports.Prisma.Cat_puestosScalarFieldEnum = {
  id: 'id',
  codigo: 'codigo',
  nombre: 'nombre',
  tipo: 'tipo',
  jefatura: 'jefatura',
  sueldo: 'sueldo',
  sueldo_diario: 'sueldo_diario',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at'
};

exports.Prisma.Cat_religionesScalarFieldEnum = {
  id: 'id',
  nombre: 'nombre',
  codigo: 'codigo',
  idgrupo: 'idgrupo',
  grupo: 'grupo',
  idsubgrupo: 'idsubgrupo',
  subgrupo: 'subgrupo',
  nombre_credo: 'nombre_credo',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at'
};

exports.Prisma.Cat_serviciosScalarFieldEnum = {
  id: 'id',
  nombre: 'nombre',
  estatus: 'estatus',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at',
  tipoAgenda: 'tipoAgenda'
};

exports.Prisma.Cat_sindicatosScalarFieldEnum = {
  id: 'id',
  nombre: 'nombre',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at'
};

exports.Prisma.Cat_subrogadosScalarFieldEnum = {
  id: 'id',
  nombre: 'nombre',
  clave: 'clave',
  rfc: 'rfc',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at'
};

exports.Prisma.Cat_tipo_sangreScalarFieldEnum = {
  id: 'id',
  nombre: 'nombre',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at'
};

exports.Prisma.Cat_tipos_empleadoScalarFieldEnum = {
  id: 'id',
  nombre: 'nombre',
  clave: 'clave',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at'
};

exports.Prisma.Cat_tipos_personaScalarFieldEnum = {
  id: 'id',
  modelo: 'modelo',
  nombre: 'nombre',
  inactivo: 'inactivo',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at'
};

exports.Prisma.Cat_tipos_recursoScalarFieldEnum = {
  id: 'id',
  nombre: 'nombre',
  clave: 'clave',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at'
};

exports.Prisma.Cat_turnosScalarFieldEnum = {
  id: 'id',
  nombre: 'nombre',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at'
};

exports.Prisma.Cat_ubicacionesScalarFieldEnum = {
  id_ubicacion: 'id_ubicacion',
  nombre: 'nombre',
  estatus: 'estatus',
  id_piso: 'id_piso',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at',
  id_departamento: 'id_departamento'
};

exports.Prisma.Cat_vehiculo_marcaScalarFieldEnum = {
  id: 'id',
  nombre: 'nombre',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at'
};

exports.Prisma.Cat_vehiculo_submarcaScalarFieldEnum = {
  id: 'id',
  nombre: 'nombre',
  id_marca: 'id_marca',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at'
};

exports.Prisma.Cat_vias_ingresoScalarFieldEnum = {
  id: 'id',
  nombre: 'nombre',
  icon: 'icon',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at'
};

exports.Prisma.Cfg_config_systemScalarFieldEnum = {
  id: 'id',
  id_nivel: 'id_nivel',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Cja_programasScalarFieldEnum = {
  IdPrograma: 'IdPrograma',
  ProgCve: 'ProgCve',
  ProgDesc: 'ProgDesc',
  ProgSiglas: 'ProgSiglas'
};

exports.Prisma.Cmp_contactosScalarFieldEnum = {
  id: 'id',
  tipo: 'tipo',
  descripcion: 'descripcion',
  observaciones: 'observaciones',
  id_persona: 'id_persona',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at'
};

exports.Prisma.Cmp_documentacionScalarFieldEnum = {
  id: 'id',
  modelo: 'modelo',
  id_modelo: 'id_modelo',
  id_documento: 'id_documento',
  path_documento: 'path_documento',
  idUser: 'idUser',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at'
};

exports.Prisma.Cmp_domiciliosScalarFieldEnum = {
  id: 'id',
  tipo: 'tipo',
  calle: 'calle',
  num_interior: 'num_interior',
  num_exterior: 'num_exterior',
  telefono: 'telefono',
  cp: 'cp',
  entre_calle: 'entre_calle',
  y_calle: 'y_calle',
  calle_posterior: 'calle_posterior',
  descripcion_ubicacion: 'descripcion_ubicacion',
  id_estado: 'id_estado',
  id_municipio: 'id_municipio',
  id_localidad: 'id_localidad',
  id_asentamiento: 'id_asentamiento',
  id_persona: 'id_persona',
  idUser: 'idUser',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at'
};

exports.Prisma.Cmp_educacionScalarFieldEnum = {
  id: 'id',
  id_persona: 'id_persona',
  id_escolaridad: 'id_escolaridad',
  escuela: 'escuela',
  carrera: 'carrera',
  periodo_inicio: 'periodo_inicio',
  periodo_fin: 'periodo_fin',
  cedula: 'cedula',
  idUser: 'idUser',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at'
};

exports.Prisma.Cmp_familiaresScalarFieldEnum = {
  id: 'id',
  tipo_familiar: 'tipo_familiar',
  primer_apellido: 'primer_apellido',
  segundo_apellido: 'segundo_apellido',
  nombres: 'nombres',
  id_parentesco: 'id_parentesco',
  calle: 'calle',
  num_interior: 'num_interior',
  num_exterior: 'num_exterior',
  telefono: 'telefono',
  cp: 'cp',
  entre_calle: 'entre_calle',
  y_calle: 'y_calle',
  calle_posterior: 'calle_posterior',
  descripcion_ubicacion: 'descripcion_ubicacion',
  id_estado: 'id_estado',
  id_municipio: 'id_municipio',
  id_localidad: 'id_localidad',
  id_asentamiento: 'id_asentamiento',
  id_persona: 'id_persona',
  idUser: 'idUser',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at'
};

exports.Prisma.Cmp_firmasScalarFieldEnum = {
  id: 'id',
  modelo_firma: 'modelo_firma',
  image: 'image',
  id_modelo: 'id_modelo',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at'
};

exports.Prisma.Cmp_personaScalarFieldEnum = {
  id: 'id',
  primer_apellido: 'primer_apellido',
  segundo_apellido: 'segundo_apellido',
  nombres: 'nombres',
  fecha_nacimiento: 'fecha_nacimiento',
  curp: 'curp',
  rfc: 'rfc',
  sexo: 'sexo',
  estado_nacimiento: 'estado_nacimiento',
  medios_comunicacion: 'medios_comunicacion',
  fecha_defuncion: 'fecha_defuncion',
  defuncion_observaciones: 'defuncion_observaciones',
  id_ocupacion: 'id_ocupacion',
  id_estadocivil: 'id_estadocivil',
  id_tiposangre: 'id_tiposangre',
  id_escolaridad: 'id_escolaridad',
  id_religion: 'id_religion',
  id_nacionalidad: 'id_nacionalidad',
  curp_verificada: 'curp_verificada',
  motivo_verificacion_curp: 'motivo_verificacion_curp',
  created_user: 'created_user',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at'
};

exports.Prisma.Enf_escala_valoracionScalarFieldEnum = {
  id: 'id',
  id_eva: 'id_eva',
  puntos_eva: 'puntos_eva',
  id_criterio_ocular: 'id_criterio_ocular',
  puntos_criterio_ocular: 'puntos_criterio_ocular',
  id_criterio_verbal: 'id_criterio_verbal',
  puntos_criterio_verbal: 'puntos_criterio_verbal',
  id_criterio_motora: 'id_criterio_motora',
  puntos_criterio_motora: 'puntos_criterio_motora',
  riesgo_caidas: 'riesgo_caidas',
  puntos_riesgo_caidas: 'puntos_riesgo_caidas',
  id_percepcion: 'id_percepcion',
  puntos_percepcion: 'puntos_percepcion',
  id_humedad: 'id_humedad',
  puntos_humedad: 'puntos_humedad',
  id_actividad: 'id_actividad',
  puntos_actividad: 'puntos_actividad',
  id_movilidad: 'id_movilidad',
  puntos_movilidad: 'puntos_movilidad',
  id_nutricion: 'id_nutricion',
  puntos_nutricion: 'puntos_nutricion',
  id_roce_lesiones: 'id_roce_lesiones',
  puntos_lesiones: 'puntos_lesiones',
  id_ingreso: 'id_ingreso',
  id_user: 'id_user',
  id_autorizo: 'id_autorizo',
  id_cancelo: 'id_cancelo',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at'
};

exports.Prisma.Enf_medidas_antropometricasScalarFieldEnum = {
  id: 'id',
  peso: 'peso',
  talla: 'talla',
  id_ingreso: 'id_ingreso',
  id_user: 'id_user',
  id_autorizo: 'id_autorizo',
  id_cancelo: 'id_cancelo',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at'
};

exports.Prisma.Enf_oxigenoterapiaScalarFieldEnum = {
  id: 'id',
  id_administracion: 'id_administracion',
  fraccion_inspirada: 'fraccion_inspirada',
  presion_positiva: 'presion_positiva',
  id_sedaccion: 'id_sedaccion',
  id_signos: 'id_signos',
  id_ingreso: 'id_ingreso',
  id_user: 'id_user',
  id_autorizo: 'id_autorizo',
  id_cancelo: 'id_cancelo',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at'
};

exports.Prisma.Enf_procedimientos_invasivosScalarFieldEnum = {
  id: 'id',
  fecha_instalacion: 'fecha_instalacion',
  calibre: 'calibre',
  lumenes: 'lumenes',
  centimetros_introducidos: 'centimetros_introducidos',
  fecha_retiro: 'fecha_retiro',
  id_subtipo: 'id_subtipo',
  id_instalo: 'id_instalo',
  id_flebitis: 'id_flebitis',
  id_sitio: 'id_sitio',
  id_retiro: 'id_retiro',
  id_ubicacion: 'id_ubicacion',
  id_ingreso: 'id_ingreso',
  id_user: 'id_user',
  id_autorizo: 'id_autorizo',
  id_cancelo: 'id_cancelo',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at'
};

exports.Prisma.Enf_procedimientos_invasivos_detalleScalarFieldEnum = {
  id: 'id',
  tipo: 'tipo',
  fecha: 'fecha',
  observaciones: 'observaciones',
  id_retiro: 'id_retiro',
  id_procedimiento: 'id_procedimiento',
  id_ubicacion: 'id_ubicacion',
  id_user: 'id_user',
  id_autorizo: 'id_autorizo',
  id_cancelo: 'id_cancelo',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at'
};

exports.Prisma.Enf_ulceras_presionScalarFieldEnum = {
  id: 'id',
  id_cuerpo: 'id_cuerpo',
  id_longitud: 'id_longitud',
  id_exudado: 'id_exudado',
  id_tejido: 'id_tejido',
  id_ingreso: 'id_ingreso',
  id_user: 'id_user',
  id_autorizo: 'id_autorizo',
  id_cancelo: 'id_cancelo',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at'
};

exports.Prisma.Hcl_antecedentes_familiaresScalarFieldEnum = {
  id: 'id',
  linea: 'linea',
  enfermedad: 'enfermedad',
  observaciones: 'observaciones',
  id_historia: 'id_historia',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at'
};

exports.Prisma.Hcl_historia_clinicaScalarFieldEnum = {
  id: 'id',
  alimentacion: 'alimentacion',
  higiene: 'higiene',
  habitacion: 'habitacion',
  hacinamiento: 'hacinamiento',
  zoonosis: 'zoonosis',
  toximanias: 'toximanias',
  tabaquismo: 'tabaquismo',
  tabaquismo_tiempo: 'tabaquismo_tiempo',
  tabaquismo_cigarros: 'tabaquismo_cigarros',
  ingesta_bebidas_embriagantes: 'ingesta_bebidas_embriagantes',
  llega_embriagez: 'llega_embriagez',
  frecuencia_embriaguez: 'frecuencia_embriaguez',
  alergias: 'alergias',
  quirurgicos: 'quirurgicos',
  transfucionales: 'transfucionales',
  traumaticos: 'traumaticos',
  epilepsia: 'epilepsia',
  obesidad: 'obesidad',
  respiratorios: 'respiratorios',
  cardiopatias: 'cardiopatias',
  infecciones: 'infecciones',
  fiebre_reumatica: 'fiebre_reumatica',
  hospitalizacion: 'hospitalizacion',
  antecedentes_patologicos_otros: 'antecedentes_patologicos_otros',
  menarca: 'menarca',
  ritmo: 'ritmo',
  vida_sexual: 'vida_sexual',
  ultima_mestruacion: 'ultima_mestruacion',
  control_prenatal: 'control_prenatal',
  gesta: 'gesta',
  partos: 'partos',
  abortos: 'abortos',
  cesareas: 'cesareas',
  obitos: 'obitos',
  planificacion_familiar: 'planificacion_familiar',
  planificacion_tipo: 'planificacion_tipo',
  enfermedad_embarazo: 'enfermedad_embarazo',
  climaterio: 'climaterio',
  climaterio_inicio: 'climaterio_inicio',
  aparato_digestivo: 'aparato_digestivo',
  aparato_digestivo_observaciones: 'aparato_digestivo_observaciones',
  aparato_respiratorio: 'aparato_respiratorio',
  aparato_respiratorio_observaciones: 'aparato_respiratorio_observaciones',
  aparato_cardiovascular: 'aparato_cardiovascular',
  aparato_cardiovascular_observaciones: 'aparato_cardiovascular_observaciones',
  sistema_musculo_esqueletico: 'sistema_musculo_esqueletico',
  sistema_musculo_esqueletico_observaciones: 'sistema_musculo_esqueletico_observaciones',
  aparato_genito_urinario: 'aparato_genito_urinario',
  aparato_genito_urinario_observaciones: 'aparato_genito_urinario_observaciones',
  sistema_endocrino: 'sistema_endocrino',
  sistema_endocrino_observaciones: 'sistema_endocrino_observaciones',
  sistema_nervioso_central: 'sistema_nervioso_central',
  sistema_nervioso_central_observaciones: 'sistema_nervioso_central_observaciones',
  sistema_tegumentario: 'sistema_tegumentario',
  sistema_tegumentario_observaciones: 'sistema_tegumentario_observaciones',
  organos_sentidos: 'organos_sentidos',
  organos_sentidos_observaciones: 'organos_sentidos_observaciones',
  procedimiento_actual: 'procedimiento_actual',
  exploracion_fisica: 'exploracion_fisica',
  radiografia: 'radiografia',
  radiografia_observaciones: 'radiografia_observaciones',
  electrocardiograma: 'electrocardiograma',
  electrocardiograma_observaciones: 'electrocardiograma_observaciones',
  tomografia: 'tomografia',
  tomografia_observaciones: 'tomografia_observaciones',
  laboratorio: 'laboratorio',
  laboratorio_observaciones: 'laboratorio_observaciones',
  gases_arteriales: 'gases_arteriales',
  gases_arteriales_observaciones: 'gases_arteriales_observaciones',
  cirugia_mayor: 'cirugia_mayor',
  cabeza: 'cabeza',
  cuello: 'cuello',
  torax: 'torax',
  abdomen: 'abdomen',
  extremidades: 'extremidades',
  genitales: 'genitales',
  resultados_previos: 'resultados_previos',
  terapia_empleada: 'terapia_empleada',
  diagnosticos: 'diagnosticos',
  plan: 'plan',
  id_paciente: 'id_paciente',
  id_ingreso: 'id_ingreso',
  id_user: 'id_user',
  id_autorizo: 'id_autorizo',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at'
};

exports.Prisma.Hpz_auxiliares_dx_comentariosScalarFieldEnum = {
  id: 'id',
  comentario: 'comentario',
  id_auxiliar: 'id_auxiliar',
  id_user: 'id_user',
  id_autorizo: 'id_autorizo',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at'
};

exports.Prisma.Hpz_cama_historialScalarFieldEnum = {
  id: 'id',
  id_servicio: 'id_servicio',
  id_especialidad: 'id_especialidad',
  id_area: 'id_area',
  id_cama: 'id_cama',
  id_ingreso: 'id_ingreso',
  id_medico: 'id_medico',
  id_diagnostico: 'id_diagnostico',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Hpz_cateter_complicaciones_instalacionScalarFieldEnum = {
  id: 'id',
  nombre: 'nombre',
  activo: 'activo',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Hpz_cateter_instalacionScalarFieldEnum = {
  id: 'id',
  fecha_instalacion: 'fecha_instalacion',
  fecha_retiro: 'fecha_retiro',
  id_tipo: 'id_tipo',
  id_sitio: 'id_sitio',
  id_instalo: 'id_instalo',
  id_ingreso: 'id_ingreso',
  id_ubicacion: 'id_ubicacion',
  id_retiro: 'id_retiro',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at'
};

exports.Prisma.Hpz_cateter_problemas_manejoScalarFieldEnum = {
  id: 'id',
  nombre: 'nombre',
  activo: 'activo',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Hpz_cateter_tipos_insercionScalarFieldEnum = {
  id: 'id',
  nombre: 'nombre',
  activo: 'activo',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Hpz_clue_historialScalarFieldEnum = {
  id: 'id',
  id_ingreso: 'id_ingreso',
  id_clue: 'id_clue',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Hpz_dx_historialScalarFieldEnum = {
  id: 'id',
  dx_informal: 'dx_informal',
  activo: 'activo',
  ingreso: 'ingreso',
  egreso: 'egreso',
  id_diagnostico: 'id_diagnostico',
  id_ingreso: 'id_ingreso',
  id_medico: 'id_medico',
  id_ubicacion: 'id_ubicacion',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Hpz_enf_intervencionesScalarFieldEnum = {
  id: 'id',
  codigo_nanda: 'codigo_nanda',
  intervencion: 'intervencion',
  motivo_cancelacion: 'motivo_cancelacion',
  fecha_elaboracion: 'fecha_elaboracion',
  id_factor: 'id_factor',
  id_sintoma: 'id_sintoma',
  id_ingreso: 'id_ingreso',
  id_user: 'id_user',
  id_autorizo: 'id_autorizo',
  id_cancelo: 'id_cancelo',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at'
};

exports.Prisma.Hpz_formatos_medicosScalarFieldEnum = {
  id: 'id',
  id_pregunta: 'id_pregunta',
  id_respuesta: 'id_respuesta',
  id_nota: 'id_nota',
  observaciones: 'observaciones',
  id_user: 'id_user',
  id_autorizo: 'id_autorizo',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at'
};

exports.Prisma.Hpz_indicacion_medicamentosScalarFieldEnum = {
  id: 'id',
  cantidad: 'cantidad',
  estatus: 'estatus',
  observaciones: 'observaciones',
  id_clave: 'id_clave',
  id_dosis: 'id_dosis',
  id_via: 'id_via',
  id_intervalo: 'id_intervalo',
  id_hora: 'id_hora',
  id_ingreso: 'id_ingreso',
  id_user: 'id_user',
  id_autorizo: 'id_autorizo',
  id_suspendio: 'id_suspendio',
  suspended_at: 'suspended_at',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at'
};

exports.Prisma.Hpz_indicaciones_medicasScalarFieldEnum = {
  id: 'id',
  dieta: 'dieta',
  posicion: 'posicion',
  deambulacion: 'deambulacion',
  bano: 'bano',
  curacion: 'curacion',
  signos_vitales: 'signos_vitales',
  medidas_antitromboticas: 'medidas_antitromboticas',
  fisio_pulmonar: 'fisio_pulmonar',
  ulceras_presion: 'ulceras_presion',
  proteccion_caidas: 'proteccion_caidas',
  otras_medidas: 'otras_medidas',
  apoyo_ventilatorio: 'apoyo_ventilatorio',
  soluciones: 'soluciones',
  saturometria: 'saturometria',
  pvc: 'pvc',
  diuresis: 'diuresis',
  balance_hidrico: 'balance_hidrico',
  glucometria: 'glucometria',
  eva: 'eva',
  glasglow: 'glasglow',
  perimetro_abdominal: 'perimetro_abdominal',
  examenes_laboratorio: 'examenes_laboratorio',
  interconsultas: 'interconsultas',
  infusiones: 'infusiones',
  id_ingreso: 'id_ingreso',
  id_adscrito: 'id_adscrito',
  id_residente: 'id_residente',
  id_user: 'id_user',
  id_autorizo: 'id_autorizo',
  id_cancelo: 'id_cancelo',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at'
};

exports.Prisma.Hpz_ingreso_consultaScalarFieldEnum = {
  id: 'id',
  fecha_cita: 'fecha_cita',
  fecha_ingreso: 'fecha_ingreso',
  via_ingreso: 'via_ingreso',
  dx_informal: 'dx_informal',
  observaciones: 'observaciones',
  caso_medico_legal: 'caso_medico_legal',
  fecha_egreso: 'fecha_egreso',
  tipo_cita: 'tipo_cita',
  fecha_cita_inicio: 'fecha_cita_inicio',
  fecha_cita_fin: 'fecha_cita_fin',
  estatus: 'estatus',
  id_servicio: 'id_servicio',
  id_especialidad: 'id_especialidad',
  id_clue_referencia: 'id_clue_referencia',
  id_clue_contrareferencia: 'id_clue_contrareferencia',
  id_clue_atencion: 'id_clue_atencion',
  id_medico: 'id_medico',
  id_diagnostico: 'id_diagnostico',
  id_paciente: 'id_paciente',
  id_user: 'id_user',
  created_user: 'created_user',
  id_consultorio: 'id_consultorio',
  id_ingreso: 'id_ingreso',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at'
};

exports.Prisma.Hpz_ingreso_epidemio_iaasScalarFieldEnum = {
  id: 'id',
  fecha_deteccion: 'fecha_deteccion',
  fecha_resolucion: 'fecha_resolucion',
  observaciones: 'observaciones',
  id_ingreso: 'id_ingreso',
  id_germen: 'id_germen',
  id_sitio: 'id_sitio',
  id_ubicacion: 'id_ubicacion',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at'
};

exports.Prisma.Hpz_ingreso_hospitalarioScalarFieldEnum = {
  id: 'id',
  tipo: 'tipo',
  fecha_ingreso: 'fecha_ingreso',
  medico_referencia: 'medico_referencia',
  folio_referencia: 'folio_referencia',
  estado_salud: 'estado_salud',
  estado_ingreso: 'estado_ingreso',
  codigo_atencion: 'codigo_atencion',
  observaciones: 'observaciones',
  contigencia: 'contigencia',
  caso_medico_legal: 'caso_medico_legal',
  dx_ingreso: 'dx_ingreso',
  dx_informal: 'dx_informal',
  alta_medica_motivo: 'alta_medica_motivo',
  alta_medica_otro_motivo: 'alta_medica_otro_motivo',
  alta_medica_fecha: 'alta_medica_fecha',
  fecha_egreso: 'fecha_egreso',
  remision: 'remision',
  defuncion_fecha: 'defuncion_fecha',
  id_via_ingreso: 'id_via_ingreso',
  id_programa: 'id_programa',
  id_clue_referencia: 'id_clue_referencia',
  id_medico_contrarefiere: 'id_medico_contrarefiere',
  id_clue_contrareferencia: 'id_clue_contrareferencia',
  id_medico: 'id_medico',
  id_nivel: 'id_nivel',
  id_diagnostico: 'id_diagnostico',
  id_servicio: 'id_servicio',
  id_especialidad: 'id_especialidad',
  id_area: 'id_area',
  id_cama: 'id_cama',
  id_paciente: 'id_paciente',
  id_clue_atencion: 'id_clue_atencion',
  id_codigo_urgencia: 'id_codigo_urgencia',
  id_user: 'id_user',
  id_user_confirmacion: 'id_user_confirmacion',
  created_user: 'created_user',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at'
};

exports.Prisma.Hpz_ingreso_nom046ScalarFieldEnum = {
  id: 'id',
  folio_oficio: 'folio_oficio',
  numero_carpeta: 'numero_carpeta',
  observaciones: 'observaciones',
  id_ingreso: 'id_ingreso',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at'
};

exports.Prisma.Hpz_ingreso_signos_vitalesScalarFieldEnum = {
  id: 'id',
  tension_arterial_sistolica: 'tension_arterial_sistolica',
  tension_arterial_diastolica: 'tension_arterial_diastolica',
  frecuencia_cardiaca: 'frecuencia_cardiaca',
  frecuencia_respiratoria: 'frecuencia_respiratoria',
  peso: 'peso',
  talla: 'talla',
  temperatura: 'temperatura',
  uresis: 'uresis',
  glucemia_capilar: 'glucemia_capilar',
  saturacion_parcial_oxigeno: 'saturacion_parcial_oxigeno',
  cancelacion: 'cancelacion',
  id_ingreso: 'id_ingreso',
  id_user: 'id_user',
  id_autorizo: 'id_autorizo',
  id_cancelo: 'id_cancelo',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Hpz_medicamento_ministracionScalarFieldEnum = {
  id: 'id',
  id_medicamento: 'id_medicamento',
  fecha_suministracion: 'fecha_suministracion',
  observaciones: 'observaciones',
  id_user: 'id_user',
  id_autorizo: 'id_autorizo',
  id_cancelo: 'id_cancelo',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at'
};

exports.Prisma.Hpz_nivel_historialScalarFieldEnum = {
  id: 'id',
  id_paciente: 'id_paciente',
  id_nivel: 'id_nivel',
  caso: 'caso',
  observaciones: 'observaciones',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Hpz_nota_alta_medicaScalarFieldEnum = {
  id: 'id',
  motivo: 'motivo',
  otro_motivo: 'otro_motivo',
  cirugias: 'cirugias',
  estudios_realizados: 'estudios_realizados',
  tratamiento_global: 'tratamiento_global',
  tratamiento_egreso: 'tratamiento_egreso',
  problemas_clinicos_resolver: 'problemas_clinicos_resolver',
  atencion_factores_riesgo: 'atencion_factores_riesgo',
  pronostico_egreso: 'pronostico_egreso',
  proximas_citas: 'proximas_citas',
  alta_medica_fecha: 'alta_medica_fecha',
  id_nota: 'id_nota',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at'
};

exports.Prisma.Hpz_notas_diagnosticosScalarFieldEnum = {
  id: 'id',
  id_nota: 'id_nota',
  id_diagnostico: 'id_diagnostico',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Hpz_pacienteScalarFieldEnum = {
  id: 'id',
  expediente: 'expediente',
  num_seguridad_social: 'num_seguridad_social',
  tipo_paciente: 'tipo_paciente',
  estatus: 'estatus',
  capasits: 'capasits',
  expediente_fisico: 'expediente_fisico',
  expediente_fisico_elaboro: 'expediente_fisico_elaboro',
  expediente_fisico_fecha: 'expediente_fisico_fecha',
  atencion_prioritaria: 'atencion_prioritaria',
  migrado: 'migrado',
  id_nivel: 'id_nivel',
  id_persona: 'id_persona',
  id_subrogado: 'id_subrogado',
  created_user: 'created_user',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at'
};

exports.Prisma.Hpz_paciente_auxiliares_diagnosticoScalarFieldEnum = {
  id: 'id',
  tipo: 'tipo',
  atencion: 'atencion',
  prioridad: 'prioridad',
  observaciones: 'observaciones',
  observaciones_laboratorio: 'observaciones_laboratorio',
  estatus: 'estatus',
  estatus_caja: 'estatus_caja',
  motivo: 'motivo',
  fecha_atencion: 'fecha_atencion',
  id_ingreso: 'id_ingreso',
  id_ubicacion: 'id_ubicacion',
  id_especialidad: 'id_especialidad',
  id_user: 'id_user',
  id_user_confirmacion: 'id_user_confirmacion',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at'
};

exports.Prisma.Hpz_paciente_est_socioeconomicoScalarFieldEnum = {
  id: 'id',
  ingreso: 'ingreso',
  num_dependientes: 'num_dependientes',
  alimentacion: 'alimentacion',
  renta: 'renta',
  agua: 'agua',
  luz: 'luz',
  telefono: 'telefono',
  combustible: 'combustible',
  transporte: 'transporte',
  educacion: 'educacion',
  consumos: 'consumos',
  otros: 'otros',
  derechos_reales: 'derechos_reales',
  tipo_vivienda: 'tipo_vivienda',
  servicios_publicos: 'servicios_publicos',
  servicios_intradomiciliarios: 'servicios_intradomiciliarios',
  material_construccion: 'material_construccion',
  num_dormitorios: 'num_dormitorios',
  num_personas_dormitorio: 'num_personas_dormitorio',
  ocupacion_est: 'ocupacion_est',
  tiempo_tratamiento: 'tiempo_tratamiento',
  problemas_salud: 'problemas_salud',
  estado_salud: 'estado_salud',
  c_ingresos: 'c_ingresos',
  c_domicilio: 'c_domicilio',
  c_elector: 'c_elector',
  c_no_derechohabiencia: 'c_no_derechohabiencia',
  c_defuncion: 'c_defuncion',
  observaciones: 'observaciones',
  puntaje_ingreso: 'puntaje_ingreso',
  puntaje_egreso: 'puntaje_egreso',
  puntaje_vivienda: 'puntaje_vivienda',
  puntaje_ocupacion: 'puntaje_ocupacion',
  puntaje_salud: 'puntaje_salud',
  puntaje_total: 'puntaje_total',
  id_domicilio_permanente: 'id_domicilio_permanente',
  id_domicilio_temporal: 'id_domicilio_temporal',
  id_familiar_reponsable: 'id_familiar_reponsable',
  modelo_ingreso: 'modelo_ingreso',
  id_ingreso: 'id_ingreso',
  id_nivel: 'id_nivel',
  id_paciente: 'id_paciente',
  id_ocupacion: 'id_ocupacion',
  id_escolaridad: 'id_escolaridad',
  escolaridad_completa: 'escolaridad_completa',
  atencion_prioritaria: 'atencion_prioritaria',
  id_elaboro: 'id_elaboro',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at'
};

exports.Prisma.Hpz_paciente_nota_medicaScalarFieldEnum = {
  id: 'id',
  grupo: 'grupo',
  tipo: 'tipo',
  observaciones: 'observaciones',
  plan: 'plan',
  clasificacion: 'clasificacion',
  motivo_cancelacion: 'motivo_cancelacion',
  ref_urgencia: 'ref_urgencia',
  ref_motivo: 'ref_motivo',
  id_referencia: 'id_referencia',
  id_paciente: 'id_paciente',
  id_ingreso: 'id_ingreso',
  id_ubicacion: 'id_ubicacion',
  id_user: 'id_user',
  id_user_confirmacion: 'id_user_confirmacion',
  id_cancelo: 'id_cancelo',
  id_signos: 'id_signos',
  id_evaloracion: 'id_evaloracion',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at',
  clasificacion_medico: 'clasificacion_medico',
  clasificacion_sistema: 'clasificacion_sistema',
  clasificacion_triage: 'clasificacion_triage'
};

exports.Prisma.Hpz_paciente_nota_trabajo_socialScalarFieldEnum = {
  id: 'id',
  observaciones: 'observaciones',
  id_paciente: 'id_paciente',
  id_ingreso: 'id_ingreso',
  id_user: 'id_user',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at'
};

exports.Prisma.Hpz_patologia_estudiosScalarFieldEnum = {
  id: 'id',
  consecutivo: 'consecutivo',
  anio: 'anio',
  macroscopica: 'macroscopica',
  microscopica: 'microscopica',
  cortes_sobrantes: 'cortes_sobrantes',
  dx_informal: 'dx_informal',
  observaciones: 'observaciones',
  estatus: 'estatus',
  revision: 'revision',
  id_tipo: 'id_tipo',
  id_procedimiento: 'id_procedimiento',
  id_diagnostico: 'id_diagnostico',
  id_patologo: 'id_patologo',
  id_persona: 'id_persona',
  id_paciente: 'id_paciente',
  id_ingreso: 'id_ingreso',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at'
};

exports.Prisma.Inc_eventos_adversosScalarFieldEnum = {
  id: 'id',
  folio: 'folio',
  persona_notifica: 'persona_notifica',
  persona_reporta: 'persona_reporta',
  fecha_evento: 'fecha_evento',
  pregunta1: 'pregunta1',
  pregunta2: 'pregunta2',
  pregunta3: 'pregunta3',
  pregunta4: 'pregunta4',
  pregunta5: 'pregunta5',
  descripcion_evento: 'descripcion_evento',
  pregunta7_otro: 'pregunta7_otro',
  pregunta8: 'pregunta8',
  pregunta9: 'pregunta9',
  pregunta10: 'pregunta10',
  id_paciente: 'id_paciente',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Int_menuScalarFieldEnum = {
  id_menu: 'id_menu',
  nombre: 'nombre',
  icono: 'icono',
  slug: 'slug',
  parent: 'parent',
  order: 'order',
  enabled: 'enabled',
  created_at: 'created_at',
  updated_at: 'updated_at',
  id_page: 'id_page'
};

exports.Prisma.Int_pageScalarFieldEnum = {
  id_page: 'id_page',
  titulo: 'titulo',
  contenido: 'contenido',
  imagen: 'imagen',
  slug: 'slug',
  estatus: 'estatus',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at'
};

exports.Prisma.Inv_adquisicionesScalarFieldEnum = {
  id: 'id',
  tipo_adquisicion: 'tipo_adquisicion',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at'
};

exports.Prisma.Inv_bienesScalarFieldEnum = {
  id: 'id',
  clave_cae: 'clave_cae',
  num_bien: 'num_bien',
  id_sesver: 'id_sesver',
  fecha_entrega: 'fecha_entrega',
  fecha_oficio_baja: 'fecha_oficio_baja',
  oficio_baja: 'oficio_baja',
  motivo_baja: 'motivo_baja',
  inventariado: 'inventariado',
  status_bien: 'status_bien',
  doc_fecha: 'doc_fecha',
  doc_num: 'doc_num',
  doc_precio: 'doc_precio',
  doc_folio: 'doc_folio',
  doc_proveedor: 'doc_proveedor',
  des_marca: 'des_marca',
  des_modelo: 'des_modelo',
  des_num_serie: 'des_num_serie',
  des_num_catalogo: 'des_num_catalogo',
  des_medidas: 'des_medidas',
  des_estructura: 'des_estructura',
  des_color: 'des_color',
  des_nombre: 'des_nombre',
  des_num_charola: 'des_num_charola',
  des_observaciones: 'des_observaciones',
  id_tipo_mueble: 'id_tipo_mueble',
  id_ubicacion: 'id_ubicacion',
  id_doc_tipo: 'id_doc_tipo',
  id_doc_adquisicion: 'id_doc_adquisicion',
  id_doc_valuacion: 'id_doc_valuacion',
  id_doc_programa: 'id_doc_programa',
  id_des_especialidad: 'id_des_especialidad',
  id_capitulo: 'id_capitulo',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at',
  activo_fijo: 'activo_fijo'
};

exports.Prisma.Inv_bienes_corteScalarFieldEnum = {
  id: 'id',
  clave_cae: 'clave_cae',
  num_bien: 'num_bien',
  id_sesver: 'id_sesver',
  fecha_entrega: 'fecha_entrega',
  fecha_oficio_baja: 'fecha_oficio_baja',
  oficio_baja: 'oficio_baja',
  motivo_baja: 'motivo_baja',
  status_bien: 'status_bien',
  inventariado: 'inventariado',
  doc_fecha: 'doc_fecha',
  doc_num: 'doc_num',
  doc_precio: 'doc_precio',
  doc_folio: 'doc_folio',
  doc_proveedor: 'doc_proveedor',
  des_marca: 'des_marca',
  des_modelo: 'des_modelo',
  des_num_serie: 'des_num_serie',
  des_num_catalogo: 'des_num_catalogo',
  des_medidas: 'des_medidas',
  des_estructura: 'des_estructura',
  des_color: 'des_color',
  des_nombre: 'des_nombre',
  des_num_charola: 'des_num_charola',
  des_observaciones: 'des_observaciones',
  id_tipo_mueble: 'id_tipo_mueble',
  id_ubicacion: 'id_ubicacion',
  id_doc_tipo: 'id_doc_tipo',
  id_doc_adquisicion: 'id_doc_adquisicion',
  id_doc_valuacion: 'id_doc_valuacion',
  id_doc_programa: 'id_doc_programa',
  id_des_especialidad: 'id_des_especialidad',
  id_capitulo: 'id_capitulo',
  id_bien: 'id_bien',
  id_corte: 'id_corte',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at'
};

exports.Prisma.Inv_bienes_resguardosScalarFieldEnum = {
  id: 'id',
  id_bien: 'id_bien',
  id_empleado: 'id_empleado',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at'
};

exports.Prisma.Inv_capitulosScalarFieldEnum = {
  id: 'id',
  clave_capitulo: 'clave_capitulo',
  nueva_clave_capitulo: 'nueva_clave_capitulo',
  capitulo: 'capitulo',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at'
};

exports.Prisma.Inv_cat_corteScalarFieldEnum = {
  id: 'id',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at'
};

exports.Prisma.Inv_cat_departamentosScalarFieldEnum = {
  id: 'id',
  nombre: 'nombre',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at'
};

exports.Prisma.Inv_cat_especialidadScalarFieldEnum = {
  id: 'id',
  especialidad: 'especialidad',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at'
};

exports.Prisma.Inv_cat_muebleScalarFieldEnum = {
  id: 'id',
  clave: 'clave',
  nombre_mueble: 'nombre_mueble',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at'
};

exports.Prisma.Inv_cat_ubicacionesScalarFieldEnum = {
  id: 'id',
  clave: 'clave',
  nombre: 'nombre',
  num_resguardo: 'num_resguardo',
  id_empleado: 'id_empleado',
  id_departamento: 'id_departamento',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at',
  puesto: 'puesto'
};

exports.Prisma.Inv_corte_empleadoScalarFieldEnum = {
  id: 'id',
  id_corte: 'id_corte',
  id_empleado: 'id_empleado',
  id_puesto: 'id_puesto',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at'
};

exports.Prisma.Inv_departamento_empleadoScalarFieldEnum = {
  id: 'id',
  id_empleado: 'id_empleado',
  id_departamento: 'id_departamento',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at'
};

exports.Prisma.Inv_elementos_bienesScalarFieldEnum = {
  id: 'id',
  clave_cae: 'clave_cae',
  num_elemento: 'num_elemento',
  status_bien: 'status_bien',
  des_marca: 'des_marca',
  des_modelo: 'des_modelo',
  des_num_serie: 'des_num_serie',
  des_num_catalogo: 'des_num_catalogo',
  des_medidas: 'des_medidas',
  des_estructura: 'des_estructura',
  des_color: 'des_color',
  des_nombre: 'des_nombre',
  id_ubicacion: 'id_ubicacion',
  id_tipo_mueble: 'id_tipo_mueble',
  id_bien: 'id_bien',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at'
};

exports.Prisma.Inv_tipo_documentoScalarFieldEnum = {
  id: 'id',
  tipoDocumento: 'tipoDocumento',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at'
};

exports.Prisma.Inv_valuacionesScalarFieldEnum = {
  id: 'id',
  tipo_valuacion: 'tipo_valuacion',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at'
};

exports.Prisma.MigrationsScalarFieldEnum = {
  id: 'id',
  migration: 'migration',
  batch: 'batch'
};

exports.Prisma.Model_has_permissionsScalarFieldEnum = {
  permission_id: 'permission_id',
  model_type: 'model_type',
  model_id: 'model_id'
};

exports.Prisma.Model_has_rolesScalarFieldEnum = {
  role_id: 'role_id',
  model_type: 'model_type',
  model_id: 'model_id'
};

exports.Prisma.Nut_cat_horarios_comedorScalarFieldEnum = {
  id: 'id',
  id_horario: 'id_horario',
  nombre: 'nombre',
  hora_inicio: 'hora_inicio',
  hora_fin: 'hora_fin',
  hora_extendida: 'hora_extendida',
  status: 'status',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at'
};

exports.Prisma.Nut_cat_motivosScalarFieldEnum = {
  id: 'id',
  nombre: 'nombre',
  created_at: 'created_at',
  deleted_at: 'deleted_at',
  updated_at: 'updated_at'
};

exports.Prisma.Nut_pase_comedorScalarFieldEnum = {
  id: 'id',
  id_tipoPersona: 'id_tipoPersona',
  tipo_personal: 'tipo_personal',
  id_empleado: 'id_empleado',
  id_horario: 'id_horario',
  fecha: 'fecha',
  registro: 'registro',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at'
};

exports.Prisma.Nut_reg_autorizacionScalarFieldEnum = {
  id: 'id',
  id_empleado: 'id_empleado',
  id_horario: 'id_horario',
  fecha_inicio: 'fecha_inicio',
  fecha_fin: 'fecha_fin',
  id_motivo: 'id_motivo',
  id_autorizo: 'id_autorizo',
  observaciones: 'observaciones',
  username: 'username',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at'
};

exports.Prisma.Oauth_access_tokensScalarFieldEnum = {
  id: 'id',
  user_id: 'user_id',
  client_id: 'client_id',
  name: 'name',
  scopes: 'scopes',
  revoked: 'revoked',
  created_at: 'created_at',
  updated_at: 'updated_at',
  expires_at: 'expires_at'
};

exports.Prisma.Oauth_auth_codesScalarFieldEnum = {
  id: 'id',
  user_id: 'user_id',
  client_id: 'client_id',
  scopes: 'scopes',
  revoked: 'revoked',
  expires_at: 'expires_at'
};

exports.Prisma.Oauth_clientsScalarFieldEnum = {
  id: 'id',
  user_id: 'user_id',
  name: 'name',
  secret: 'secret',
  provider: 'provider',
  redirect: 'redirect',
  personal_access_client: 'personal_access_client',
  password_client: 'password_client',
  revoked: 'revoked',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Oauth_personal_access_clientsScalarFieldEnum = {
  id: 'id',
  client_id: 'client_id',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Oauth_refresh_tokensScalarFieldEnum = {
  id: 'id',
  access_token_id: 'access_token_id',
  revoked: 'revoked',
  expires_at: 'expires_at'
};

exports.Prisma.PermissionsScalarFieldEnum = {
  id: 'id',
  name: 'name',
  guard_name: 'guard_name',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Rcf_bienesScalarFieldEnum = {
  id: 'id',
  condicion_equipo: 'condicion_equipo',
  estado_situacional: 'estado_situacional',
  instructivo_trabajo: 'instructivo_trabajo',
  observaciones: 'observaciones',
  id_bien: 'id_bien',
  id_ubicacion: 'id_ubicacion',
  status: 'status',
  id_lista: 'id_lista',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at'
};

exports.Prisma.Rcf_empleado_incidenciaScalarFieldEnum = {
  id: 'id',
  id_empleado: 'id_empleado',
  id_incidencia: 'id_incidencia',
  deleted_at: 'deleted_at',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Rcf_empleado_kardexScalarFieldEnum = {
  id: 'id',
  id_kardex: 'id_kardex',
  id_empleado: 'id_empleado',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Rcf_incidenciasScalarFieldEnum = {
  id: 'id',
  fecha_inicio: 'fecha_inicio',
  fecha_fin: 'fecha_fin',
  fecha_preventivo: 'fecha_preventivo',
  orden_servicio: 'orden_servicio',
  no_vale: 'no_vale',
  servicio: 'servicio',
  descripcion_actividad: 'descripcion_actividad',
  mano_obra: 'mano_obra',
  refacciones: 'refacciones',
  total: 'total',
  id_lista: 'id_lista',
  id_registro: 'id_registro',
  id_proveedor: 'id_proveedor',
  id_turno: 'id_turno',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at'
};

exports.Prisma.Rcf_kardexScalarFieldEnum = {
  id: 'id',
  fecha_inicio: 'fecha_inicio',
  fecha_fin: 'fecha_fin',
  fecha_preventivo: 'fecha_preventivo',
  orden_servicio: 'orden_servicio',
  no_vale: 'no_vale',
  servicio: 'servicio',
  descripcion_actividad: 'descripcion_actividad',
  mano_obra: 'mano_obra',
  refacciones: 'refacciones',
  total: 'total',
  tipo_servicio: 'tipo_servicio',
  id_proveedor: 'id_proveedor',
  id_equipo: 'id_equipo',
  id_turno: 'id_turno',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at'
};

exports.Prisma.Rcf_listasScalarFieldEnum = {
  id: 'id',
  nombre: 'nombre',
  tipo: 'tipo',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at'
};

exports.Prisma.Rcf_resguardoScalarFieldEnum = {
  id: 'id',
  tipo: 'tipo',
  fecha_resguardo: 'fecha_resguardo',
  observaciones: 'observaciones',
  id_equipo: 'id_equipo',
  id_empleado: 'id_empleado',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Rch_checadasScalarFieldEnum = {
  id: 'id',
  qna: 'qna',
  matricula: 'matricula',
  fecha: 'fecha',
  incidencia: 'incidencia',
  hora: 'hora',
  estado: 'estado',
  horaper: 'horaper',
  checo: 'checo',
  origen: 'origen',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Rch_checadas_biometricoScalarFieldEnum = {
  id: 'id',
  EmpleadoAsistenciaId: 'EmpleadoAsistenciaId',
  EmpleadoId: 'EmpleadoId',
  TerminalId: 'TerminalId',
  FechaReg: 'FechaReg',
  HoraReg: 'HoraReg',
  Anio: 'Anio',
  Mes: 'Mes',
  Dia: 'Dia',
  Hora: 'Hora',
  Minuto: 'Minuto',
  Segundo: 'Segundo',
  reg: 'reg',
  FechaAlta: 'FechaAlta',
  FechaUltActualizacion: 'FechaUltActualizacion',
  JornadaId: 'JornadaId',
  ToleranciaTipoID: 'ToleranciaTipoID',
  IncidenciaTipo: 'IncidenciaTipo'
};

exports.Prisma.Rch_empleado_especialidadScalarFieldEnum = {
  id: 'id',
  id_medico: 'id_medico',
  id_especialidad: 'id_especialidad',
  cedula_profesional: 'cedula_profesional',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at'
};

exports.Prisma.Rch_empleado_vacacionesScalarFieldEnum = {
  id: 'id',
  id_empleado: 'id_empleado',
  tipo: 'tipo',
  rol: 'rol',
  fecha_inicio: 'fecha_inicio',
  fecha_fin: 'fecha_fin',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at'
};

exports.Prisma.Rch_empleadosScalarFieldEnum = {
  id: 'id',
  matricula: 'matricula',
  madre: 'madre',
  hora_entrada: 'hora_entrada',
  hora_salida: 'hora_salida',
  pago_riesgo: 'pago_riesgo',
  cedula_profesional: 'cedula_profesional',
  checa: 'checa',
  cuenta_bancaria: 'cuenta_bancaria',
  activo: 'activo',
  fecha_alta: 'fecha_alta',
  fecha_base: 'fecha_base',
  fecha_baja: 'fecha_baja',
  observaciones: 'observaciones',
  motivo_baja: 'motivo_baja',
  medico: 'medico',
  guardias: 'guardias',
  nombramiento: 'nombramiento',
  atencion_medica: 'atencion_medica',
  numero_afiliacion: 'numero_afiliacion',
  foto: 'foto',
  id_persona: 'id_persona',
  id_tipoempleado: 'id_tipoempleado',
  id_plaza: 'id_plaza',
  id_pension: 'id_pension',
  id_tiporecurso: 'id_tiporecurso',
  id_puesto: 'id_puesto',
  id_departamento: 'id_departamento',
  id_turno: 'id_turno',
  id_categoria: 'id_categoria',
  id_sindicato: 'id_sindicato',
  id_banco: 'id_banco',
  id_financiamiento: 'id_financiamiento',
  id_motivo_baja: 'id_motivo_baja',
  idUser: 'idUser',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at'
};

exports.Prisma.Rch_empleados_asignacionesScalarFieldEnum = {
  id: 'id',
  id_empleado: 'id_empleado',
  id_asignacion: 'id_asignacion',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Rch_empleados_externosScalarFieldEnum = {
  id: 'id',
  tipo_empleado: 'tipo_empleado',
  no_personal: 'no_personal',
  medios_comunicacion: 'medios_comunicacion',
  institucion_educativa: 'institucion_educativa',
  carrera: 'carrera',
  fecha_inicio: 'fecha_inicio',
  fecha_fin: 'fecha_fin',
  observaciones: 'observaciones',
  id_persona: 'id_persona',
  id_departamento: 'id_departamento',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at'
};

exports.Prisma.Rch_empleados_historial_cambiosScalarFieldEnum = {
  id: 'id',
  primer_apellido: 'primer_apellido',
  segundo_apellido: 'segundo_apellido',
  nombres: 'nombres',
  curp: 'curp',
  rfc: 'rfc',
  fecha_nacimiento: 'fecha_nacimiento',
  estado_nacimiento: 'estado_nacimiento',
  sexo: 'sexo',
  id_estadocivil: 'id_estadocivil',
  matricula: 'matricula',
  medios_comunicacion: 'medios_comunicacion',
  madre: 'madre',
  hora_entrada: 'hora_entrada',
  hora_salida: 'hora_salida',
  pago_riesgo: 'pago_riesgo',
  cedula_profesional: 'cedula_profesional',
  checa: 'checa',
  email: 'email',
  email_institucional: 'email_institucional',
  cuenta_bancaria: 'cuenta_bancaria',
  activo: 'activo',
  fecha_alta: 'fecha_alta',
  fecha_base: 'fecha_base',
  fecha_baja: 'fecha_baja',
  observaciones: 'observaciones',
  motivo_baja: 'motivo_baja',
  medico: 'medico',
  guardias: 'guardias',
  nombramiento: 'nombramiento',
  id_persona: 'id_persona',
  id_empleado: 'id_empleado',
  id_tipoempleado: 'id_tipoempleado',
  id_plaza: 'id_plaza',
  id_pension: 'id_pension',
  id_tiporecurso: 'id_tiporecurso',
  id_puesto: 'id_puesto',
  id_departamento: 'id_departamento',
  id_turno: 'id_turno',
  id_categoria: 'id_categoria',
  id_sindicato: 'id_sindicato',
  id_banco: 'id_banco',
  id_financiamiento: 'id_financiamiento',
  id_unidad_medica: 'id_unidad_medica',
  calle: 'calle',
  num_interior: 'num_interior',
  num_exterior: 'num_exterior',
  telefono: 'telefono',
  cp: 'cp',
  id_asentamiento: 'id_asentamiento',
  entre_calle: 'entre_calle',
  y_calle: 'y_calle',
  calle_posterior: 'calle_posterior',
  descripcion_ubicacion: 'descripcion_ubicacion',
  username: 'username',
  equipo: 'equipo',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Rch_empleados_historial_estatusScalarFieldEnum = {
  id: 'id',
  activo: 'activo',
  id_empleado: 'id_empleado',
  id_motivo_baja: 'id_motivo_baja',
  motivo_baja: 'motivo_baja',
  fecha_inicio: 'fecha_inicio',
  fecha_fin: 'fecha_fin',
  idUsuario: 'idUsuario',
  nick: 'nick',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Rch_empleados_historial_horariosScalarFieldEnum = {
  id: 'id',
  id_empleado: 'id_empleado',
  id_turno: 'id_turno',
  fecha_inicio: 'fecha_inicio',
  hora_entrada: 'hora_entrada',
  hora_salida: 'hora_salida',
  guardias: 'guardias',
  observaciones: 'observaciones',
  idUser: 'idUser',
  nick: 'nick',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at'
};

exports.Prisma.Rch_permisosScalarFieldEnum = {
  id: 'id',
  folio: 'folio',
  fecha_inicio: 'fecha_inicio',
  fecha_fin: 'fecha_fin',
  observaciones: 'observaciones',
  autorizado: 'autorizado',
  id_empleado: 'id_empleado',
  id_permiso: 'id_permiso',
  id_extension: 'id_extension',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at'
};

exports.Prisma.Rch_tipo_empleado_permisosScalarFieldEnum = {
  id: 'id',
  id_tipo_empleado: 'id_tipo_empleado',
  id_permiso: 'id_permiso',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Rfn_conveniosScalarFieldEnum = {
  id: 'id',
  numero_personal: 'numero_personal',
  numero_dependiente: 'numero_dependiente',
  primer_apellido: 'primer_apellido',
  segundo_apellido: 'segundo_apellido',
  nombres: 'nombres',
  rfc: 'rfc',
  vigencia: 'vigencia',
  zona: 'zona',
  id_subrogado: 'id_subrogado',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at'
};

exports.Prisma.Role_has_permissionsScalarFieldEnum = {
  permission_id: 'permission_id',
  role_id: 'role_id'
};

exports.Prisma.RolesScalarFieldEnum = {
  id: 'id',
  name: 'name',
  guard_name: 'guard_name',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Sgl_control_vehicularScalarFieldEnum = {
  id: 'id',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Sgl_tarjetonScalarFieldEnum = {
  id: 'id',
  folio_tarjeton: 'folio_tarjeton',
  id_empleado: 'id_empleado',
  id_extension: 'id_extension',
  telefono: 'telefono',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at'
};

exports.Prisma.Sgl_tarjeton_vehiculoScalarFieldEnum = {
  id: 'id',
  modelo: 'modelo',
  placas_vehiculo: 'placas_vehiculo',
  color: 'color',
  impreso: 'impreso',
  observaciones: 'observaciones',
  linea: 'linea',
  id_tarjeton: 'id_tarjeton',
  id_marca: 'id_marca',
  id_submarca: 'id_submarca',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at'
};

exports.Prisma.Sgl_vehiculoScalarFieldEnum = {
  id: 'id',
  id_marca: 'id_marca',
  id_tipo: 'id_tipo',
  id_modelo: 'id_modelo',
  no_placas: 'no_placas',
  no_economico: 'no_economico',
  no_inventario: 'no_inventario',
  color: 'color',
  km_inicial: 'km_inicial',
  observaciones: 'observaciones',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at'
};

exports.Prisma.Table_cat_horarios_comedorScalarFieldEnum = {
  id: 'id',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Table_nut_pases_comedorScalarFieldEnum = {
  id: 'id',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Table_nut_registros_comedorScalarFieldEnum = {
  id: 'id',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Tic_equipos_computoScalarFieldEnum = {
  id: 'id',
  procesador: 'procesador',
  memoria_ram: 'memoria_ram',
  disco_duro: 'disco_duro',
  sistema_operativo: 'sistema_operativo',
  nombre_equipo: 'nombre_equipo',
  sesiones: 'sesiones',
  dominio: 'dominio',
  ip: 'ip',
  tipo_instalacion: 'tipo_instalacion',
  propietario: 'propietario',
  observaciones: 'observaciones',
  id_equipo: 'id_equipo',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at'
};

exports.Prisma.UsersScalarFieldEnum = {
  id: 'id',
  name: 'name',
  username: 'username',
  email: 'email',
  password: 'password',
  remember_token: 'remember_token',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at',
  id_tipopersona: 'id_tipopersona',
  id_persona: 'id_persona',
  id_empleado: 'id_empleado'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};
exports.cat_equipos_clasificacion_equipo = exports.$Enums.cat_equipos_clasificacion_equipo = {
  EM: 'EM',
  MAQ: 'MAQ',
  COMPUTO: 'COMPUTO'
};

exports.cat_equipos_estatus = exports.$Enums.cat_equipos_estatus = {
  ACTIVO: 'ACTIVO',
  INACTIVO: 'INACTIVO'
};

exports.cat_proveedores_estatus = exports.$Enums.cat_proveedores_estatus = {
  Activo: 'Activo',
  Inactivo: 'Inactivo'
};

exports.cat_servicios_tipoAgenda = exports.$Enums.cat_servicios_tipoAgenda = {
  C: 'C',
  E: 'E',
  R: 'R'
};

exports.cmp_persona_sexo = exports.$Enums.cmp_persona_sexo = {
  HOMBRE: 'HOMBRE',
  MUJER: 'MUJER'
};

exports.hpz_ingreso_hospitalario_estado_salud = exports.$Enums.hpz_ingreso_hospitalario_estado_salud = {
  NO_ESPECIFICADO: 'NO_ESPECIFICADO',
  VIVO: 'VIVO',
  CONSIENTE: 'CONSIENTE',
  INCONSIENTE: 'INCONSIENTE',
  MUERTO: 'MUERTO'
};

exports.hpz_ingreso_hospitalario_estado_ingreso = exports.$Enums.hpz_ingreso_hospitalario_estado_ingreso = {
  NO_ESPECIFICADO: 'NO_ESPECIFICADO',
  GRAVE: 'GRAVE',
  DELICADO: 'DELICADO',
  MEJORIA: 'MEJORIA'
};

exports.hpz_paciente_atencion_prioritaria = exports.$Enums.hpz_paciente_atencion_prioritaria = {
  NINGUNA: 'NINGUNA',
  DISCAPACIDAD_F_SICA: 'DISCAPACIDAD_F_SICA',
  DISCAPACIDAD_INTELECTUAL: 'DISCAPACIDAD_INTELECTUAL',
  ADULTO_MAYOR: 'ADULTO_MAYOR',
  IND_GENA: 'IND_GENA'
};

exports.int_page_estatus = exports.$Enums.int_page_estatus = {
  PUBLICADO: 'PUBLICADO',
  INACTIVO: 'INACTIVO'
};

exports.rcf_incidencias_servicio = exports.$Enums.rcf_incidencias_servicio = {
  INTERNO: 'INTERNO',
  EXTERNO: 'EXTERNO'
};

exports.rcf_kardex_servicio = exports.$Enums.rcf_kardex_servicio = {
  INTERNO: 'INTERNO',
  EXTERNO: 'EXTERNO'
};

exports.rcf_kardex_tipo_servicio = exports.$Enums.rcf_kardex_tipo_servicio = {
  CORRECTIVO: 'CORRECTIVO',
  INSTALACION: 'INSTALACION',
  PREVENTIVO: 'PREVENTIVO',
  RUTINA: 'RUTINA',
  PREVENTIVO_MENOR: 'PREVENTIVO_MENOR'
};

exports.rcf_resguardo_tipo = exports.$Enums.rcf_resguardo_tipo = {
  ASIGNACION: 'ASIGNACION',
  PRESTAMO: 'PRESTAMO'
};

exports.rch_empleados_madre = exports.$Enums.rch_empleados_madre = {
  SI: 'SI',
  NO: 'NO'
};

exports.rch_empleados_pago_riesgo = exports.$Enums.rch_empleados_pago_riesgo = {
  NO_APLICA: 'NO_APLICA',
  ALTO: 'ALTO',
  MEDIANO: 'MEDIANO',
  BAJO: 'BAJO'
};

exports.rch_empleados_checa = exports.$Enums.rch_empleados_checa = {
  SI: 'SI',
  NO: 'NO'
};

exports.rch_empleados_nombramiento = exports.$Enums.rch_empleados_nombramiento = {
  SI: 'SI',
  NO: 'NO'
};

exports.Prisma.ModelName = {
  adm_tutoriales: 'adm_tutoriales',
  adm_tutoriales_roles: 'adm_tutoriales_roles',
  bitacora: 'bitacora',
  cat_areas: 'cat_areas',
  cat_asentamientos: 'cat_asentamientos',
  cat_asignaciones: 'cat_asignaciones',
  cat_bancos: 'cat_bancos',
  cat_camas: 'cat_camas',
  cat_categorias: 'cat_categorias',
  cat_cateter_sitio_anatomico: 'cat_cateter_sitio_anatomico',
  cat_cateter_tipo: 'cat_cateter_tipo',
  cat_checklist_preguntas: 'cat_checklist_preguntas',
  cat_checklist_respuestas: 'cat_checklist_respuestas',
  cat_cie10: 'cat_cie10',
  cat_clues: 'cat_clues',
  cat_codigos_postales: 'cat_codigos_postales',
  cat_codigos_urgencias: 'cat_codigos_urgencias',
  cat_colonias: 'cat_colonias',
  cat_consulta_horarios: 'cat_consulta_horarios',
  cat_departamento_empleado: 'cat_departamento_empleado',
  cat_departamentos: 'cat_departamentos',
  cat_documentos: 'cat_documentos',
  cat_enfermeria: 'cat_enfermeria',
  cat_equipos: 'cat_equipos',
  cat_escolaridades: 'cat_escolaridades',
  cat_escuelas: 'cat_escuelas',
  cat_especialidades: 'cat_especialidades',
  cat_estado_civil: 'cat_estado_civil',
  cat_estados: 'cat_estados',
  cat_evento_adverso_factores_incidente: 'cat_evento_adverso_factores_incidente',
  cat_evento_adverso_tipo_incidente: 'cat_evento_adverso_tipo_incidente',
  cat_extensiones: 'cat_extensiones',
  cat_festivos: 'cat_festivos',
  cat_formato_preguntas: 'cat_formato_preguntas',
  cat_formato_respuestas: 'cat_formato_respuestas',
  cat_fuentes_financiamiento: 'cat_fuentes_financiamiento',
  cat_guardias: 'cat_guardias',
  cat_historia_clinica: 'cat_historia_clinica',
  cat_iaas_germenes: 'cat_iaas_germenes',
  cat_iaas_sitios_infeccion: 'cat_iaas_sitios_infeccion',
  cat_localidades: 'cat_localidades',
  cat_marcas: 'cat_marcas',
  cat_medicamento_dosis: 'cat_medicamento_dosis',
  cat_medicamento_horarios: 'cat_medicamento_horarios',
  cat_medicamento_intervalos: 'cat_medicamento_intervalos',
  cat_medicamento_vias: 'cat_medicamento_vias',
  cat_modelos: 'cat_modelos',
  cat_motivos_baja: 'cat_motivos_baja',
  cat_municipios: 'cat_municipios',
  cat_nacionalidades: 'cat_nacionalidades',
  cat_nanda: 'cat_nanda',
  cat_niveles: 'cat_niveles',
  cat_ocupaciones: 'cat_ocupaciones',
  cat_parentescos: 'cat_parentescos',
  cat_patologia_procedimientos: 'cat_patologia_procedimientos',
  cat_patologia_tipo_estudio: 'cat_patologia_tipo_estudio',
  cat_pensiones: 'cat_pensiones',
  cat_permisos: 'cat_permisos',
  cat_pisos: 'cat_pisos',
  cat_plazas: 'cat_plazas',
  cat_procedimientos_invasivos: 'cat_procedimientos_invasivos',
  cat_productos: 'cat_productos',
  cat_programas: 'cat_programas',
  cat_proveedores: 'cat_proveedores',
  cat_puestos: 'cat_puestos',
  cat_religiones: 'cat_religiones',
  cat_servicios: 'cat_servicios',
  cat_sindicatos: 'cat_sindicatos',
  cat_subrogados: 'cat_subrogados',
  cat_tipo_sangre: 'cat_tipo_sangre',
  cat_tipos_empleado: 'cat_tipos_empleado',
  cat_tipos_persona: 'cat_tipos_persona',
  cat_tipos_recurso: 'cat_tipos_recurso',
  cat_turnos: 'cat_turnos',
  cat_ubicaciones: 'cat_ubicaciones',
  cat_vehiculo_marca: 'cat_vehiculo_marca',
  cat_vehiculo_submarca: 'cat_vehiculo_submarca',
  cat_vias_ingreso: 'cat_vias_ingreso',
  cfg_config_system: 'cfg_config_system',
  cja_programas: 'cja_programas',
  cmp_contactos: 'cmp_contactos',
  cmp_documentacion: 'cmp_documentacion',
  cmp_domicilios: 'cmp_domicilios',
  cmp_educacion: 'cmp_educacion',
  cmp_familiares: 'cmp_familiares',
  cmp_firmas: 'cmp_firmas',
  cmp_persona: 'cmp_persona',
  enf_escala_valoracion: 'enf_escala_valoracion',
  enf_medidas_antropometricas: 'enf_medidas_antropometricas',
  enf_oxigenoterapia: 'enf_oxigenoterapia',
  enf_procedimientos_invasivos: 'enf_procedimientos_invasivos',
  enf_procedimientos_invasivos_detalle: 'enf_procedimientos_invasivos_detalle',
  enf_ulceras_presion: 'enf_ulceras_presion',
  hcl_antecedentes_familiares: 'hcl_antecedentes_familiares',
  hcl_historia_clinica: 'hcl_historia_clinica',
  hpz_auxiliares_dx_comentarios: 'hpz_auxiliares_dx_comentarios',
  hpz_cama_historial: 'hpz_cama_historial',
  hpz_cateter_complicaciones_instalacion: 'hpz_cateter_complicaciones_instalacion',
  hpz_cateter_instalacion: 'hpz_cateter_instalacion',
  hpz_cateter_problemas_manejo: 'hpz_cateter_problemas_manejo',
  hpz_cateter_tipos_insercion: 'hpz_cateter_tipos_insercion',
  hpz_clue_historial: 'hpz_clue_historial',
  hpz_dx_historial: 'hpz_dx_historial',
  hpz_enf_intervenciones: 'hpz_enf_intervenciones',
  hpz_formatos_medicos: 'hpz_formatos_medicos',
  hpz_indicacion_medicamentos: 'hpz_indicacion_medicamentos',
  hpz_indicaciones_medicas: 'hpz_indicaciones_medicas',
  hpz_ingreso_consulta: 'hpz_ingreso_consulta',
  hpz_ingreso_epidemio_iaas: 'hpz_ingreso_epidemio_iaas',
  hpz_ingreso_hospitalario: 'hpz_ingreso_hospitalario',
  hpz_ingreso_nom046: 'hpz_ingreso_nom046',
  hpz_ingreso_signos_vitales: 'hpz_ingreso_signos_vitales',
  hpz_medicamento_ministracion: 'hpz_medicamento_ministracion',
  hpz_nivel_historial: 'hpz_nivel_historial',
  hpz_nota_alta_medica: 'hpz_nota_alta_medica',
  hpz_notas_diagnosticos: 'hpz_notas_diagnosticos',
  hpz_paciente: 'hpz_paciente',
  hpz_paciente_auxiliares_diagnostico: 'hpz_paciente_auxiliares_diagnostico',
  hpz_paciente_est_socioeconomico: 'hpz_paciente_est_socioeconomico',
  hpz_paciente_nota_medica: 'hpz_paciente_nota_medica',
  hpz_paciente_nota_trabajo_social: 'hpz_paciente_nota_trabajo_social',
  hpz_patologia_estudios: 'hpz_patologia_estudios',
  inc_eventos_adversos: 'inc_eventos_adversos',
  int_menu: 'int_menu',
  int_page: 'int_page',
  inv_adquisiciones: 'inv_adquisiciones',
  inv_bienes: 'inv_bienes',
  inv_bienes_corte: 'inv_bienes_corte',
  inv_bienes_resguardos: 'inv_bienes_resguardos',
  inv_capitulos: 'inv_capitulos',
  inv_cat_corte: 'inv_cat_corte',
  inv_cat_departamentos: 'inv_cat_departamentos',
  inv_cat_especialidad: 'inv_cat_especialidad',
  inv_cat_mueble: 'inv_cat_mueble',
  inv_cat_ubicaciones: 'inv_cat_ubicaciones',
  inv_corte_empleado: 'inv_corte_empleado',
  inv_departamento_empleado: 'inv_departamento_empleado',
  inv_elementos_bienes: 'inv_elementos_bienes',
  inv_tipo_documento: 'inv_tipo_documento',
  inv_valuaciones: 'inv_valuaciones',
  migrations: 'migrations',
  model_has_permissions: 'model_has_permissions',
  model_has_roles: 'model_has_roles',
  nut_cat_horarios_comedor: 'nut_cat_horarios_comedor',
  nut_cat_motivos: 'nut_cat_motivos',
  nut_pase_comedor: 'nut_pase_comedor',
  nut_reg_autorizacion: 'nut_reg_autorizacion',
  oauth_access_tokens: 'oauth_access_tokens',
  oauth_auth_codes: 'oauth_auth_codes',
  oauth_clients: 'oauth_clients',
  oauth_personal_access_clients: 'oauth_personal_access_clients',
  oauth_refresh_tokens: 'oauth_refresh_tokens',
  permissions: 'permissions',
  rcf_bienes: 'rcf_bienes',
  rcf_empleado_incidencia: 'rcf_empleado_incidencia',
  rcf_empleado_kardex: 'rcf_empleado_kardex',
  rcf_incidencias: 'rcf_incidencias',
  rcf_kardex: 'rcf_kardex',
  rcf_listas: 'rcf_listas',
  rcf_resguardo: 'rcf_resguardo',
  rch_checadas: 'rch_checadas',
  rch_checadas_biometrico: 'rch_checadas_biometrico',
  rch_empleado_especialidad: 'rch_empleado_especialidad',
  rch_empleado_vacaciones: 'rch_empleado_vacaciones',
  rch_empleados: 'rch_empleados',
  rch_empleados_asignaciones: 'rch_empleados_asignaciones',
  rch_empleados_externos: 'rch_empleados_externos',
  rch_empleados_historial_cambios: 'rch_empleados_historial_cambios',
  rch_empleados_historial_estatus: 'rch_empleados_historial_estatus',
  rch_empleados_historial_horarios: 'rch_empleados_historial_horarios',
  rch_permisos: 'rch_permisos',
  rch_tipo_empleado_permisos: 'rch_tipo_empleado_permisos',
  rfn_convenios: 'rfn_convenios',
  role_has_permissions: 'role_has_permissions',
  roles: 'roles',
  sgl_control_vehicular: 'sgl_control_vehicular',
  sgl_tarjeton: 'sgl_tarjeton',
  sgl_tarjeton_vehiculo: 'sgl_tarjeton_vehiculo',
  sgl_vehiculo: 'sgl_vehiculo',
  table_cat_horarios_comedor: 'table_cat_horarios_comedor',
  table_nut_pases_comedor: 'table_nut_pases_comedor',
  table_nut_registros_comedor: 'table_nut_registros_comedor',
  tic_equipos_computo: 'tic_equipos_computo',
  users: 'users'
};

/**
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        const runtime = detectRuntime()
        const edgeRuntimeName = {
          'workerd': 'Cloudflare Workers',
          'deno': 'Deno and Deno Deploy',
          'netlify': 'Netlify Edge Functions',
          'edge-light': 'Vercel Edge Functions',
        }[runtime]

        let message = 'PrismaClient is unable to run in '
        if (edgeRuntimeName !== undefined) {
          message += edgeRuntimeName + '. As an alternative, try Accelerate: https://pris.ly/d/accelerate.'
        } else {
          message += 'this browser environment, or has been bundled for the browser (running in `' + runtime + '`).'
        }
        
        message += `
If this is unexpected, please open an issue: https://github.com/prisma/prisma/issues`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
