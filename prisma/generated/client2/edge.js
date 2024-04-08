
Object.defineProperty(exports, "__esModule", { value: true });

const {
  PrismaClientKnownRequestError,
  PrismaClientUnknownRequestError,
  PrismaClientRustPanicError,
  PrismaClientInitializationError,
  PrismaClientValidationError,
  NotFoundError,
  getPrismaClient,
  sqltag,
  empty,
  join,
  raw,
  Decimal,
  Debug,
  objectEnumValues,
  makeStrictEnum,
  Extensions,
  warnOnce,
  defineDmmfProperty,
  Public,
} = require('./runtime/edge')


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

Prisma.PrismaClientKnownRequestError = PrismaClientKnownRequestError;
Prisma.PrismaClientUnknownRequestError = PrismaClientUnknownRequestError
Prisma.PrismaClientRustPanicError = PrismaClientRustPanicError
Prisma.PrismaClientInitializationError = PrismaClientInitializationError
Prisma.PrismaClientValidationError = PrismaClientValidationError
Prisma.NotFoundError = NotFoundError
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = sqltag
Prisma.empty = empty
Prisma.join = join
Prisma.raw = raw
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = Extensions.getExtensionContext
Prisma.defineExtension = Extensions.defineExtension

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
 * Create the Client
 */
const config = {
  "generator": {
    "name": "client",
    "provider": {
      "fromEnvVar": null,
      "value": "prisma-client-js"
    },
    "output": {
      "value": "/home/desarrollo/Escritorio/Boletas/prisma/generated/client2",
      "fromEnvVar": null
    },
    "config": {
      "engineType": "library"
    },
    "binaryTargets": [
      {
        "fromEnvVar": null,
        "value": "debian-openssl-1.1.x",
        "native": true
      }
    ],
    "previewFeatures": [],
    "isCustomOutput": true
  },
  "relativeEnvPaths": {
    "rootEnvPath": "../../../.env",
    "schemaEnvPath": "../../../.env"
  },
  "relativePath": "../..",
  "clientVersion": "5.3.1",
  "engineVersion": "61e140623197a131c2a6189271ffee05a7aa9a59",
  "datasourceNames": [
    "db"
  ],
  "activeProvider": "mysql",
  "postinstall": false,
  "inlineDatasources": {
    "db": {
      "url": {
        "fromEnvVar": "DATABASE_SICA3_URL",
        "value": null
      }
    }
  },
  "inlineSchema": "Z2VuZXJhdG9yIGNsaWVudCB7CiAgcHJvdmlkZXIgPSAicHJpc21hLWNsaWVudC1qcyIKICBvdXRwdXQgICA9ICIuL2dlbmVyYXRlZC9jbGllbnQyIgp9CgpkYXRhc291cmNlIGRiIHsKICBwcm92aWRlciA9ICJteXNxbCIKICB1cmwgICAgICA9IGVudigiREFUQUJBU0VfU0lDQTNfVVJMIikKfQoKbW9kZWwgYWRtX3R1dG9yaWFsZXMgewogIGlkICAgICAgICAgICAgICAgICAgIEludCAgICAgICAgICAgICAgICAgICAgQGlkIEBkZWZhdWx0KGF1dG9pbmNyZW1lbnQoKSkgQGRiLlVuc2lnbmVkSW50CiAgdGl0dWxvICAgICAgICAgICAgICAgU3RyaW5nCiAgbGlnYSAgICAgICAgICAgICAgICAgU3RyaW5nCiAgY3JlYXRlZF9hdCAgICAgICAgICAgRGF0ZVRpbWU/ICAgICAgICAgICAgICBAZGIuVGltZXN0YW1wKDApCiAgdXBkYXRlZF9hdCAgICAgICAgICAgRGF0ZVRpbWU/ICAgICAgICAgICAgICBAZGIuVGltZXN0YW1wKDApCiAgYWRtX3R1dG9yaWFsZXNfcm9sZXMgYWRtX3R1dG9yaWFsZXNfcm9sZXNbXQp9Cgptb2RlbCBhZG1fdHV0b3JpYWxlc19yb2xlcyB7CiAgaWQgICAgICAgICAgICAgSW50ICAgICAgICAgICAgIEBpZCBAZGVmYXVsdChhdXRvaW5jcmVtZW50KCkpIEBkYi5VbnNpZ25lZEludAogIGlkX3R1dG9yaWFsICAgIEludD8gICAgICAgICAgICBAZGIuVW5zaWduZWRJbnQKICBpZF9yb2xlcyAgICAgICBJbnQ/ICAgICAgICAgICAgQGRiLlVuc2lnbmVkSW50CiAgY3JlYXRlZF9hdCAgICAgRGF0ZVRpbWU/ICAgICAgIEBkYi5UaW1lc3RhbXAoMCkKICB1cGRhdGVkX2F0ICAgICBEYXRlVGltZT8gICAgICAgQGRiLlRpbWVzdGFtcCgwKQogIHJvbGVzICAgICAgICAgIHJvbGVzPyAgICAgICAgICBAcmVsYXRpb24oZmllbGRzOiBbaWRfcm9sZXNdLCByZWZlcmVuY2VzOiBbaWRdLCBvbkRlbGV0ZTogUmVzdHJpY3QsIG9uVXBkYXRlOiBSZXN0cmljdCwgbWFwOiAiYWRtX3R1dG9yaWFsZXNfcm9sZXNfaWRfcm9sZXNfZm9yZWlnbiIpCiAgYWRtX3R1dG9yaWFsZXMgYWRtX3R1dG9yaWFsZXM/IEByZWxhdGlvbihmaWVsZHM6IFtpZF90dXRvcmlhbF0sIHJlZmVyZW5jZXM6IFtpZF0sIG9uRGVsZXRlOiBSZXN0cmljdCwgb25VcGRhdGU6IFJlc3RyaWN0LCBtYXA6ICJhZG1fdHV0b3JpYWxlc19yb2xlc19pZF90dXRvcmlhbF9mb3JlaWduIikKCiAgQEBpbmRleChbaWRfcm9sZXNdLCBtYXA6ICJhZG1fdHV0b3JpYWxlc19yb2xlc19pZF9yb2xlc19mb3JlaWduIikKICBAQGluZGV4KFtpZF90dXRvcmlhbF0sIG1hcDogImFkbV90dXRvcmlhbGVzX3JvbGVzX2lkX3R1dG9yaWFsX2ZvcmVpZ24iKQp9Cgptb2RlbCBiaXRhY29yYSB7CiAgaWQgICAgICAgICAgICAgICAgSW50ICAgICAgIEBpZCBAZGVmYXVsdChhdXRvaW5jcmVtZW50KCkpIEBkYi5VbnNpZ25lZEludAogIGlkVXN1YXJpbyAgICAgICAgIEludAogIGlkQ29uZmlybW8gICAgICAgIEludAogIG5pY2sgICAgICAgICAgICAgIFN0cmluZwogIG1vZHVsbyAgICAgICAgICAgIFN0cmluZwogIGFjY2lvbiAgICAgICAgICAgIFN0cmluZwogIGRhdG9zICAgICAgICAgICAgIFN0cmluZyAgICBAZGIuVGV4dAogIGRhdG9zX2FkaWNpb25hbGVzIFN0cmluZz8gICBAZGIuVGV4dAogIHViaWNhY2lvbiAgICAgICAgIFN0cmluZz8gICBAZGIuVGV4dAogIGNyZWF0ZWRfYXQgICAgICAgIERhdGVUaW1lPyBAZGIuVGltZXN0YW1wKDApCiAgdXBkYXRlZF9hdCAgICAgICAgRGF0ZVRpbWU/IEBkYi5UaW1lc3RhbXAoMCkKfQoKbW9kZWwgY2F0X2FyZWFzIHsKICBpZCAgICAgICAgICAgICBJbnQgICAgICAgICBAaWQgQGRlZmF1bHQoYXV0b2luY3JlbWVudCgpKSBAZGIuVW5zaWduZWRJbnQKICBjbGF2ZSAgICAgICAgICBTdHJpbmc/CiAgbm9tYnJlICAgICAgICAgU3RyaW5nCiAgbm9tYnJlX2NvcnRvICAgU3RyaW5nPyAgICAgQGRiLlZhckNoYXIoMjUwKQogIGlkX3ZpYV9pbmdyZXNvIFN0cmluZz8KICB6b25hICAgICAgICAgICBTdHJpbmc/CiAgZXN0YXR1cyAgICAgICAgQm9vbGVhbiAgICAgQGRlZmF1bHQodHJ1ZSkKICBjcmVhdGVkX2F0ICAgICBEYXRlVGltZT8gICBAZGIuVGltZXN0YW1wKDApCiAgdXBkYXRlZF9hdCAgICAgRGF0ZVRpbWU/ICAgQGRiLlRpbWVzdGFtcCgwKQogIGRlbGV0ZWRfYXQgICAgIERhdGVUaW1lPyAgIEBkYi5UaW1lc3RhbXAoMCkKICBjYXRfY2FtYXMgICAgICBjYXRfY2FtYXNbXQp9Cgptb2RlbCBjYXRfYXNlbnRhbWllbnRvcyB7CiAgaWQgICAgICAgICAgICAgICBJbnQgICAgICAgICAgICAgIEBpZCBAZGVmYXVsdChhdXRvaW5jcmVtZW50KCkpIEBkYi5VbnNpZ25lZEludAogIGRfY29kaWdvICAgICAgICAgU3RyaW5nPyAgICAgICAgICBAZGIuQ2hhcigxMCkKICBkX2FzZW50YSAgICAgICAgIFN0cmluZz8gICAgICAgICAgQGRiLlZhckNoYXIoMjUwKQogIGRfdGlwb19hc2VudGEgICAgU3RyaW5nPyAgICAgICAgICBAZGIuVmFyQ2hhcigyNTApCiAgZF9tbnBpbyAgICAgICAgICBTdHJpbmc/ICAgICAgICAgIEBkYi5WYXJDaGFyKDI1MCkKICBkX2VzdGFkbyAgICAgICAgIFN0cmluZz8gICAgICAgICAgQGRiLlZhckNoYXIoMjUwKQogIGRfY2l1ZGFkICAgICAgICAgU3RyaW5nPyAgICAgICAgICBAZGIuVmFyQ2hhcigyNTApCiAgZF9jcCAgICAgICAgICAgICBTdHJpbmc/ICAgICAgICAgIEBkYi5WYXJDaGFyKDI1MCkKICBjX2VzdGFkbyAgICAgICAgIEludD8KICBjX29maWNpbmEgICAgICAgIFN0cmluZz8gICAgICAgICAgQGRiLlZhckNoYXIoMjUwKQogIGNfY3AgICAgICAgICAgICAgU3RyaW5nPyAgICAgICAgICBAZGIuVmFyQ2hhcigyNTApCiAgY190aXBvX2FzZW50YSAgICBTdHJpbmc/ICAgICAgICAgIEBkYi5WYXJDaGFyKDI1MCkKICBjX21ucGlvICAgICAgICAgIEludD8KICBpZF9hc2VudGFfY3Bjb25zIFN0cmluZz8gICAgICAgICAgQGRiLlZhckNoYXIoMjUwKQogIGRfem9uYSAgICAgICAgICAgU3RyaW5nPyAgICAgICAgICBAZGIuVmFyQ2hhcigyNTApCiAgY19jdmVfY2l1ZGFkICAgICBTdHJpbmc/ICAgICAgICAgIEBkYi5WYXJDaGFyKDI1MCkKICBjcmVhdGVkX2F0ICAgICAgIERhdGVUaW1lPyAgICAgICAgQGRiLlRpbWVzdGFtcCgwKQogIHVwZGF0ZWRfYXQgICAgICAgRGF0ZVRpbWU/ICAgICAgICBAZGIuVGltZXN0YW1wKDApCiAgZGVsZXRlZF9hdCAgICAgICBEYXRlVGltZT8gICAgICAgIEBkYi5UaW1lc3RhbXAoMCkKICBjbXBfZG9taWNpbGlvcyAgIGNtcF9kb21pY2lsaW9zW10KICBjbXBfZmFtaWxpYXJlcyAgIGNtcF9mYW1pbGlhcmVzW10KfQoKbW9kZWwgY2F0X2FzaWduYWNpb25lcyB7CiAgaWQgICAgICAgICAgICAgICAgICAgICAgICAgSW50ICAgICAgICAgICAgICAgICAgICAgICAgICBAaWQgQGRlZmF1bHQoYXV0b2luY3JlbWVudCgpKSBAZGIuVW5zaWduZWRJbnQKICBub21icmUgICAgICAgICAgICAgICAgICAgICBTdHJpbmcKICBkZWxldGVkX2F0ICAgICAgICAgICAgICAgICBEYXRlVGltZT8gICAgICAgICAgICAgICAgICAgIEBkYi5UaW1lc3RhbXAoMCkKICBjcmVhdGVkX2F0ICAgICAgICAgICAgICAgICBEYXRlVGltZT8gICAgICAgICAgICAgICAgICAgIEBkYi5UaW1lc3RhbXAoMCkKICB1cGRhdGVkX2F0ICAgICAgICAgICAgICAgICBEYXRlVGltZT8gICAgICAgICAgICAgICAgICAgIEBkYi5UaW1lc3RhbXAoMCkKICByY2hfZW1wbGVhZG9zX2FzaWduYWNpb25lcyByY2hfZW1wbGVhZG9zX2FzaWduYWNpb25lc1tdCn0KCm1vZGVsIGNhdF9iYW5jb3MgewogIGlkICAgICAgICAgICAgSW50ICAgICAgICAgICAgIEBpZCBAZGVmYXVsdChhdXRvaW5jcmVtZW50KCkpIEBkYi5VbnNpZ25lZEludAogIGNsYXZlICAgICAgICAgU3RyaW5nICAgICAgICAgIEBkYi5DaGFyKDQpCiAgbm9tYnJlICAgICAgICBTdHJpbmcKICByYXpvbl9zb2NpYWwgIFN0cmluZwogIGFjdGl2byAgICAgICAgQm9vbGVhbiAgICAgICAgIEBkZWZhdWx0KHRydWUpCiAgY3JlYXRlZF9hdCAgICBEYXRlVGltZT8gICAgICAgQGRiLlRpbWVzdGFtcCgwKQogIHVwZGF0ZWRfYXQgICAgRGF0ZVRpbWU/ICAgICAgIEBkYi5UaW1lc3RhbXAoMCkKICBkZWxldGVkX2F0ICAgIERhdGVUaW1lPyAgICAgICBAZGIuVGltZXN0YW1wKDApCiAgcmNoX2VtcGxlYWRvcyByY2hfZW1wbGVhZG9zW10KfQoKbW9kZWwgY2F0X2NhbWFzIHsKICBpZCAgICAgICAgICAgICAgICAgICAgICAgSW50ICAgICAgICAgICAgICAgICAgICAgICAgQGlkIEBkZWZhdWx0KGF1dG9pbmNyZW1lbnQoKSkgQGRiLlVuc2lnbmVkSW50CiAgbm9tYnJlICAgICAgICAgICAgICAgICAgIFN0cmluZyAgICAgICAgICAgICAgICAgICAgIEBkYi5WYXJDaGFyKDIwKQogIGVzdGF0dXMgICAgICAgICAgICAgICAgICBTdHJpbmcgICAgICAgICAgICAgICAgICAgICBAZGVmYXVsdCgiTCIpIEBkYi5DaGFyKDEpCiAgdGlwbyAgICAgICAgICAgICAgICAgICAgIFN0cmluZyAgICAgICAgICAgICAgICAgICAgIEBkYi5DaGFyKDEpCiAgYWN0aXZhICAgICAgICAgICAgICAgICAgIFN0cmluZyAgICAgICAgICAgICAgICAgICAgIEBkYi5DaGFyKDEpCiAgaWRfYXJlYSAgICAgICAgICAgICAgICAgIEludCAgICAgICAgICAgICAgICAgICAgICAgIEBkYi5VbnNpZ25lZEludAogIGNyZWF0ZWRfYXQgICAgICAgICAgICAgICBEYXRlVGltZT8gICAgICAgICAgICAgICAgICBAZGIuVGltZXN0YW1wKDApCiAgdXBkYXRlZF9hdCAgICAgICAgICAgICAgIERhdGVUaW1lPyAgICAgICAgICAgICAgICAgIEBkYi5UaW1lc3RhbXAoMCkKICBkZWxldGVkX2F0ICAgICAgICAgICAgICAgRGF0ZVRpbWU/ICAgICAgICAgICAgICAgICAgQGRiLlRpbWVzdGFtcCgwKQogIGNhdF9hcmVhcyAgICAgICAgICAgICAgICBjYXRfYXJlYXMgICAgICAgICAgICAgICAgICBAcmVsYXRpb24oZmllbGRzOiBbaWRfYXJlYV0sIHJlZmVyZW5jZXM6IFtpZF0sIG9uVXBkYXRlOiBSZXN0cmljdCwgbWFwOiAiY2F0X2NhbWFzX2lkX2FyZWFfZm9yZWlnbiIpCiAgY2F0X2NvbnN1bHRhX2hvcmFyaW9zICAgIGNhdF9jb25zdWx0YV9ob3Jhcmlvc1tdCiAgaHB6X2NhbWFfaGlzdG9yaWFsICAgICAgIGhwel9jYW1hX2hpc3RvcmlhbFtdCiAgaHB6X2luZ3Jlc29fY29uc3VsdGEgICAgIGhwel9pbmdyZXNvX2NvbnN1bHRhW10KICBocHpfaW5ncmVzb19ob3NwaXRhbGFyaW8gaHB6X2luZ3Jlc29faG9zcGl0YWxhcmlvW10KCiAgQEBpbmRleChbaWRfYXJlYV0sIG1hcDogImNhdF9jYW1hc19pZF9hcmVhX2ZvcmVpZ24iKQp9Cgptb2RlbCBjYXRfY2F0ZWdvcmlhcyB7CiAgaWQgICAgICAgICAgICBJbnQgICAgICAgICAgICAgQGlkIEBkZWZhdWx0KGF1dG9pbmNyZW1lbnQoKSkgQGRiLlVuc2lnbmVkSW50CiAgY29kaWdvICAgICAgICBTdHJpbmcgICAgICAgICAgQGRiLlZhckNoYXIoMTApCiAgbm9tYnJlICAgICAgICBTdHJpbmcgICAgICAgICAgQGRiLlZhckNoYXIoMjUwKQogIGFjdGl2byAgICAgICAgQm9vbGVhbiAgICAgICAgIEBkZWZhdWx0KHRydWUpCiAgc3VlbGRvX2Jhc2UgICBEZWNpbWFsICAgICAgICAgQGRiLkRlY2ltYWwoMTAsIDIpCiAgc3VlbGRvX2RpYXJpbyBEZWNpbWFsICAgICAgICAgQGRiLkRlY2ltYWwoMTAsIDIpCiAgYXJlYSAgICAgICAgICBTdHJpbmc/ICAgICAgICAgQGRiLlZhckNoYXIoMTApCiAgY3JlYXRlZF9hdCAgICBEYXRlVGltZT8gICAgICAgQGRiLlRpbWVzdGFtcCgwKQogIHVwZGF0ZWRfYXQgICAgRGF0ZVRpbWU/ICAgICAgIEBkYi5UaW1lc3RhbXAoMCkKICBkZWxldGVkX2F0ICAgIERhdGVUaW1lPyAgICAgICBAZGIuVGltZXN0YW1wKDApCiAgcmNoX2VtcGxlYWRvcyByY2hfZW1wbGVhZG9zW10KfQoKbW9kZWwgY2F0X2NhdGV0ZXJfc2l0aW9fYW5hdG9taWNvIHsKICBpZCAgICAgICAgICAgICAgICAgICAgICBJbnQgICAgICAgICAgICAgICAgICAgICAgIEBpZCBAZGVmYXVsdChhdXRvaW5jcmVtZW50KCkpIEBkYi5VbnNpZ25lZEludAogIG5vbWJyZSAgICAgICAgICAgICAgICAgIFN0cmluZwogIGFjdGl2byAgICAgICAgICAgICAgICAgIEJvb2xlYW4KICBjcmVhdGVkX2F0ICAgICAgICAgICAgICBEYXRlVGltZT8gICAgICAgICAgICAgICAgIEBkYi5UaW1lc3RhbXAoMCkKICB1cGRhdGVkX2F0ICAgICAgICAgICAgICBEYXRlVGltZT8gICAgICAgICAgICAgICAgIEBkYi5UaW1lc3RhbXAoMCkKICBocHpfY2F0ZXRlcl9pbnN0YWxhY2lvbiBocHpfY2F0ZXRlcl9pbnN0YWxhY2lvbltdCn0KCm1vZGVsIGNhdF9jYXRldGVyX3RpcG8gewogIGlkICAgICAgICAgICAgICAgICAgICAgIEludCAgICAgICAgICAgICAgICAgICAgICAgQGlkIEBkZWZhdWx0KGF1dG9pbmNyZW1lbnQoKSkgQGRiLlVuc2lnbmVkSW50CiAgbm9tYnJlICAgICAgICAgICAgICAgICAgU3RyaW5nCiAgYWN0aXZvICAgICAgICAgICAgICAgICAgQm9vbGVhbgogIGNyZWF0ZWRfYXQgICAgICAgICAgICAgIERhdGVUaW1lPyAgICAgICAgICAgICAgICAgQGRiLlRpbWVzdGFtcCgwKQogIHVwZGF0ZWRfYXQgICAgICAgICAgICAgIERhdGVUaW1lPyAgICAgICAgICAgICAgICAgQGRiLlRpbWVzdGFtcCgwKQogIGhwel9jYXRldGVyX2luc3RhbGFjaW9uIGhwel9jYXRldGVyX2luc3RhbGFjaW9uW10KfQoKbW9kZWwgY2F0X2NoZWNrbGlzdF9wcmVndW50YXMgewogIGlkICAgICAgICAgQmlnSW50ICAgIEBpZCBAZGVmYXVsdChhdXRvaW5jcmVtZW50KCkpIEBkYi5VbnNpZ25lZEJpZ0ludAogIG5vbWJyZSAgICAgU3RyaW5nICAgIEBkYi5WYXJDaGFyKDI1MCkKICBmb3JtYXRvICAgIFN0cmluZyAgICBAZGIuVmFyQ2hhcigxMCkKICBjcmVhdGVkX2F0IERhdGVUaW1lPyBAZGIuVGltZXN0YW1wKDApCiAgdXBkYXRlZF9hdCBEYXRlVGltZT8gQGRiLlRpbWVzdGFtcCgwKQogIGRlbGV0ZWRfYXQgRGF0ZVRpbWU/IEBkYi5UaW1lc3RhbXAoMCkKfQoKbW9kZWwgY2F0X2NoZWNrbGlzdF9yZXNwdWVzdGFzIHsKICBpZCAgICAgICAgIEJpZ0ludCAgICBAaWQgQGRlZmF1bHQoYXV0b2luY3JlbWVudCgpKSBAZGIuVW5zaWduZWRCaWdJbnQKICBub21icmUgICAgIFN0cmluZyAgICBAZGIuVmFyQ2hhcigyNTApCiAgY2F0ZWdvcmlhICBTdHJpbmcgICAgQGRiLlZhckNoYXIoMjUwKQogIGZvcm1hdG8gICAgU3RyaW5nICAgIEBkYi5WYXJDaGFyKDEwKQogIGNyZWF0ZWRfYXQgRGF0ZVRpbWU/IEBkYi5UaW1lc3RhbXAoMCkKICB1cGRhdGVkX2F0IERhdGVUaW1lPyBAZGIuVGltZXN0YW1wKDApCiAgZGVsZXRlZF9hdCBEYXRlVGltZT8gQGRiLlRpbWVzdGFtcCgwKQp9Cgptb2RlbCBjYXRfY2llMTAgewogIGlkICAgICAgICAgICAgICAgICAgICAgICBJbnQgICAgICAgICAgICAgICAgICAgICAgICBAaWQgQGRlZmF1bHQoYXV0b2luY3JlbWVudCgpKSBAZGIuVW5zaWduZWRJbnQKICBsZXRyYSAgICAgICAgICAgICAgICAgICAgU3RyaW5nPyAgICAgICAgICAgICAgICAgICAgQGRiLkNoYXIoMSkKICBjYXRhbG9nX2tleSAgICAgICAgICAgICAgU3RyaW5nPyAgICAgICAgICAgICAgICAgICAgQGRiLlZhckNoYXIoMTApCiAgYXN0ZXJpc2NvICAgICAgICAgICAgICAgIFN0cmluZz8gICAgICAgICAgICAgICAgICAgIEBkYi5WYXJDaGFyKDEwKQogIG5vbWJyZSAgICAgICAgICAgICAgICAgICBTdHJpbmc/ICAgICAgICAgICAgICAgICAgICBAZGIuVmFyQ2hhcig1MDApCiAgbHNleCAgICAgICAgICAgICAgICAgICAgIFN0cmluZz8gICAgICAgICAgICAgICAgICAgIEBkYi5WYXJDaGFyKDYpCiAgbGluZiAgICAgICAgICAgICAgICAgICAgIFN0cmluZz8gICAgICAgICAgICAgICAgICAgIEBkYi5WYXJDaGFyKDYpCiAgbHN1cCAgICAgICAgICAgICAgICAgICAgIFN0cmluZz8gICAgICAgICAgICAgICAgICAgIEBkYi5WYXJDaGFyKDYpCiAgdHJpdmlhbCAgICAgICAgICAgICAgICAgIFN0cmluZz8gICAgICAgICAgICAgICAgICAgIEBkYi5DaGFyKDIpCiAgZXJyYWRpY2FkbyAgICAgICAgICAgICAgIFN0cmluZz8gICAgICAgICAgICAgICAgICAgIEBkYi5DaGFyKDIpCiAgbl9pbnRlciAgICAgICAgICAgICAgICAgIFN0cmluZz8gICAgICAgICAgICAgICAgICAgIEBkYi5DaGFyKDIpCiAgbmluICAgICAgICAgICAgICAgICAgICAgIFN0cmluZz8gICAgICAgICAgICAgICAgICAgIEBkYi5DaGFyKDIpCiAgbmlubXRvYnMgICAgICAgICAgICAgICAgIFN0cmluZz8gICAgICAgICAgICAgICAgICAgIEBkYi5DaGFyKDIpCiAgbm9fY2JkICAgICAgICAgICAgICAgICAgIFN0cmluZz8gICAgICAgICAgICAgICAgICAgIEBkYi5DaGFyKDIpCiAgbm9fYXBoICAgICAgICAgICAgICAgICAgIFN0cmluZz8gICAgICAgICAgICAgICAgICAgIEBkYi5DaGFyKDIpCiAgZmV0YWwgICAgICAgICAgICAgICAgICAgIFN0cmluZz8gICAgICAgICAgICAgICAgICAgIEBkYi5DaGFyKDIpCiAgY2xhdmVfY2FwaXR1bG9fdHlwZSAgICAgIFN0cmluZz8gICAgICAgICAgICAgICAgICAgIEBkYi5DaGFyKDIpCiAgY2FwaXR1bG9fdHlwZSAgICAgICAgICAgIFN0cmluZz8gICAgICAgICAgICAgICAgICAgIEBkYi5WYXJDaGFyKDUwMCkKICBydWJyaWNhX3R5cGUgICAgICAgICAgICAgU3RyaW5nPyAgICAgICAgICAgICAgICAgICAgQGRiLkNoYXIoMykKICB5ZWFyX21vZGlmaSAgICAgICAgICAgICAgU3RyaW5nPyAgICAgICAgICAgICAgICAgICAgQGRiLlZhckNoYXIoNTAwKQogIHllYXJfYXBsaWNhY2lvbiAgICAgICAgICBTdHJpbmc/ICAgICAgICAgICAgICAgICAgICBAZGIuVmFyQ2hhcig0KQogIG5vdGRpYXJpYSAgICAgICAgICAgICAgICBTdHJpbmc/ICAgICAgICAgICAgICAgICAgICBAZGIuQ2hhcigyKQogIG5vdHNlbWFuYWwgICAgICAgICAgICAgICBTdHJpbmc/ICAgICAgICAgICAgICAgICAgICBAZGIuQ2hhcigyKQogIHNpc3RlbWFfZXNwZWNpYWwgICAgICAgICBTdHJpbmc/ICAgICAgICAgICAgICAgICAgICBAZGIuQ2hhcigyKQogIGJpcm1tICAgICAgICAgICAgICAgICAgICBTdHJpbmc/ICAgICAgICAgICAgICAgICAgICBAZGIuQ2hhcigyKQogIGN2ZV9jYXVzYV90eXBlICAgICAgICAgICBTdHJpbmc/ICAgICAgICAgICAgICAgICAgICBAZGIuQ2hhcigxKQogIGNhdXNhX3R5cGUgICAgICAgICAgICAgICBTdHJpbmc/ICAgICAgICAgICAgICAgICAgICBAZGIuVmFyQ2hhcig1MDApCiAgZXBpX21vcnRhICAgICAgICAgICAgICAgIFN0cmluZz8gICAgICAgICAgICAgICAgICAgIEBkYi5DaGFyKDIpCiAgZXBpX21vcnRhX201ICAgICAgICAgICAgIFN0cmluZz8gICAgICAgICAgICAgICAgICAgIEBkYi5DaGFyKDIpCiAgZWRhc19lX2lyYXNfZW5fbTUgICAgICAgIFN0cmluZz8gICAgICAgICAgICAgICAgICAgIEBkYi5DaGFyKDIpCiAgbGlzdGExICAgICAgICAgICAgICAgICAgIFN0cmluZz8gICAgICAgICAgICAgICAgICAgIEBkYi5DaGFyKDMpCiAgbGlzdGE1ICAgICAgICAgICAgICAgICAgIFN0cmluZz8gICAgICAgICAgICAgICAgICAgIEBkYi5DaGFyKDMpCiAgcHJpbm1vcnRhNSAgICAgICAgICAgICAgIFN0cmluZz8gICAgICAgICAgICAgICAgICAgIEBkYi5DaGFyKDUpCiAgcHJpbm1vcmJpICAgICAgICAgICAgICAgIFN0cmluZz8gICAgICAgICAgICAgICAgICAgIEBkYi5DaGFyKDUpCiAgbG1fbW9yYmkgICAgICAgICAgICAgICAgIFN0cmluZz8gICAgICAgICAgICAgICAgICAgIEBkYi5DaGFyKDUpCiAgbG1fbW9ydGEgICAgICAgICAgICAgICAgIFN0cmluZz8gICAgICAgICAgICAgICAgICAgIEBkYi5DaGFyKDUpCiAgbGdiZDE2NSAgICAgICAgICAgICAgICAgIFN0cmluZz8gICAgICAgICAgICAgICAgICAgIEBkYi5DaGFyKDUpCiAgbG9tc2JlY2sgICAgICAgICAgICAgICAgIFN0cmluZz8gICAgICAgICAgICAgICAgICAgIEBkYi5DaGFyKDUpCiAgbGdiZDE5MCAgICAgICAgICAgICAgICAgIFN0cmluZz8gICAgICAgICAgICAgICAgICAgIEBkYi5DaGFyKDUpCiAgZXNfY2F1c2VzICAgICAgICAgICAgICAgIFN0cmluZz8gICAgICAgICAgICAgICAgICAgIEBkYi5DaGFyKDIpCiAgbnVtX2NhdXNlcyAgICAgICAgICAgICAgIFN0cmluZz8gICAgICAgICAgICAgICAgICAgIEBkYi5DaGFyKDIpCiAgZXNfc3VpdmVfbW9ydGEgICAgICAgICAgIFN0cmluZz8gICAgICAgICAgICAgICAgICAgIEBkYi5DaGFyKDIpCiAgZGFnYSAgICAgICAgICAgICAgICAgICAgIFN0cmluZz8gICAgICAgICAgICAgICAgICAgIEBkYi5DaGFyKDEpCiAgZXBpX2NsYXZlICAgICAgICAgICAgICAgIFN0cmluZz8gICAgICAgICAgICAgICAgICAgIEBkYi5WYXJDaGFyKDEwKQogIGVwaV9jbGF2ZV9kZXNjICAgICAgICAgICBTdHJpbmc/ICAgICAgICAgICAgICAgICAgICBAZGIuVmFyQ2hhcig1MDApCiAgZXNfc3VpdmVfbW9yYiAgICAgICAgICAgIFN0cmluZz8gICAgICAgICAgICAgICAgICAgIEBkYi5DaGFyKDIpCiAgZXNfc3VpdmVfbm90aW4gICAgICAgICAgIFN0cmluZz8gICAgICAgICAgICAgICAgICAgIEBkYi5DaGFyKDIpCiAgZXNfc3VpdmVfZXN0X2VwaSAgICAgICAgIFN0cmluZz8gICAgICAgICAgICAgICAgICAgIEBkYi5DaGFyKDIpCiAgZXNfc3VpdmVfZXN0X2Jyb3RlICAgICAgIFN0cmluZz8gICAgICAgICAgICAgICAgICAgIEBkYi5DaGFyKDIpCiAgc2luYWMgICAgICAgICAgICAgICAgICAgIFN0cmluZz8gICAgICAgICAgICAgICAgICAgIEBkYi5DaGFyKDIpCiAgY29kaWdveCAgICAgICAgICAgICAgICAgIFN0cmluZz8gICAgICAgICAgICAgICAgICAgIEBkYi5DaGFyKDIpCiAgY29kX3NpdF9sZXNpb24gICAgICAgICAgIFN0cmluZz8gICAgICAgICAgICAgICAgICAgIEBkYi5DaGFyKDIpCiAgY3JlYXRlZF9hdCAgICAgICAgICAgICAgIERhdGVUaW1lPyAgICAgICAgICAgICAgICAgIEBkYi5UaW1lc3RhbXAoMCkKICB1cGRhdGVkX2F0ICAgICAgICAgICAgICAgRGF0ZVRpbWU/ICAgICAgICAgICAgICAgICAgQGRiLlRpbWVzdGFtcCgwKQogIGRlbGV0ZWRfYXQgICAgICAgICAgICAgICBEYXRlVGltZT8gICAgICAgICAgICAgICAgICBAZGIuVGltZXN0YW1wKDApCiAgaHB6X2NhbWFfaGlzdG9yaWFsICAgICAgIGhwel9jYW1hX2hpc3RvcmlhbFtdCiAgaHB6X2R4X2hpc3RvcmlhbCAgICAgICAgIGhwel9keF9oaXN0b3JpYWxbXQogIGhwel9pbmdyZXNvX2NvbnN1bHRhICAgICBocHpfaW5ncmVzb19jb25zdWx0YVtdCiAgaHB6X2luZ3Jlc29faG9zcGl0YWxhcmlvIGhwel9pbmdyZXNvX2hvc3BpdGFsYXJpb1tdCiAgaHB6X3BhdG9sb2dpYV9lc3R1ZGlvcyAgIGhwel9wYXRvbG9naWFfZXN0dWRpb3NbXQp9Cgptb2RlbCBjYXRfY2x1ZXMgewogIGlkICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSW50ICAgICAgICAgICAgICAgICAgICAgICAgQGlkIEBkZWZhdWx0KGF1dG9pbmNyZW1lbnQoKSkgQGRiLlVuc2lnbmVkSW50CiAgY2x1ZXMgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTdHJpbmcgICAgICAgICAgICAgICAgICAgICBAZGIuVmFyQ2hhcig1MCkKICBpbnN0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFN0cmluZz8gICAgICAgICAgICAgICAgICAgIEBkYi5WYXJDaGFyKDUpCiAgY3ZlX2VudCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTdHJpbmc/ICAgICAgICAgICAgICAgICAgICBAZGIuVmFyQ2hhcigyKQogIGN2ZV9qdXIgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU3RyaW5nPyAgICAgICAgICAgICAgICAgICAgQGRiLlZhckNoYXIoMikKICBjdmVfbXVuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFN0cmluZz8gICAgICAgICAgICAgICAgICAgIEBkYi5WYXJDaGFyKDMpCiAgY3ZlX2xvYyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTdHJpbmc/ICAgICAgICAgICAgICAgICAgICBAZGIuVmFyQ2hhcig0KQogIHRpcG8xICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU3RyaW5nPyAgICAgICAgICAgICAgICAgICAgQGRiLlZhckNoYXIoNSkKICB0aXBvMiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFN0cmluZz8gICAgICAgICAgICAgICAgICAgIEBkYi5WYXJDaGFyKDUpCiAgbm9tX3VuaSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTdHJpbmc/ICAgICAgICAgICAgICAgICAgICBAZGIuVmFyQ2hhcigxMTApCiAgZG9taWNpbCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTdHJpbmc/ICAgICAgICAgICAgICAgICAgICBAZGIuVmFyQ2hhcigxMTApCiAgY3AgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTdHJpbmc/ICAgICAgICAgICAgICAgICAgICBAZGIuVmFyQ2hhcig1KQogIHJlc3Bvbl91bmlkYWQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU3RyaW5nPwogIGVzdGF0dXMgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQm9vbGVhbiAgICAgICAgICAgICAgICAgICAgQGRlZmF1bHQodHJ1ZSkKICBudW10ZWwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFN0cmluZz8gICAgICAgICAgICAgICAgICAgIEBkYi5WYXJDaGFyKDMwKQogIGVtYWlsICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU3RyaW5nPyAgICAgICAgICAgICAgICAgICAgQGRiLlZhckNoYXIoMzApCiAgY3JlYXRlZF9hdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBEYXRlVGltZT8gICAgICAgICAgICAgICAgICBAZGIuVGltZXN0YW1wKDApCiAgdXBkYXRlZF9hdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBEYXRlVGltZT8gICAgICAgICAgICAgICAgICBAZGIuVGltZXN0YW1wKDApCiAgZGVsZXRlZF9hdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBEYXRlVGltZT8gICAgICAgICAgICAgICAgICBAZGIuVGltZXN0YW1wKDApCiAgaHB6X2NsdWVfaGlzdG9yaWFsICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBocHpfY2x1ZV9oaXN0b3JpYWxbXQogIGhwel9pbmdyZXNvX2NvbnN1bHRhX2hwel9pbmdyZXNvX2NvbnN1bHRhX2lkX2NsdWVfYXRlbmNpb25Ub2NhdF9jbHVlcyAgICAgICAgICAgICAgICAgaHB6X2luZ3Jlc29fY29uc3VsdGFbXSAgICAgQHJlbGF0aW9uKCJocHpfaW5ncmVzb19jb25zdWx0YV9pZF9jbHVlX2F0ZW5jaW9uVG9jYXRfY2x1ZXMiKQogIGhwel9pbmdyZXNvX2NvbnN1bHRhX2hwel9pbmdyZXNvX2NvbnN1bHRhX2lkX2NsdWVfY29udHJhcmVmZXJlbmNpYVRvY2F0X2NsdWVzICAgICAgICAgaHB6X2luZ3Jlc29fY29uc3VsdGFbXSAgICAgQHJlbGF0aW9uKCJocHpfaW5ncmVzb19jb25zdWx0YV9pZF9jbHVlX2NvbnRyYXJlZmVyZW5jaWFUb2NhdF9jbHVlcyIpCiAgaHB6X2luZ3Jlc29fY29uc3VsdGFfaHB6X2luZ3Jlc29fY29uc3VsdGFfaWRfY2x1ZV9yZWZlcmVuY2lhVG9jYXRfY2x1ZXMgICAgICAgICAgICAgICBocHpfaW5ncmVzb19jb25zdWx0YVtdICAgICBAcmVsYXRpb24oImhwel9pbmdyZXNvX2NvbnN1bHRhX2lkX2NsdWVfcmVmZXJlbmNpYVRvY2F0X2NsdWVzIikKICBocHpfaW5ncmVzb19ob3NwaXRhbGFyaW9faHB6X2luZ3Jlc29faG9zcGl0YWxhcmlvX2lkX2NsdWVfYXRlbmNpb25Ub2NhdF9jbHVlcyAgICAgICAgIGhwel9pbmdyZXNvX2hvc3BpdGFsYXJpb1tdIEByZWxhdGlvbigiaHB6X2luZ3Jlc29faG9zcGl0YWxhcmlvX2lkX2NsdWVfYXRlbmNpb25Ub2NhdF9jbHVlcyIpCiAgaHB6X2luZ3Jlc29faG9zcGl0YWxhcmlvX2hwel9pbmdyZXNvX2hvc3BpdGFsYXJpb19pZF9jbHVlX2NvbnRyYXJlZmVyZW5jaWFUb2NhdF9jbHVlcyBocHpfaW5ncmVzb19ob3NwaXRhbGFyaW9bXSBAcmVsYXRpb24oImhwel9pbmdyZXNvX2hvc3BpdGFsYXJpb19pZF9jbHVlX2NvbnRyYXJlZmVyZW5jaWFUb2NhdF9jbHVlcyIpCiAgaHB6X2luZ3Jlc29faG9zcGl0YWxhcmlvX2hwel9pbmdyZXNvX2hvc3BpdGFsYXJpb19pZF9jbHVlX3JlZmVyZW5jaWFUb2NhdF9jbHVlcyAgICAgICBocHpfaW5ncmVzb19ob3NwaXRhbGFyaW9bXSBAcmVsYXRpb24oImhwel9pbmdyZXNvX2hvc3BpdGFsYXJpb19pZF9jbHVlX3JlZmVyZW5jaWFUb2NhdF9jbHVlcyIpCn0KCm1vZGVsIGNhdF9jb2RpZ29zX3Bvc3RhbGVzIHsKICBpZCAgICAgICAgICAgICBJbnQgICAgICAgICAgICBAaWQgQGRlZmF1bHQoYXV0b2luY3JlbWVudCgpKSBAZGIuVW5zaWduZWRJbnQKICBjbGF2ZSAgICAgICAgICBTdHJpbmcgICAgICAgICBAZGIuVmFyQ2hhcigyKQogIG5vbWJyZSAgICAgICAgIFN0cmluZyAgICAgICAgIEBkYi5WYXJDaGFyKDUwKQogIGFicmV2ICAgICAgICAgIFN0cmluZyAgICAgICAgIEBkYi5WYXJDaGFyKDQpCiAgaWRfbXVuaWNpcGlvICAgSW50ICAgICAgICAgICAgQGRiLlVuc2lnbmVkSW50CiAgY3JlYXRlZF9hdCAgICAgRGF0ZVRpbWU/ICAgICAgQGRiLlRpbWVzdGFtcCgwKQogIHVwZGF0ZWRfYXQgICAgIERhdGVUaW1lPyAgICAgIEBkYi5UaW1lc3RhbXAoMCkKICBkZWxldGVkX2F0ICAgICBEYXRlVGltZT8gICAgICBAZGIuVGltZXN0YW1wKDApCiAgY2F0X211bmljaXBpb3MgY2F0X211bmljaXBpb3MgQHJlbGF0aW9uKGZpZWxkczogW2lkX211bmljaXBpb10sIHJlZmVyZW5jZXM6IFtpZF0sIG9uVXBkYXRlOiBSZXN0cmljdCwgbWFwOiAiY2F0X2NvZGlnb3NfcG9zdGFsZXNfaWRfbXVuaWNpcGlvX2ZvcmVpZ24iKQoKICBAQGluZGV4KFtpZF9tdW5pY2lwaW9dLCBtYXA6ICJjYXRfY29kaWdvc19wb3N0YWxlc19pZF9tdW5pY2lwaW9fZm9yZWlnbiIpCn0KCm1vZGVsIGNhdF9jb2RpZ29zX3VyZ2VuY2lhcyB7CiAgaWQgICAgICAgICAgICAgICAgICAgICAgIEludCAgICAgICAgICAgICAgICAgICAgICAgIEBpZCBAZGVmYXVsdChhdXRvaW5jcmVtZW50KCkpIEBkYi5VbnNpZ25lZEludAogIG5vbWJyZSAgICAgICAgICAgICAgICAgICBTdHJpbmcKICBjcmVhdGVkX2F0ICAgICAgICAgICAgICAgRGF0ZVRpbWU/ICAgICAgICAgICAgICAgICAgQGRiLlRpbWVzdGFtcCgwKQogIHVwZGF0ZWRfYXQgICAgICAgICAgICAgICBEYXRlVGltZT8gICAgICAgICAgICAgICAgICBAZGIuVGltZXN0YW1wKDApCiAgZGVsZXRlZF9hdCAgICAgICAgICAgICAgIERhdGVUaW1lPyAgICAgICAgICAgICAgICAgIEBkYi5UaW1lc3RhbXAoMCkKICBocHpfaW5ncmVzb19ob3NwaXRhbGFyaW8gaHB6X2luZ3Jlc29faG9zcGl0YWxhcmlvW10KfQoKbW9kZWwgY2F0X2NvbG9uaWFzIHsKICBpZCAgICAgICAgICAgICBJbnQgICAgICAgICAgICBAaWQgQGRlZmF1bHQoYXV0b2luY3JlbWVudCgpKSBAZGIuVW5zaWduZWRJbnQKICBjbGF2ZSAgICAgICAgICBTdHJpbmcgICAgICAgICBAZGIuVmFyQ2hhcigyKQogIG5vbWJyZSAgICAgICAgIFN0cmluZyAgICAgICAgIEBkYi5WYXJDaGFyKDUwKQogIGFicmV2ICAgICAgICAgIFN0cmluZyAgICAgICAgIEBkYi5WYXJDaGFyKDQpCiAgaWRfbXVuaWNpcGlvICAgSW50ICAgICAgICAgICAgQGRiLlVuc2lnbmVkSW50CiAgY3JlYXRlZF9hdCAgICAgRGF0ZVRpbWU/ICAgICAgQGRiLlRpbWVzdGFtcCgwKQogIHVwZGF0ZWRfYXQgICAgIERhdGVUaW1lPyAgICAgIEBkYi5UaW1lc3RhbXAoMCkKICBkZWxldGVkX2F0ICAgICBEYXRlVGltZT8gICAgICBAZGIuVGltZXN0YW1wKDApCiAgY2F0X211bmljaXBpb3MgY2F0X211bmljaXBpb3MgQHJlbGF0aW9uKGZpZWxkczogW2lkX211bmljaXBpb10sIHJlZmVyZW5jZXM6IFtpZF0sIG9uVXBkYXRlOiBSZXN0cmljdCwgbWFwOiAiY2F0X2NvbG9uaWFzX2lkX211bmljaXBpb19mb3JlaWduIikKCiAgQEBpbmRleChbaWRfbXVuaWNpcGlvXSwgbWFwOiAiY2F0X2NvbG9uaWFzX2lkX211bmljaXBpb19mb3JlaWduIikKfQoKbW9kZWwgY2F0X2NvbnN1bHRhX2hvcmFyaW9zIHsKICBpZCAgICAgICAgICAgICAgICAgQmlnSW50ICAgICAgICAgICAgICBAaWQgQGRlZmF1bHQoYXV0b2luY3JlbWVudCgpKSBAZGIuVW5zaWduZWRCaWdJbnQKICB0aXBvICAgICAgICAgICAgICAgU3RyaW5nCiAgZGF5ICAgICAgICAgICAgICAgIEludAogIGZlY2hhX2luaWNpbyAgICAgICBEYXRlVGltZSAgICAgICAgICAgIEBkYi5EYXRlCiAgZmVjaGFfZmluICAgICAgICAgIERhdGVUaW1lICAgICAgICAgICAgQGRiLkRhdGUKICBob3JhX2luaWNpbyAgICAgICAgRGF0ZVRpbWUgICAgICAgICAgICBAZGIuVGltZSgwKQogIGhvcmFfZmluICAgICAgICAgICBEYXRlVGltZSAgICAgICAgICAgIEBkYi5UaW1lKDApCiAgaW50ZXJ2YWxvICAgICAgICAgIFN0cmluZz8gICAgICAgICAgICAgQGRiLkNoYXIoMykKICBjaXRhICAgICAgICAgICAgICAgU3RyaW5nICAgICAgICAgICAgICBAZGIuVmFyQ2hhcigxMCkKICBpbmljaWFyICAgICAgICAgICAgU3RyaW5nPyAgICAgICAgICAgICBAZGIuVmFyQ2hhcigxKQogIHZhY2FjaW9uZXMgICAgICAgICBJbnQ/ICAgICAgICAgICAgICAgIEBkZWZhdWx0KDEpIEBkYi5UaW55SW50CiAgaWRfbWVkaWNvICAgICAgICAgIEludD8gICAgICAgICAgICAgICAgQGRiLlVuc2lnbmVkSW50CiAgaWRfZXNwZWNpYWxpZGFkICAgIEludD8gICAgICAgICAgICAgICAgQGRiLlVuc2lnbmVkSW50CiAgaWRfY29uc3VsdG9yaW8gICAgIEludD8gICAgICAgICAgICAgICAgQGRiLlVuc2lnbmVkSW50CiAgY3JlYXRlZF9hdCAgICAgICAgIERhdGVUaW1lPyAgICAgICAgICAgQGRiLlRpbWVzdGFtcCgwKQogIHVwZGF0ZWRfYXQgICAgICAgICBEYXRlVGltZT8gICAgICAgICAgIEBkYi5UaW1lc3RhbXAoMCkKICBkZWxldGVkX2F0ICAgICAgICAgRGF0ZVRpbWU/ICAgICAgICAgICBAZGIuVGltZXN0YW1wKDApCiAgaXNGZXN0aXZvcyAgICAgICAgIEJvb2xlYW4gICAgICAgICAgICAgQGRlZmF1bHQoZmFsc2UpCiAgY2F0X2NhbWFzICAgICAgICAgIGNhdF9jYW1hcz8gICAgICAgICAgQHJlbGF0aW9uKGZpZWxkczogW2lkX2NvbnN1bHRvcmlvXSwgcmVmZXJlbmNlczogW2lkXSwgb25EZWxldGU6IFJlc3RyaWN0LCBvblVwZGF0ZTogUmVzdHJpY3QsIG1hcDogImNhdF9jb25zdWx0YV9ob3Jhcmlvc19pZF9jb25zdWx0b3Jpb19mb3JlaWduIikKICBjYXRfZXNwZWNpYWxpZGFkZXMgY2F0X2VzcGVjaWFsaWRhZGVzPyBAcmVsYXRpb24oZmllbGRzOiBbaWRfZXNwZWNpYWxpZGFkXSwgcmVmZXJlbmNlczogW2lkXSwgb25EZWxldGU6IFJlc3RyaWN0LCBvblVwZGF0ZTogUmVzdHJpY3QsIG1hcDogImNhdF9jb25zdWx0YV9ob3Jhcmlvc19pZF9lc3BlY2lhbGlkYWRfZm9yZWlnbiIpCiAgcmNoX2VtcGxlYWRvcyAgICAgIHJjaF9lbXBsZWFkb3M/ICAgICAgQHJlbGF0aW9uKGZpZWxkczogW2lkX21lZGljb10sIHJlZmVyZW5jZXM6IFtpZF0sIG9uRGVsZXRlOiBSZXN0cmljdCwgb25VcGRhdGU6IFJlc3RyaWN0LCBtYXA6ICJjYXRfY29uc3VsdGFfaG9yYXJpb3NfaWRfbWVkaWNvX2ZvcmVpZ24iKQoKICBAQGluZGV4KFtpZF9jb25zdWx0b3Jpb10sIG1hcDogImNhdF9jb25zdWx0YV9ob3Jhcmlvc19pZF9jb25zdWx0b3Jpb19mb3JlaWduIikKICBAQGluZGV4KFtpZF9lc3BlY2lhbGlkYWRdLCBtYXA6ICJjYXRfY29uc3VsdGFfaG9yYXJpb3NfaWRfZXNwZWNpYWxpZGFkX2ZvcmVpZ24iKQogIEBAaW5kZXgoW2lkX21lZGljb10sIG1hcDogImNhdF9jb25zdWx0YV9ob3Jhcmlvc19pZF9tZWRpY29fZm9yZWlnbiIpCn0KCm1vZGVsIGNhdF9kZXBhcnRhbWVudG9fZW1wbGVhZG8gewogIGlkICAgICAgICAgICAgICAgIEJpZ0ludCAgICAgICAgICAgICBAaWQgQGRlZmF1bHQoYXV0b2luY3JlbWVudCgpKSBAZGIuVW5zaWduZWRCaWdJbnQKICBpZF9kZXBhcnRhbWVudG8gICBJbnQ/ICAgICAgICAgICAgICAgQGRiLlVuc2lnbmVkSW50CiAgaWRfZW1wbGVhZG8gICAgICAgSW50PyAgICAgICAgICAgICAgIEBkYi5VbnNpZ25lZEludAogIGRlbGV0ZWRfYXQgICAgICAgIERhdGVUaW1lPyAgICAgICAgICBAZGIuVGltZXN0YW1wKDApCiAgY3JlYXRlZF9hdCAgICAgICAgRGF0ZVRpbWU/ICAgICAgICAgIEBkYi5UaW1lc3RhbXAoMCkKICB1cGRhdGVkX2F0ICAgICAgICBEYXRlVGltZT8gICAgICAgICAgQGRiLlRpbWVzdGFtcCgwKQogIGNhdF9kZXBhcnRhbWVudG9zIGNhdF9kZXBhcnRhbWVudG9zPyBAcmVsYXRpb24oZmllbGRzOiBbaWRfZGVwYXJ0YW1lbnRvXSwgcmVmZXJlbmNlczogW2lkXSwgb25EZWxldGU6IFJlc3RyaWN0LCBvblVwZGF0ZTogUmVzdHJpY3QsIG1hcDogImNhdF9kZXBhcnRhbWVudG9fZW1wbGVhZG9faWRfZGVwYXJ0YW1lbnRvX2ZvcmVpZ24iKQogIHJjaF9lbXBsZWFkb3MgICAgIHJjaF9lbXBsZWFkb3M/ICAgICBAcmVsYXRpb24oZmllbGRzOiBbaWRfZW1wbGVhZG9dLCByZWZlcmVuY2VzOiBbaWRdLCBvbkRlbGV0ZTogUmVzdHJpY3QsIG9uVXBkYXRlOiBSZXN0cmljdCwgbWFwOiAiY2F0X2RlcGFydGFtZW50b19lbXBsZWFkb19pZF9lbXBsZWFkb19mb3JlaWduIikKCiAgQEBpbmRleChbaWRfZGVwYXJ0YW1lbnRvXSwgbWFwOiAiY2F0X2RlcGFydGFtZW50b19lbXBsZWFkb19pZF9kZXBhcnRhbWVudG9fZm9yZWlnbiIpCiAgQEBpbmRleChbaWRfZW1wbGVhZG9dLCBtYXA6ICJjYXRfZGVwYXJ0YW1lbnRvX2VtcGxlYWRvX2lkX2VtcGxlYWRvX2ZvcmVpZ24iKQp9Cgptb2RlbCBjYXRfZGVwYXJ0YW1lbnRvcyB7CiAgaWQgICAgICAgICAgICAgICAgICAgICAgICBJbnQgICAgICAgICAgICAgICAgICAgICAgICAgQGlkIEBkZWZhdWx0KGF1dG9pbmNyZW1lbnQoKSkgQGRiLlVuc2lnbmVkSW50CiAgY29kaWdvICAgICAgICAgICAgICAgICAgICBTdHJpbmcgICAgICAgICAgICAgICAgICAgICAgQGRiLlZhckNoYXIoMTApCiAgbm9tYnJlICAgICAgICAgICAgICAgICAgICBTdHJpbmcgICAgICAgICAgICAgICAgICAgICAgQGRiLlZhckNoYXIoMjUwKQogIGNyZWF0ZWRfYXQgICAgICAgICAgICAgICAgRGF0ZVRpbWU/ICAgICAgICAgICAgICAgICAgIEBkYi5UaW1lc3RhbXAoMCkKICB1cGRhdGVkX2F0ICAgICAgICAgICAgICAgIERhdGVUaW1lPyAgICAgICAgICAgICAgICAgICBAZGIuVGltZXN0YW1wKDApCiAgZGVsZXRlZF9hdCAgICAgICAgICAgICAgICBEYXRlVGltZT8gICAgICAgICAgICAgICAgICAgQGRiLlRpbWVzdGFtcCgwKQogIGNhdF9kZXBhcnRhbWVudG9fZW1wbGVhZG8gY2F0X2RlcGFydGFtZW50b19lbXBsZWFkb1tdCiAgY2F0X3ViaWNhY2lvbmVzICAgICAgICAgICBjYXRfdWJpY2FjaW9uZXNbXQogIHJjaF9lbXBsZWFkb3MgICAgICAgICAgICAgcmNoX2VtcGxlYWRvc1tdCiAgcmNoX2VtcGxlYWRvc19leHRlcm5vcyAgICByY2hfZW1wbGVhZG9zX2V4dGVybm9zW10KfQoKbW9kZWwgY2F0X2RvY3VtZW50b3MgewogIGlkICAgICAgICAgICAgICAgIEludCAgICAgICAgICAgICAgICAgQGlkIEBkZWZhdWx0KGF1dG9pbmNyZW1lbnQoKSkgQGRiLlVuc2lnbmVkSW50CiAgbm9tYnJlICAgICAgICAgICAgU3RyaW5nCiAgY3JlYXRlZF9hdCAgICAgICAgRGF0ZVRpbWU/ICAgICAgICAgICBAZGIuVGltZXN0YW1wKDApCiAgdXBkYXRlZF9hdCAgICAgICAgRGF0ZVRpbWU/ICAgICAgICAgICBAZGIuVGltZXN0YW1wKDApCiAgZGVsZXRlZF9hdCAgICAgICAgRGF0ZVRpbWU/ICAgICAgICAgICBAZGIuVGltZXN0YW1wKDApCiAgY21wX2RvY3VtZW50YWNpb24gY21wX2RvY3VtZW50YWNpb25bXQp9Cgptb2RlbCBjYXRfZW5mZXJtZXJpYSB7CiAgaWQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEJpZ0ludCAgICAgICAgICAgICAgICAgIEBpZCBAZGVmYXVsdChhdXRvaW5jcmVtZW50KCkpIEBkYi5VbnNpZ25lZEJpZ0ludAogIHRhYmxhICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTdHJpbmcgICAgICAgICAgICAgICAgICBAZGIuVmFyQ2hhcigyNTApCiAgdGlwbyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFN0cmluZyAgICAgICAgICAgICAgICAgIEBkYi5WYXJDaGFyKDI1MCkKICBub21icmUgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU3RyaW5nICAgICAgICAgICAgICAgICAgQGRiLlZhckNoYXIoMjUwKQogIHB1bnRvcyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTdHJpbmcgICAgICAgICAgICAgICAgICBAZGIuVmFyQ2hhcigyKQogIGljb24gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTdHJpbmcgICAgICAgICAgICAgICAgICBAZGIuVmFyQ2hhcigxMDApCiAgY3JlYXRlZF9hdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIERhdGVUaW1lPyAgICAgICAgICAgICAgIEBkYi5UaW1lc3RhbXAoMCkKICB1cGRhdGVkX2F0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRGF0ZVRpbWU/ICAgICAgICAgICAgICAgQGRiLlRpbWVzdGFtcCgwKQogIGRlbGV0ZWRfYXQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBEYXRlVGltZT8gICAgICAgICAgICAgICBAZGIuVGltZXN0YW1wKDApCiAgZW5mX2VzY2FsYV92YWxvcmFjaW9uX2VuZl9lc2NhbGFfdmFsb3JhY2lvbl9pZF9hY3RpdmlkYWRUb2NhdF9lbmZlcm1lcmlhICAgICAgIGVuZl9lc2NhbGFfdmFsb3JhY2lvbltdIEByZWxhdGlvbigiZW5mX2VzY2FsYV92YWxvcmFjaW9uX2lkX2FjdGl2aWRhZFRvY2F0X2VuZmVybWVyaWEiKQogIGVuZl9lc2NhbGFfdmFsb3JhY2lvbl9lbmZfZXNjYWxhX3ZhbG9yYWNpb25faWRfY3JpdGVyaW9fbW90b3JhVG9jYXRfZW5mZXJtZXJpYSBlbmZfZXNjYWxhX3ZhbG9yYWNpb25bXSBAcmVsYXRpb24oImVuZl9lc2NhbGFfdmFsb3JhY2lvbl9pZF9jcml0ZXJpb19tb3RvcmFUb2NhdF9lbmZlcm1lcmlhIikKICBlbmZfZXNjYWxhX3ZhbG9yYWNpb25fZW5mX2VzY2FsYV92YWxvcmFjaW9uX2lkX2NyaXRlcmlvX29jdWxhclRvY2F0X2VuZmVybWVyaWEgZW5mX2VzY2FsYV92YWxvcmFjaW9uW10gQHJlbGF0aW9uKCJlbmZfZXNjYWxhX3ZhbG9yYWNpb25faWRfY3JpdGVyaW9fb2N1bGFyVG9jYXRfZW5mZXJtZXJpYSIpCiAgZW5mX2VzY2FsYV92YWxvcmFjaW9uX2VuZl9lc2NhbGFfdmFsb3JhY2lvbl9pZF9jcml0ZXJpb192ZXJiYWxUb2NhdF9lbmZlcm1lcmlhIGVuZl9lc2NhbGFfdmFsb3JhY2lvbltdIEByZWxhdGlvbigiZW5mX2VzY2FsYV92YWxvcmFjaW9uX2lkX2NyaXRlcmlvX3ZlcmJhbFRvY2F0X2VuZmVybWVyaWEiKQogIGVuZl9lc2NhbGFfdmFsb3JhY2lvbl9lbmZfZXNjYWxhX3ZhbG9yYWNpb25faWRfZXZhVG9jYXRfZW5mZXJtZXJpYSAgICAgICAgICAgICBlbmZfZXNjYWxhX3ZhbG9yYWNpb25bXSBAcmVsYXRpb24oImVuZl9lc2NhbGFfdmFsb3JhY2lvbl9pZF9ldmFUb2NhdF9lbmZlcm1lcmlhIikKICBlbmZfZXNjYWxhX3ZhbG9yYWNpb25fZW5mX2VzY2FsYV92YWxvcmFjaW9uX2lkX2h1bWVkYWRUb2NhdF9lbmZlcm1lcmlhICAgICAgICAgZW5mX2VzY2FsYV92YWxvcmFjaW9uW10gQHJlbGF0aW9uKCJlbmZfZXNjYWxhX3ZhbG9yYWNpb25faWRfaHVtZWRhZFRvY2F0X2VuZmVybWVyaWEiKQogIGVuZl9lc2NhbGFfdmFsb3JhY2lvbl9lbmZfZXNjYWxhX3ZhbG9yYWNpb25faWRfbW92aWxpZGFkVG9jYXRfZW5mZXJtZXJpYSAgICAgICBlbmZfZXNjYWxhX3ZhbG9yYWNpb25bXSBAcmVsYXRpb24oImVuZl9lc2NhbGFfdmFsb3JhY2lvbl9pZF9tb3ZpbGlkYWRUb2NhdF9lbmZlcm1lcmlhIikKICBlbmZfZXNjYWxhX3ZhbG9yYWNpb25fZW5mX2VzY2FsYV92YWxvcmFjaW9uX2lkX251dHJpY2lvblRvY2F0X2VuZmVybWVyaWEgICAgICAgZW5mX2VzY2FsYV92YWxvcmFjaW9uW10gQHJlbGF0aW9uKCJlbmZfZXNjYWxhX3ZhbG9yYWNpb25faWRfbnV0cmljaW9uVG9jYXRfZW5mZXJtZXJpYSIpCiAgZW5mX2VzY2FsYV92YWxvcmFjaW9uX2VuZl9lc2NhbGFfdmFsb3JhY2lvbl9pZF9wZXJjZXBjaW9uVG9jYXRfZW5mZXJtZXJpYSAgICAgIGVuZl9lc2NhbGFfdmFsb3JhY2lvbltdIEByZWxhdGlvbigiZW5mX2VzY2FsYV92YWxvcmFjaW9uX2lkX3BlcmNlcGNpb25Ub2NhdF9lbmZlcm1lcmlhIikKICBlbmZfZXNjYWxhX3ZhbG9yYWNpb25fZW5mX2VzY2FsYV92YWxvcmFjaW9uX2lkX3JvY2VfbGVzaW9uZXNUb2NhdF9lbmZlcm1lcmlhICAgZW5mX2VzY2FsYV92YWxvcmFjaW9uW10gQHJlbGF0aW9uKCJlbmZfZXNjYWxhX3ZhbG9yYWNpb25faWRfcm9jZV9sZXNpb25lc1RvY2F0X2VuZmVybWVyaWEiKQogIGVuZl9veGlnZW5vdGVyYXBpYV9lbmZfb3hpZ2Vub3RlcmFwaWFfaWRfYWRtaW5pc3RyYWNpb25Ub2NhdF9lbmZlcm1lcmlhICAgICAgICBlbmZfb3hpZ2Vub3RlcmFwaWFbXSAgICBAcmVsYXRpb24oImVuZl9veGlnZW5vdGVyYXBpYV9pZF9hZG1pbmlzdHJhY2lvblRvY2F0X2VuZmVybWVyaWEiKQogIGVuZl9veGlnZW5vdGVyYXBpYV9lbmZfb3hpZ2Vub3RlcmFwaWFfaWRfc2VkYWNjaW9uVG9jYXRfZW5mZXJtZXJpYSAgICAgICAgICAgICBlbmZfb3hpZ2Vub3RlcmFwaWFbXSAgICBAcmVsYXRpb24oImVuZl9veGlnZW5vdGVyYXBpYV9pZF9zZWRhY2Npb25Ub2NhdF9lbmZlcm1lcmlhIikKICBlbmZfb3hpZ2Vub3RlcmFwaWFfZW5mX294aWdlbm90ZXJhcGlhX2lkX3NpZ25vc1RvY2F0X2VuZmVybWVyaWEgICAgICAgICAgICAgICAgZW5mX294aWdlbm90ZXJhcGlhW10gICAgQHJlbGF0aW9uKCJlbmZfb3hpZ2Vub3RlcmFwaWFfaWRfc2lnbm9zVG9jYXRfZW5mZXJtZXJpYSIpCiAgZW5mX3VsY2VyYXNfcHJlc2lvbl9lbmZfdWxjZXJhc19wcmVzaW9uX2lkX2N1ZXJwb1RvY2F0X2VuZmVybWVyaWEgICAgICAgICAgICAgIGVuZl91bGNlcmFzX3ByZXNpb25bXSAgIEByZWxhdGlvbigiZW5mX3VsY2VyYXNfcHJlc2lvbl9pZF9jdWVycG9Ub2NhdF9lbmZlcm1lcmlhIikKICBlbmZfdWxjZXJhc19wcmVzaW9uX2VuZl91bGNlcmFzX3ByZXNpb25faWRfZXh1ZGFkb1RvY2F0X2VuZmVybWVyaWEgICAgICAgICAgICAgZW5mX3VsY2VyYXNfcHJlc2lvbltdICAgQHJlbGF0aW9uKCJlbmZfdWxjZXJhc19wcmVzaW9uX2lkX2V4dWRhZG9Ub2NhdF9lbmZlcm1lcmlhIikKICBlbmZfdWxjZXJhc19wcmVzaW9uX2VuZl91bGNlcmFzX3ByZXNpb25faWRfbG9uZ2l0dWRUb2NhdF9lbmZlcm1lcmlhICAgICAgICAgICAgZW5mX3VsY2VyYXNfcHJlc2lvbltdICAgQHJlbGF0aW9uKCJlbmZfdWxjZXJhc19wcmVzaW9uX2lkX2xvbmdpdHVkVG9jYXRfZW5mZXJtZXJpYSIpCiAgZW5mX3VsY2VyYXNfcHJlc2lvbl9lbmZfdWxjZXJhc19wcmVzaW9uX2lkX3Rlamlkb1RvY2F0X2VuZmVybWVyaWEgICAgICAgICAgICAgIGVuZl91bGNlcmFzX3ByZXNpb25bXSAgIEByZWxhdGlvbigiZW5mX3VsY2VyYXNfcHJlc2lvbl9pZF90ZWppZG9Ub2NhdF9lbmZlcm1lcmlhIikKfQoKbW9kZWwgY2F0X2VxdWlwb3MgewogIGlkICAgICAgICAgICAgICAgICAgIEludCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBpZCBAZGVmYXVsdChhdXRvaW5jcmVtZW50KCkpIEBkYi5VbnNpZ25lZEludAogIG5vbWJyZSAgICAgICAgICAgICAgIFN0cmluZwogIGVzdGFkb19zaXR1YWNpb25hbCAgIFN0cmluZz8KICBjbGFzaWZpY2FjaW9uX2VxdWlwbyBjYXRfZXF1aXBvc19jbGFzaWZpY2FjaW9uX2VxdWlwbwogIG1hcmNhICAgICAgICAgICAgICAgIFN0cmluZwogIG1vZGVsbyAgICAgICAgICAgICAgIFN0cmluZwogIHNlcmllICAgICAgICAgICAgICAgIFN0cmluZwogIG5vX2ludmVudGFyaW8gICAgICAgIFN0cmluZwogIGNvbmRpY2lvbl9lcXVpcG8gICAgIFN0cmluZz8KICBub19mYWN0dXJhICAgICAgICAgICBTdHJpbmc/CiAgaW5zdHJ1Y3Rpdm9fdHJhYmFqbyAgU3RyaW5nPyAgICAgICAgICAgICAgICAgICAgICAgICAgQGRiLlRleHQKICBvYnNlcnZhY2lvbmVzICAgICAgICBTdHJpbmc/ICAgICAgICAgICAgICAgICAgICAgICAgICBAZGIuVGV4dAogIGZpY2hhX3RlY25pY2EgICAgICAgIFN0cmluZz8KICBwbGFjYSAgICAgICAgICAgICAgICBTdHJpbmc/CiAgZm90byAgICAgICAgICAgICAgICAgU3RyaW5nPwogIG1hbnVhbCAgICAgICAgICAgICAgIFN0cmluZz8KICBlc3RhdHVzICAgICAgICAgICAgICBjYXRfZXF1aXBvc19lc3RhdHVzICAgICAgICAgICAgICBAZGVmYXVsdChBQ1RJVk8pCiAgaWRfdWJpY2FjaW9uICAgICAgICAgSW50PyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQGRiLlVuc2lnbmVkSW50CiAgaWRfcGlzbyAgICAgICAgICAgICAgSW50PyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQGRiLlVuc2lnbmVkSW50CiAgY3JlYXRlZF9hdCAgICAgICAgICAgRGF0ZVRpbWU/ICAgICAgICAgICAgICAgICAgICAgICAgQGRiLlRpbWVzdGFtcCgwKQogIHVwZGF0ZWRfYXQgICAgICAgICAgIERhdGVUaW1lPyAgICAgICAgICAgICAgICAgICAgICAgIEBkYi5UaW1lc3RhbXAoMCkKICBkZWxldGVkX2F0ICAgICAgICAgICBEYXRlVGltZT8gICAgICAgICAgICAgICAgICAgICAgICBAZGIuVGltZXN0YW1wKDApCiAgY2F0X3Bpc29zICAgICAgICAgICAgY2F0X3Bpc29zPyAgICAgICAgICAgICAgICAgICAgICAgQHJlbGF0aW9uKGZpZWxkczogW2lkX3Bpc29dLCByZWZlcmVuY2VzOiBbaWRdLCBvbkRlbGV0ZTogUmVzdHJpY3QsIG9uVXBkYXRlOiBSZXN0cmljdCwgbWFwOiAiY2F0X2VxdWlwb3NfaWRfcGlzb19mb3JlaWduIikKICBjYXRfdWJpY2FjaW9uZXMgICAgICBjYXRfdWJpY2FjaW9uZXM/ICAgICAgICAgICAgICAgICBAcmVsYXRpb24oZmllbGRzOiBbaWRfdWJpY2FjaW9uXSwgcmVmZXJlbmNlczogW2lkX3ViaWNhY2lvbl0sIG9uRGVsZXRlOiBSZXN0cmljdCwgb25VcGRhdGU6IFJlc3RyaWN0LCBtYXA6ICJjYXRfZXF1aXBvc19pZF91YmljYWNpb25fZm9yZWlnbiIpCiAgcmNmX2thcmRleCAgICAgICAgICAgcmNmX2thcmRleFtdCiAgcmNmX3Jlc2d1YXJkbyAgICAgICAgcmNmX3Jlc2d1YXJkb1tdCiAgdGljX2VxdWlwb3NfY29tcHV0byAgdGljX2VxdWlwb3NfY29tcHV0b1tdCgogIEBAaW5kZXgoW2lkX3Bpc29dLCBtYXA6ICJjYXRfZXF1aXBvc19pZF9waXNvX2ZvcmVpZ24iKQogIEBAaW5kZXgoW2lkX3ViaWNhY2lvbl0sIG1hcDogImNhdF9lcXVpcG9zX2lkX3ViaWNhY2lvbl9mb3JlaWduIikKfQoKbW9kZWwgY2F0X2VzY29sYXJpZGFkZXMgewogIGlkICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSW50ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBpZCBAZGVmYXVsdChhdXRvaW5jcmVtZW50KCkpIEBkYi5VbnNpZ25lZEludAogIG5vbWJyZSAgICAgICAgICAgICAgICAgICAgICAgICAgU3RyaW5nCiAgY3JlYXRlZF9hdCAgICAgICAgICAgICAgICAgICAgICBEYXRlVGltZT8gICAgICAgICAgICAgICAgICAgICAgICAgQGRiLlRpbWVzdGFtcCgwKQogIHVwZGF0ZWRfYXQgICAgICAgICAgICAgICAgICAgICAgRGF0ZVRpbWU/ICAgICAgICAgICAgICAgICAgICAgICAgIEBkYi5UaW1lc3RhbXAoMCkKICBkZWxldGVkX2F0ICAgICAgICAgICAgICAgICAgICAgIERhdGVUaW1lPyAgICAgICAgICAgICAgICAgICAgICAgICBAZGIuVGltZXN0YW1wKDApCiAgY21wX2VkdWNhY2lvbiAgICAgICAgICAgICAgICAgICBjbXBfZWR1Y2FjaW9uW10KICBjbXBfcGVyc29uYSAgICAgICAgICAgICAgICAgICAgIGNtcF9wZXJzb25hW10KICBocHpfcGFjaWVudGVfZXN0X3NvY2lvZWNvbm9taWNvIGhwel9wYWNpZW50ZV9lc3Rfc29jaW9lY29ub21pY29bXQp9Cgptb2RlbCBjYXRfZXNjdWVsYXMgewogIGlkICAgICAgICAgICAgICAgICBJbnQgICAgICAgQGlkIEBkZWZhdWx0KGF1dG9pbmNyZW1lbnQoKSkgQGRiLlVuc2lnbmVkSW50CiAgY2N0ICAgICAgICAgICAgICAgIFN0cmluZwogIGlkX3R1cm5vICAgICAgICAgICBTdHJpbmc/CiAgdHVybm8gICAgICAgICAgICAgIFN0cmluZz8KICBub21icmUgICAgICAgICAgICAgU3RyaW5nCiAgdGlwb19lZHVjYXRpdm8gICAgIFN0cmluZz8KICBuaXZlbF9lZHVjYXRpdm8gICAgU3RyaW5nPwogIHNlcnZpY2lvX2VkdWNhdGl2byBTdHJpbmc/CiAgbm9tYnJlX2NvbnRyb2wgICAgIFN0cmluZz8KICB0aXBvX3Nvc3RlbmltaWVudG8gU3RyaW5nPwogIGN2ZV9lbnRpZGFkICAgICAgICBTdHJpbmc/CiAgZW50aWRhZCAgICAgICAgICAgIFN0cmluZz8KICBjdmVfbXVuaWNpcGlvICAgICAgU3RyaW5nPwogIG11bmljaXBpbyAgICAgICAgICBTdHJpbmc/CiAgY3ZlX2xvY2FsaWRhZCAgICAgIFN0cmluZz8KICBsb2NhbGlkYWQgICAgICAgICAgU3RyaW5nPwogIGRvbWljaWxpbyAgICAgICAgICBTdHJpbmc/CiAgbm9fZXh0ZXJpb3IgICAgICAgIFN0cmluZz8KICBlbnRyZV9jYWxsZSAgICAgICAgU3RyaW5nPwogIHlfY2FsbGUgICAgICAgICAgICBTdHJpbmc/CiAgY2FsbGVfcG9zdGVyaW9yICAgIFN0cmluZz8KICBjdmVfY29sb25pYSAgICAgICAgU3RyaW5nPwogIGNvbG9uaWEgICAgICAgICAgICBTdHJpbmc/CiAgY3AgICAgICAgICAgICAgICAgIFN0cmluZz8KICBsYWRhICAgICAgICAgICAgICAgU3RyaW5nPwogIHRlbGVmb25vICAgICAgICAgICBTdHJpbmc/CiAgZXh0ICAgICAgICAgICAgICAgIFN0cmluZz8KICBzaXRpb193ZWIgICAgICAgICAgU3RyaW5nPwogIGNyZWF0ZWRfYXQgICAgICAgICBEYXRlVGltZT8gQGRiLlRpbWVzdGFtcCgwKQogIHVwZGF0ZWRfYXQgICAgICAgICBEYXRlVGltZT8gQGRiLlRpbWVzdGFtcCgwKQogIGRlbGV0ZWRfYXQgICAgICAgICBEYXRlVGltZT8gQGRiLlRpbWVzdGFtcCgwKQp9Cgptb2RlbCBjYXRfZXNwZWNpYWxpZGFkZXMgewogIGlkICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEludCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQGlkIEBkZWZhdWx0KGF1dG9pbmNyZW1lbnQoKSkgQGRiLlVuc2lnbmVkSW50CiAgbm9tYnJlICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU3RyaW5nCiAgZXN0YXR1cyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQm9vbGVhbgogIHRpcG8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFN0cmluZz8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQGRiLlZhckNoYXIoMTAwKQogIGN2ZV9zaW5iYSAgICAgICAgICAgICAgICAgICAgICAgICAgIFN0cmluZz8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQGRiLlZhckNoYXIoMTAwKQogIGVzcF9zaW5iYSAgICAgICAgICAgICAgICAgICAgICAgICAgIFN0cmluZz8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQGRiLlZhckNoYXIoMTAwKQogIGlkX3NlcnZpY2lvICAgICAgICAgICAgICAgICAgICAgICAgIEludCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQGRiLlVuc2lnbmVkSW50CiAgY3JlYXRlZF9hdCAgICAgICAgICAgICAgICAgICAgICAgICAgRGF0ZVRpbWU/ICAgICAgICAgICAgICAgICAgICAgICAgICAgICBAZGIuVGltZXN0YW1wKDApCiAgdXBkYXRlZF9hdCAgICAgICAgICAgICAgICAgICAgICAgICAgRGF0ZVRpbWU/ICAgICAgICAgICAgICAgICAgICAgICAgICAgICBAZGIuVGltZXN0YW1wKDApCiAgZGVsZXRlZF9hdCAgICAgICAgICAgICAgICAgICAgICAgICAgRGF0ZVRpbWU/ICAgICAgICAgICAgICAgICAgICAgICAgICAgICBAZGIuVGltZXN0YW1wKDApCiAgY2F0X2NvbnN1bHRhX2hvcmFyaW9zICAgICAgICAgICAgICAgY2F0X2NvbnN1bHRhX2hvcmFyaW9zW10KICBjYXRfc2VydmljaW9zICAgICAgICAgICAgICAgICAgICAgICBjYXRfc2VydmljaW9zICAgICAgICAgICAgICAgICAgICAgICAgIEByZWxhdGlvbihmaWVsZHM6IFtpZF9zZXJ2aWNpb10sIHJlZmVyZW5jZXM6IFtpZF0sIG9uVXBkYXRlOiBSZXN0cmljdCwgbWFwOiAiY2F0X2VzcGVjaWFsaWRhZGVzX2lkX3NlcnZpY2lvX2ZvcmVpZ24iKQogIGhwel9jYW1hX2hpc3RvcmlhbCAgICAgICAgICAgICAgICAgIGhwel9jYW1hX2hpc3RvcmlhbFtdCiAgaHB6X2NpdGFzX2hpc3RvcmlhbCAgICAgICAgICAgICAgICAgaHB6X2NpdGFzX2hpc3RvcmlhbFtdICAgICAgICAgICAgICAgICBAaWdub3JlCiAgaHB6X2luZ3Jlc29fY29uc3VsdGEgICAgICAgICAgICAgICAgaHB6X2luZ3Jlc29fY29uc3VsdGFbXQogIGhwel9pbmdyZXNvX2hvc3BpdGFsYXJpbyAgICAgICAgICAgIGhwel9pbmdyZXNvX2hvc3BpdGFsYXJpb1tdCiAgaHB6X3BhY2llbnRlX2F1eGlsaWFyZXNfZGlhZ25vc3RpY28gaHB6X3BhY2llbnRlX2F1eGlsaWFyZXNfZGlhZ25vc3RpY29bXQogIHJjaF9lbXBsZWFkb19lc3BlY2lhbGlkYWQgICAgICAgICAgIHJjaF9lbXBsZWFkb19lc3BlY2lhbGlkYWRbXQoKICBAQGluZGV4KFtpZF9zZXJ2aWNpb10sIG1hcDogImNhdF9lc3BlY2lhbGlkYWRlc19pZF9zZXJ2aWNpb19mb3JlaWduIikKfQoKbW9kZWwgY2F0X2VzdGFkb19jaXZpbCB7CiAgaWQgICAgICAgICAgSW50ICAgICAgICAgICBAaWQgQGRlZmF1bHQoYXV0b2luY3JlbWVudCgpKSBAZGIuVW5zaWduZWRJbnQKICBub21icmUgICAgICBTdHJpbmcKICBjcmVhdGVkX2F0ICBEYXRlVGltZT8gICAgIEBkYi5UaW1lc3RhbXAoMCkKICB1cGRhdGVkX2F0ICBEYXRlVGltZT8gICAgIEBkYi5UaW1lc3RhbXAoMCkKICBkZWxldGVkX2F0ICBEYXRlVGltZT8gICAgIEBkYi5UaW1lc3RhbXAoMCkKICBjbXBfcGVyc29uYSBjbXBfcGVyc29uYVtdCn0KCm1vZGVsIGNhdF9lc3RhZG9zIHsKICBpZCAgICAgICAgICAgICBJbnQgICAgICAgICAgICAgIEBpZCBAZGVmYXVsdChhdXRvaW5jcmVtZW50KCkpIEBkYi5VbnNpZ25lZEludAogIGNsYXZlICAgICAgICAgIFN0cmluZyAgICAgICAgICAgQGRiLkNoYXIoMikKICBhYnJldmlhdHVyYSAgICBTdHJpbmcgICAgICAgICAgIEB1bmlxdWUobWFwOiAiY2F0X2VzdGFkb3NfYWJyZXZpYXR1cmFfdW5pcXVlIikgQGRiLlZhckNoYXIoMTApCiAgbm9tYnJlICAgICAgICAgU3RyaW5nCiAgcmVuYXBvICAgICAgICAgU3RyaW5nICAgICAgICAgICBAZGIuQ2hhcigzKQogIGNyZWF0ZWRfYXQgICAgIERhdGVUaW1lPyAgICAgICAgQGRiLlRpbWVzdGFtcCgwKQogIHVwZGF0ZWRfYXQgICAgIERhdGVUaW1lPyAgICAgICAgQGRiLlRpbWVzdGFtcCgwKQogIGRlbGV0ZWRfYXQgICAgIERhdGVUaW1lPyAgICAgICAgQGRiLlRpbWVzdGFtcCgwKQogIGNtcF9kb21pY2lsaW9zIGNtcF9kb21pY2lsaW9zW10KICBjbXBfZmFtaWxpYXJlcyBjbXBfZmFtaWxpYXJlc1tdCn0KCm1vZGVsIGNhdF9ldmVudG9fYWR2ZXJzb19mYWN0b3Jlc19pbmNpZGVudGUgewogIGlkICAgICAgICAgQmlnSW50ICAgIEBpZCBAZGVmYXVsdChhdXRvaW5jcmVtZW50KCkpIEBkYi5VbnNpZ25lZEJpZ0ludAogIG5vbWJyZSAgICAgU3RyaW5nCiAgY3JlYXRlZF9hdCBEYXRlVGltZT8gQGRiLlRpbWVzdGFtcCgwKQogIHVwZGF0ZWRfYXQgRGF0ZVRpbWU/IEBkYi5UaW1lc3RhbXAoMCkKfQoKbW9kZWwgY2F0X2V2ZW50b19hZHZlcnNvX3RpcG9faW5jaWRlbnRlIHsKICBpZCAgICAgICAgIEJpZ0ludCAgICBAaWQgQGRlZmF1bHQoYXV0b2luY3JlbWVudCgpKSBAZGIuVW5zaWduZWRCaWdJbnQKICBub21icmUgICAgIFN0cmluZwogIHRpcG8gICAgICAgU3RyaW5nCiAgY3JlYXRlZF9hdCBEYXRlVGltZT8gQGRiLlRpbWVzdGFtcCgwKQogIHVwZGF0ZWRfYXQgRGF0ZVRpbWU/IEBkYi5UaW1lc3RhbXAoMCkKfQoKbW9kZWwgY2F0X2V4dGVuc2lvbmVzIHsKICBpZCAgICAgICAgICAgSW50ICAgICAgICAgICAgQGlkIEBkZWZhdWx0KGF1dG9pbmNyZW1lbnQoKSkgQGRiLlVuc2lnbmVkSW50CiAgZXh0ZW5zaW9uICAgIEludAogIG5vbWJyZSAgICAgICBTdHJpbmcKICBwaXNvICAgICAgICAgU3RyaW5nPyAgICAgICAgQGRiLlZhckNoYXIoNTApCiAgamVmZSAgICAgICAgIFN0cmluZz8KICBzZWNyZXRhcmlhcyAgU3RyaW5nPwogIGNyZWF0ZWRfYXQgICBEYXRlVGltZT8gICAgICBAZGIuVGltZXN0YW1wKDApCiAgdXBkYXRlZF9hdCAgIERhdGVUaW1lPyAgICAgIEBkYi5UaW1lc3RhbXAoMCkKICBkZWxldGVkX2F0ICAgRGF0ZVRpbWU/ICAgICAgQGRiLlRpbWVzdGFtcCgwKQogIHJjaF9wZXJtaXNvcyByY2hfcGVybWlzb3NbXQogIHNnbF90YXJqZXRvbiBzZ2xfdGFyamV0b25bXQp9Cgptb2RlbCBjYXRfZmVzdGl2b3MgewogIGlkICAgICAgICAgIEJpZ0ludCAgICBAaWQgQGRlZmF1bHQoYXV0b2luY3JlbWVudCgpKSBAZGIuVW5zaWduZWRCaWdJbnQKICBkZXNjcmlwY2lvbiBTdHJpbmcKICBmZWNoYSAgICAgICBEYXRlVGltZSAgQGRiLkRhdGUKICBjcmVhdGVkX2F0ICBEYXRlVGltZT8gQGRiLlRpbWVzdGFtcCgwKQogIHVwZGF0ZWRfYXQgIERhdGVUaW1lPyBAZGIuVGltZXN0YW1wKDApCiAgZGVsZXRlZF9hdCAgRGF0ZVRpbWU/IEBkYi5UaW1lc3RhbXAoMCkKfQoKbW9kZWwgY2F0X2Zvcm1hdG9fcHJlZ3VudGFzIHsKICBpZCAgICAgICAgICAgICAgICAgICBCaWdJbnQgICAgICAgICAgICAgICAgIEBpZCBAZGVmYXVsdChhdXRvaW5jcmVtZW50KCkpIEBkYi5VbnNpZ25lZEJpZ0ludAogIG5vbWJyZSAgICAgICAgICAgICAgIFN0cmluZyAgICAgICAgICAgICAgICAgQGRiLlZhckNoYXIoMjUwKQogIHNsdWcgICAgICAgICAgICAgICAgIFN0cmluZyAgICAgICAgICAgICAgICAgQGRiLlZhckNoYXIoMjUwKQogIG9yZGVuICAgICAgICAgICAgICAgIEludCAgICAgICAgICAgICAgICAgICAgQGRlZmF1bHQoMCkKICByZWxhY2lvbiAgICAgICAgICAgICBJbnQgICAgICAgICAgICAgICAgICAgIEBkZWZhdWx0KDApCiAgZm9ybWF0byAgICAgICAgICAgICAgU3RyaW5nICAgICAgICAgICAgICAgICBAZGIuVmFyQ2hhcig1MCkKICB0aXBvICAgICAgICAgICAgICAgICBTdHJpbmcgICAgICAgICAgICAgICAgIEBkYi5WYXJDaGFyKDUwKQogIHJlc3B1ZXN0YXMgICAgICAgICAgIFN0cmluZz8gICAgICAgICAgICAgICAgQGRiLlZhckNoYXIoNTApCiAgY2F0ZWdvcmlhICAgICAgICAgICAgU3RyaW5nPyAgICAgICAgICAgICAgICBAZGIuVmFyQ2hhcig1MCkKICBkZWZhdWx0ICAgICAgICAgICAgICBJbnQ/CiAgdmFsaWRhdGlvbiAgICAgICAgICAgU3RyaW5nICAgICAgICAgICAgICAgICBAZGIuVmFyQ2hhcigyNTApCiAgbWFzayAgICAgICAgICAgICAgICAgU3RyaW5nICAgICAgICAgICAgICAgICBAZGIuVmFyQ2hhcigyNTApCiAgc2V4byAgICAgICAgICAgICAgICAgU3RyaW5nICAgICAgICAgICAgICAgICBAZGVmYXVsdCgiIikgQGRiLkNoYXIoMSkKICBjcmVhdGVkX2F0ICAgICAgICAgICBEYXRlVGltZT8gICAgICAgICAgICAgIEBkYi5UaW1lc3RhbXAoMCkKICB1cGRhdGVkX2F0ICAgICAgICAgICBEYXRlVGltZT8gICAgICAgICAgICAgIEBkYi5UaW1lc3RhbXAoMCkKICBkZWxldGVkX2F0ICAgICAgICAgICBEYXRlVGltZT8gICAgICAgICAgICAgIEBkYi5UaW1lc3RhbXAoMCkKICBocHpfZm9ybWF0b3NfbWVkaWNvcyBocHpfZm9ybWF0b3NfbWVkaWNvc1tdCn0KCm1vZGVsIGNhdF9mb3JtYXRvX3Jlc3B1ZXN0YXMgewogIGlkICAgICAgICAgICAgICAgICAgIEJpZ0ludCAgICAgICAgICAgICAgICAgQGlkIEBkZWZhdWx0KGF1dG9pbmNyZW1lbnQoKSkgQGRiLlVuc2lnbmVkQmlnSW50CiAgbm9tYnJlICAgICAgICAgICAgICAgU3RyaW5nICAgICAgICAgICAgICAgICBAZGIuVmFyQ2hhcigyNTApCiAgY2F0ZWdvcmlhICAgICAgICAgICAgU3RyaW5nICAgICAgICAgICAgICAgICBAZGIuVmFyQ2hhcigyNTApCiAgZm9ybWF0byAgICAgICAgICAgICAgU3RyaW5nICAgICAgICAgICAgICAgICBAZGIuVmFyQ2hhcigxMCkKICBzZWxlY3RlZCAgICAgICAgICAgICBJbnQgICAgICAgICAgICAgICAgICAgIEBkZWZhdWx0KDApIEBkYi5UaW55SW50CiAgY3JlYXRlZF9hdCAgICAgICAgICAgRGF0ZVRpbWU/ICAgICAgICAgICAgICBAZGIuVGltZXN0YW1wKDApCiAgdXBkYXRlZF9hdCAgICAgICAgICAgRGF0ZVRpbWU/ICAgICAgICAgICAgICBAZGIuVGltZXN0YW1wKDApCiAgZGVsZXRlZF9hdCAgICAgICAgICAgRGF0ZVRpbWU/ICAgICAgICAgICAgICBAZGIuVGltZXN0YW1wKDApCiAgaHB6X2Zvcm1hdG9zX21lZGljb3MgaHB6X2Zvcm1hdG9zX21lZGljb3NbXQp9Cgptb2RlbCBjYXRfZnVlbnRlc19maW5hbmNpYW1pZW50byB7CiAgaWQgICAgICAgICAgICBJbnQgICAgICAgICAgICAgQGlkIEBkZWZhdWx0KGF1dG9pbmNyZW1lbnQoKSkgQGRiLlVuc2lnbmVkSW50CiAgbm9tYnJlICAgICAgICBTdHJpbmcKICBkZWxldGVkX2F0ICAgIERhdGVUaW1lPyAgICAgICBAZGIuVGltZXN0YW1wKDApCiAgY3JlYXRlZF9hdCAgICBEYXRlVGltZT8gICAgICAgQGRiLlRpbWVzdGFtcCgwKQogIHVwZGF0ZWRfYXQgICAgRGF0ZVRpbWU/ICAgICAgIEBkYi5UaW1lc3RhbXAoMCkKICByY2hfZW1wbGVhZG9zIHJjaF9lbXBsZWFkb3NbXQp9Cgptb2RlbCBjYXRfZ3VhcmRpYXMgewogIGlkICAgICAgICAgSW50ICAgICAgIEBpZCBAZGVmYXVsdChhdXRvaW5jcmVtZW50KCkpIEBkYi5VbnNpZ25lZEludAogIHBvc2ljaW9uICAgSW50CiAgbm9tYnJlICAgICBTdHJpbmcKICBhY3Rpdm8gICAgIEJvb2xlYW4gICBAZGVmYXVsdCh0cnVlKQogIGNyZWF0ZWRfYXQgRGF0ZVRpbWU/IEBkYi5UaW1lc3RhbXAoMCkKICB1cGRhdGVkX2F0IERhdGVUaW1lPyBAZGIuVGltZXN0YW1wKDApCiAgZGVsZXRlZF9hdCBEYXRlVGltZT8gQGRiLlRpbWVzdGFtcCgwKQp9Cgptb2RlbCBjYXRfaGlzdG9yaWFfY2xpbmljYSB7CiAgaWQgICAgICAgICBCaWdJbnQgICAgQGlkIEBkZWZhdWx0KGF1dG9pbmNyZW1lbnQoKSkgQGRiLlVuc2lnbmVkQmlnSW50CiAgbm9tYnJlICAgICBTdHJpbmcgICAgQGRiLlZhckNoYXIoMjUwKQogIHNlY2Npb24gICAgU3RyaW5nICAgIEBkYi5WYXJDaGFyKDEwMCkKICBjcmVhdGVkX2F0IERhdGVUaW1lPyBAZGIuVGltZXN0YW1wKDApCiAgdXBkYXRlZF9hdCBEYXRlVGltZT8gQGRiLlRpbWVzdGFtcCgwKQogIGRlbGV0ZWRfYXQgRGF0ZVRpbWU/IEBkYi5UaW1lc3RhbXAoMCkKfQoKbW9kZWwgY2F0X2lhYXNfZ2VybWVuZXMgewogIGlkICAgICAgICAgICAgICAgICAgICAgICAgSW50ICAgICAgICAgICAgICAgICAgICAgICAgIEBpZCBAZGVmYXVsdChhdXRvaW5jcmVtZW50KCkpIEBkYi5VbnNpZ25lZEludAogIGNsYXZlICAgICAgICAgICAgICAgICAgICAgU3RyaW5nICAgICAgICAgICAgICAgICAgICAgIEBkYi5DaGFyKDQpCiAgbm9tYnJlICAgICAgICAgICAgICAgICAgICBTdHJpbmcKICBjcmVhdGVkX2F0ICAgICAgICAgICAgICAgIERhdGVUaW1lPyAgICAgICAgICAgICAgICAgICBAZGIuVGltZXN0YW1wKDApCiAgdXBkYXRlZF9hdCAgICAgICAgICAgICAgICBEYXRlVGltZT8gICAgICAgICAgICAgICAgICAgQGRiLlRpbWVzdGFtcCgwKQogIGRlbGV0ZWRfYXQgICAgICAgICAgICAgICAgRGF0ZVRpbWU/ICAgICAgICAgICAgICAgICAgIEBkYi5UaW1lc3RhbXAoMCkKICBocHpfaW5ncmVzb19lcGlkZW1pb19pYWFzIGhwel9pbmdyZXNvX2VwaWRlbWlvX2lhYXNbXQp9Cgptb2RlbCBjYXRfaWFhc19zaXRpb3NfaW5mZWNjaW9uIHsKICBpZCAgICAgICAgICAgICAgICAgICAgICAgIEludCAgICAgICAgICAgICAgICAgICAgICAgICBAaWQgQGRlZmF1bHQoYXV0b2luY3JlbWVudCgpKSBAZGIuVW5zaWduZWRJbnQKICBjbGF2ZSAgICAgICAgICAgICAgICAgICAgIFN0cmluZyAgICAgICAgICAgICAgICAgICAgICBAZGIuQ2hhcig0KQogIG5vbWJyZSAgICAgICAgICAgICAgICAgICAgU3RyaW5nCiAgY3JlYXRlZF9hdCAgICAgICAgICAgICAgICBEYXRlVGltZT8gICAgICAgICAgICAgICAgICAgQGRiLlRpbWVzdGFtcCgwKQogIHVwZGF0ZWRfYXQgICAgICAgICAgICAgICAgRGF0ZVRpbWU/ICAgICAgICAgICAgICAgICAgIEBkYi5UaW1lc3RhbXAoMCkKICBkZWxldGVkX2F0ICAgICAgICAgICAgICAgIERhdGVUaW1lPyAgICAgICAgICAgICAgICAgICBAZGIuVGltZXN0YW1wKDApCiAgaHB6X2luZ3Jlc29fZXBpZGVtaW9faWFhcyBocHpfaW5ncmVzb19lcGlkZW1pb19pYWFzW10KfQoKbW9kZWwgY2F0X2xvY2FsaWRhZGVzIHsKICBpZCAgICAgICAgICAgICBJbnQgICAgICAgICAgICAgIEBpZCBAZGVmYXVsdChhdXRvaW5jcmVtZW50KCkpIEBkYi5VbnNpZ25lZEludAogIGNsYXZlICAgICAgICAgIFN0cmluZyAgICAgICAgICAgQGRiLkNoYXIoNCkKICBub21icmUgICAgICAgICBTdHJpbmcgICAgICAgICAgIEBkYi5WYXJDaGFyKDE1MCkKICBpZF9lc3RhZG8gICAgICBTdHJpbmcgICAgICAgICAgIEBkYi5DaGFyKDIpCiAgaWRfbXVuaWNpcGlvICAgU3RyaW5nICAgICAgICAgICBAZGIuQ2hhcig1KQogIGNyZWF0ZWRfYXQgICAgIERhdGVUaW1lPyAgICAgICAgQGRiLlRpbWVzdGFtcCgwKQogIHVwZGF0ZWRfYXQgICAgIERhdGVUaW1lPyAgICAgICAgQGRiLlRpbWVzdGFtcCgwKQogIGRlbGV0ZWRfYXQgICAgIERhdGVUaW1lPyAgICAgICAgQGRiLlRpbWVzdGFtcCgwKQogIGNtcF9kb21pY2lsaW9zIGNtcF9kb21pY2lsaW9zW10KICBjbXBfZmFtaWxpYXJlcyBjbXBfZmFtaWxpYXJlc1tdCn0KCm1vZGVsIGNhdF9tYXJjYXMgewogIGlkICAgICAgICAgSW50ICAgICAgIEBpZCBAZGVmYXVsdChhdXRvaW5jcmVtZW50KCkpIEBkYi5VbnNpZ25lZEludAogIG5vbWJyZSAgICAgU3RyaW5nCiAgZXN0YXR1cyAgICBCb29sZWFuICAgQGRlZmF1bHQodHJ1ZSkKICBjcmVhdGVkX2F0IERhdGVUaW1lPyBAZGIuVGltZXN0YW1wKDApCiAgdXBkYXRlZF9hdCBEYXRlVGltZT8gQGRiLlRpbWVzdGFtcCgwKQogIGRlbGV0ZWRfYXQgRGF0ZVRpbWU/IEBkYi5UaW1lc3RhbXAoMCkKfQoKbW9kZWwgY2F0X21lZGljYW1lbnRvX2Rvc2lzIHsKICBpZCAgICAgICAgICAgICAgICAgICAgICAgICAgICBCaWdJbnQgICAgICAgICAgICAgICAgICAgICAgICAgIEBpZCBAZGVmYXVsdChhdXRvaW5jcmVtZW50KCkpIEBkYi5VbnNpZ25lZEJpZ0ludAogIGNsYXZlICAgICAgICAgICAgICAgICAgICAgICAgIFN0cmluZyAgICAgICAgICAgICAgICAgICAgICAgICAgQGRiLlZhckNoYXIoMTUpCiAgbm9tYnJlICAgICAgICAgICAgICAgICAgICAgICAgU3RyaW5nICAgICAgICAgICAgICAgICAgICAgICAgICBAZGIuVmFyQ2hhcigyNTApCiAgY3JlYXRlZF9hdCAgICAgICAgICAgICAgICAgICAgRGF0ZVRpbWU/ICAgICAgICAgICAgICAgICAgICAgICBAZGIuVGltZXN0YW1wKDApCiAgdXBkYXRlZF9hdCAgICAgICAgICAgICAgICAgICAgRGF0ZVRpbWU/ICAgICAgICAgICAgICAgICAgICAgICBAZGIuVGltZXN0YW1wKDApCiAgZGVsZXRlZF9hdCAgICAgICAgICAgICAgICAgICAgRGF0ZVRpbWU/ICAgICAgICAgICAgICAgICAgICAgICBAZGIuVGltZXN0YW1wKDApCiAgaHB6X2luZGljYWNpb25fbWVkaWNhbWVudG9zICAgaHB6X2luZGljYWNpb25fbWVkaWNhbWVudG9zW10KICBocHpfaW5kaWNhY2lvbmVzX21lZGljYW1lbnRvcyBocHpfaW5kaWNhY2lvbmVzX21lZGljYW1lbnRvc1tdIEBpZ25vcmUKfQoKbW9kZWwgY2F0X21lZGljYW1lbnRvX2hvcmFyaW9zIHsKICBpZCAgICAgICAgICAgICAgICAgICAgICAgICAgICBCaWdJbnQgICAgICAgICAgICAgICAgICAgICAgICAgIEBpZCBAZGVmYXVsdChhdXRvaW5jcmVtZW50KCkpIEBkYi5VbnNpZ25lZEJpZ0ludAogIGNsYXZlICAgICAgICAgICAgICAgICAgICAgICAgIFN0cmluZyAgICAgICAgICAgICAgICAgICAgICAgICAgQGRiLlZhckNoYXIoMTUpCiAgbm9tYnJlICAgICAgICAgICAgICAgICAgICAgICAgU3RyaW5nICAgICAgICAgICAgICAgICAgICAgICAgICBAZGIuVmFyQ2hhcigyNTApCiAgY3JlYXRlZF9hdCAgICAgICAgICAgICAgICAgICAgRGF0ZVRpbWU/ICAgICAgICAgICAgICAgICAgICAgICBAZGIuVGltZXN0YW1wKDApCiAgdXBkYXRlZF9hdCAgICAgICAgICAgICAgICAgICAgRGF0ZVRpbWU/ICAgICAgICAgICAgICAgICAgICAgICBAZGIuVGltZXN0YW1wKDApCiAgZGVsZXRlZF9hdCAgICAgICAgICAgICAgICAgICAgRGF0ZVRpbWU/ICAgICAgICAgICAgICAgICAgICAgICBAZGIuVGltZXN0YW1wKDApCiAgaHB6X2luZGljYWNpb25fbWVkaWNhbWVudG9zICAgaHB6X2luZGljYWNpb25fbWVkaWNhbWVudG9zW10KICBocHpfaW5kaWNhY2lvbmVzX21lZGljYW1lbnRvcyBocHpfaW5kaWNhY2lvbmVzX21lZGljYW1lbnRvc1tdIEBpZ25vcmUKfQoKbW9kZWwgY2F0X21lZGljYW1lbnRvX2ludGVydmFsb3MgewogIGlkICAgICAgICAgICAgICAgICAgICAgICAgICAgIEJpZ0ludCAgICAgICAgICAgICAgICAgICAgICAgICAgQGlkIEBkZWZhdWx0KGF1dG9pbmNyZW1lbnQoKSkgQGRiLlVuc2lnbmVkQmlnSW50CiAgY2xhdmUgICAgICAgICAgICAgICAgICAgICAgICAgU3RyaW5nICAgICAgICAgICAgICAgICAgICAgICAgICBAZGIuVmFyQ2hhcigxNSkKICBub21icmUgICAgICAgICAgICAgICAgICAgICAgICBTdHJpbmcgICAgICAgICAgICAgICAgICAgICAgICAgIEBkYi5WYXJDaGFyKDI1MCkKICBjcmVhdGVkX2F0ICAgICAgICAgICAgICAgICAgICBEYXRlVGltZT8gICAgICAgICAgICAgICAgICAgICAgIEBkYi5UaW1lc3RhbXAoMCkKICB1cGRhdGVkX2F0ICAgICAgICAgICAgICAgICAgICBEYXRlVGltZT8gICAgICAgICAgICAgICAgICAgICAgIEBkYi5UaW1lc3RhbXAoMCkKICBkZWxldGVkX2F0ICAgICAgICAgICAgICAgICAgICBEYXRlVGltZT8gICAgICAgICAgICAgICAgICAgICAgIEBkYi5UaW1lc3RhbXAoMCkKICBocHpfaW5kaWNhY2lvbl9tZWRpY2FtZW50b3MgICBocHpfaW5kaWNhY2lvbl9tZWRpY2FtZW50b3NbXQogIGhwel9pbmRpY2FjaW9uZXNfbWVkaWNhbWVudG9zIGhwel9pbmRpY2FjaW9uZXNfbWVkaWNhbWVudG9zW10gQGlnbm9yZQp9Cgptb2RlbCBjYXRfbWVkaWNhbWVudG9fdmlhcyB7CiAgaWQgICAgICAgICAgICAgICAgICAgICAgICAgICAgQmlnSW50ICAgICAgICAgICAgICAgICAgICAgICAgICBAaWQgQGRlZmF1bHQoYXV0b2luY3JlbWVudCgpKSBAZGIuVW5zaWduZWRCaWdJbnQKICBjbGF2ZSAgICAgICAgICAgICAgICAgICAgICAgICBTdHJpbmcgICAgICAgICAgICAgICAgICAgICAgICAgIEBkYi5WYXJDaGFyKDE1KQogIG5vbWJyZSAgICAgICAgICAgICAgICAgICAgICAgIFN0cmluZyAgICAgICAgICAgICAgICAgICAgICAgICAgQGRiLlZhckNoYXIoMjUwKQogIGNyZWF0ZWRfYXQgICAgICAgICAgICAgICAgICAgIERhdGVUaW1lPyAgICAgICAgICAgICAgICAgICAgICAgQGRiLlRpbWVzdGFtcCgwKQogIHVwZGF0ZWRfYXQgICAgICAgICAgICAgICAgICAgIERhdGVUaW1lPyAgICAgICAgICAgICAgICAgICAgICAgQGRiLlRpbWVzdGFtcCgwKQogIGRlbGV0ZWRfYXQgICAgICAgICAgICAgICAgICAgIERhdGVUaW1lPyAgICAgICAgICAgICAgICAgICAgICAgQGRiLlRpbWVzdGFtcCgwKQogIGhwel9pbmRpY2FjaW9uX21lZGljYW1lbnRvcyAgIGhwel9pbmRpY2FjaW9uX21lZGljYW1lbnRvc1tdCiAgaHB6X2luZGljYWNpb25lc19tZWRpY2FtZW50b3MgaHB6X2luZGljYWNpb25lc19tZWRpY2FtZW50b3NbXSBAaWdub3JlCn0KCm1vZGVsIGNhdF9tb2RlbG9zIHsKICBpZCAgICAgICAgIEludCAgICAgICBAaWQgQGRlZmF1bHQoYXV0b2luY3JlbWVudCgpKSBAZGIuVW5zaWduZWRJbnQKICBub21icmUgICAgIFN0cmluZwogIGVzdGF0dXMgICAgQm9vbGVhbiAgIEBkZWZhdWx0KHRydWUpCiAgY3JlYXRlZF9hdCBEYXRlVGltZT8gQGRiLlRpbWVzdGFtcCgwKQogIHVwZGF0ZWRfYXQgRGF0ZVRpbWU/IEBkYi5UaW1lc3RhbXAoMCkKICBkZWxldGVkX2F0IERhdGVUaW1lPyBAZGIuVGltZXN0YW1wKDApCn0KCm1vZGVsIGNhdF9tb3Rpdm9zX2JhamEgewogIGlkICAgICAgICAgICAgSW50ICAgICAgICAgICAgIEBpZCBAZGVmYXVsdChhdXRvaW5jcmVtZW50KCkpIEBkYi5VbnNpZ25lZEludAogIG5vbWJyZSAgICAgICAgU3RyaW5nCiAgY3JlYXRlZF9hdCAgICBEYXRlVGltZT8gICAgICAgQGRiLlRpbWVzdGFtcCgwKQogIHVwZGF0ZWRfYXQgICAgRGF0ZVRpbWU/ICAgICAgIEBkYi5UaW1lc3RhbXAoMCkKICBkZWxldGVkX2F0ICAgIERhdGVUaW1lPyAgICAgICBAZGIuVGltZXN0YW1wKDApCiAgcmNoX2VtcGxlYWRvcyByY2hfZW1wbGVhZG9zW10KfQoKbW9kZWwgY2F0X211bmljaXBpb3MgewogIGlkICAgICAgICAgICAgICAgICAgIEludCAgICAgICAgICAgICAgICAgICAgQGlkIEBkZWZhdWx0KGF1dG9pbmNyZW1lbnQoKSkgQGRiLlVuc2lnbmVkSW50CiAgY2xhdmUgICAgICAgICAgICAgICAgU3RyaW5nICAgICAgICAgICAgICAgICBAZGIuQ2hhcigzKQogIG5vbWJyZSAgICAgICAgICAgICAgIFN0cmluZyAgICAgICAgICAgICAgICAgQGRiLlZhckNoYXIoMTAwKQogIGlkX2VzdGFkbyAgICAgICAgICAgIFN0cmluZyAgICAgICAgICAgICAgICAgQGRiLkNoYXIoMikKICBjcmVhdGVkX2F0ICAgICAgICAgICBEYXRlVGltZT8gICAgICAgICAgICAgIEBkYi5UaW1lc3RhbXAoMCkKICB1cGRhdGVkX2F0ICAgICAgICAgICBEYXRlVGltZT8gICAgICAgICAgICAgIEBkYi5UaW1lc3RhbXAoMCkKICBkZWxldGVkX2F0ICAgICAgICAgICBEYXRlVGltZT8gICAgICAgICAgICAgIEBkYi5UaW1lc3RhbXAoMCkKICBjYXRfY29kaWdvc19wb3N0YWxlcyBjYXRfY29kaWdvc19wb3N0YWxlc1tdCiAgY2F0X2NvbG9uaWFzICAgICAgICAgY2F0X2NvbG9uaWFzW10KICBjbXBfZG9taWNpbGlvcyAgICAgICBjbXBfZG9taWNpbGlvc1tdCiAgY21wX2ZhbWlsaWFyZXMgICAgICAgY21wX2ZhbWlsaWFyZXNbXQp9Cgptb2RlbCBjYXRfbmFjaW9uYWxpZGFkZXMgewogIGlkICAgICAgICAgIEludCAgICAgICAgICAgQGlkIEBkZWZhdWx0KGF1dG9pbmNyZW1lbnQoKSkgQGRiLlVuc2lnbmVkSW50CiAgbm9tYnJlICAgICAgU3RyaW5nCiAgY29kaWdvICAgICAgU3RyaW5nCiAgY2xhdmUgICAgICAgU3RyaW5nCiAgY3JlYXRlZF9hdCAgRGF0ZVRpbWU/ICAgICBAZGIuVGltZXN0YW1wKDApCiAgdXBkYXRlZF9hdCAgRGF0ZVRpbWU/ICAgICBAZGIuVGltZXN0YW1wKDApCiAgZGVsZXRlZF9hdCAgRGF0ZVRpbWU/ICAgICBAZGIuVGltZXN0YW1wKDApCiAgY21wX3BlcnNvbmEgY21wX3BlcnNvbmFbXQp9Cgptb2RlbCBjYXRfbmFuZGEgewogIGlkICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQmlnSW50ICAgICAgICAgICAgICAgICAgIEBpZCBAZGVmYXVsdChhdXRvaW5jcmVtZW50KCkpIEBkYi5VbnNpZ25lZEJpZ0ludAogIGN2ZV9kb21pbmlvICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQmlnSW50CiAgZG9taW5pbyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTdHJpbmcgICAgICAgICAgICAgICAgICAgQGRiLlZhckNoYXIoMjUwKQogIGN2ZV9jbGFzZSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQmlnSW50CiAgY2xhc2UgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTdHJpbmc/ICAgICAgICAgICAgICAgICAgQGRiLlZhckNoYXIoMjUwKQogIGNsYXNlX2Rlc2NyaXBjaW9uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU3RyaW5nPyAgICAgICAgICAgICAgICAgIEBkYi5WYXJDaGFyKDI1MCkKICBjb2RpZ28gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFN0cmluZyAgICAgICAgICAgICAgICAgICBAZGIuVmFyQ2hhcig1KQogIGRpYWdub3N0aWNvICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU3RyaW5nPyAgICAgICAgICAgICAgICAgIEBkYi5WYXJDaGFyKDI1MCkKICB0aXBvICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFN0cmluZz8gICAgICAgICAgICAgICAgICBAZGIuVmFyQ2hhcigyNTApCiAgdGlwb19jYWUgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTdHJpbmc/ICAgICAgICAgICAgICAgICAgQGRiLlZhckNoYXIoMjUwKQogIHJhbmdvICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU3RyaW5nPyAgICAgICAgICAgICAgICAgIEBkYi5WYXJDaGFyKDI1MCkKICBub21icmUgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFN0cmluZz8gICAgICAgICAgICAgICAgICBAZGIuVGV4dAogIGNyZWF0ZWRfYXQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRGF0ZVRpbWU/ICAgICAgICAgICAgICAgIEBkYi5UaW1lc3RhbXAoMCkKICB1cGRhdGVkX2F0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIERhdGVUaW1lPyAgICAgICAgICAgICAgICBAZGIuVGltZXN0YW1wKDApCiAgZGVsZXRlZF9hdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBEYXRlVGltZT8gICAgICAgICAgICAgICAgQGRiLlRpbWVzdGFtcCgwKQogIGhwel9lbmZfaW50ZXJ2ZW5jaW9uZXNfaHB6X2VuZl9pbnRlcnZlbmNpb25lc19pZF9mYWN0b3JUb2NhdF9uYW5kYSAgaHB6X2VuZl9pbnRlcnZlbmNpb25lc1tdIEByZWxhdGlvbigiaHB6X2VuZl9pbnRlcnZlbmNpb25lc19pZF9mYWN0b3JUb2NhdF9uYW5kYSIpCiAgaHB6X2VuZl9pbnRlcnZlbmNpb25lc19ocHpfZW5mX2ludGVydmVuY2lvbmVzX2lkX3NpbnRvbWFUb2NhdF9uYW5kYSBocHpfZW5mX2ludGVydmVuY2lvbmVzW10gQHJlbGF0aW9uKCJocHpfZW5mX2ludGVydmVuY2lvbmVzX2lkX3NpbnRvbWFUb2NhdF9uYW5kYSIpCn0KCm1vZGVsIGNhdF9uaXZlbGVzIHsKICBpZCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEludCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBAaWQgQGRlZmF1bHQoYXV0b2luY3JlbWVudCgpKSBAZGIuVW5zaWduZWRJbnQKICBjbGF2ZSAgICAgICAgICAgICAgICAgICAgICAgICAgIFN0cmluZwogIG5vbWJyZSAgICAgICAgICAgICAgICAgICAgICAgICAgU3RyaW5nCiAgZXN0YXR1cyAgICAgICAgICAgICAgICAgICAgICAgICBCb29sZWFuICAgICAgICAgICAgICAgICAgICAgICAgICAgQGRlZmF1bHQodHJ1ZSkKICBjcmVhdGVkX2F0ICAgICAgICAgICAgICAgICAgICAgIERhdGVUaW1lPyAgICAgICAgICAgICAgICAgICAgICAgICBAZGIuVGltZXN0YW1wKDApCiAgdXBkYXRlZF9hdCAgICAgICAgICAgICAgICAgICAgICBEYXRlVGltZT8gICAgICAgICAgICAgICAgICAgICAgICAgQGRiLlRpbWVzdGFtcCgwKQogIGRlbGV0ZWRfYXQgICAgICAgICAgICAgICAgICAgICAgRGF0ZVRpbWU/ICAgICAgICAgICAgICAgICAgICAgICAgIEBkYi5UaW1lc3RhbXAoMCkKICBjZmdfY29uZmlnX3N5c3RlbSAgICAgICAgICAgICAgIGNmZ19jb25maWdfc3lzdGVtW10KICBjamFfc2Vyc3ViICAgICAgICAgICAgICAgICAgICAgIGNqYV9zZXJzdWJbXSAgICAgICAgICAgICAgICAgICAgICBAaWdub3JlCiAgaHB6X2luZ3Jlc29faG9zcGl0YWxhcmlvICAgICAgICBocHpfaW5ncmVzb19ob3NwaXRhbGFyaW9bXQogIGhwel9uaXZlbF9oaXN0b3JpYWwgICAgICAgICAgICAgaHB6X25pdmVsX2hpc3RvcmlhbFtdCiAgaHB6X3BhY2llbnRlICAgICAgICAgICAgICAgICAgICBocHpfcGFjaWVudGVbXQogIGhwel9wYWNpZW50ZV9lc3Rfc29jaW9lY29ub21pY28gaHB6X3BhY2llbnRlX2VzdF9zb2Npb2Vjb25vbWljb1tdCn0KCm1vZGVsIGNhdF9vY3VwYWNpb25lcyB7CiAgaWQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBJbnQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQGlkIEBkZWZhdWx0KGF1dG9pbmNyZW1lbnQoKSkgQGRiLlVuc2lnbmVkSW50CiAgbm9tYnJlICAgICAgICAgICAgICAgICAgICAgICAgICBTdHJpbmcKICBjcmVhdGVkX2F0ICAgICAgICAgICAgICAgICAgICAgIERhdGVUaW1lPyAgICAgICAgICAgICAgICAgICAgICAgICBAZGIuVGltZXN0YW1wKDApCiAgdXBkYXRlZF9hdCAgICAgICAgICAgICAgICAgICAgICBEYXRlVGltZT8gICAgICAgICAgICAgICAgICAgICAgICAgQGRiLlRpbWVzdGFtcCgwKQogIGRlbGV0ZWRfYXQgICAgICAgICAgICAgICAgICAgICAgRGF0ZVRpbWU/ICAgICAgICAgICAgICAgICAgICAgICAgIEBkYi5UaW1lc3RhbXAoMCkKICBjbXBfcGVyc29uYSAgICAgICAgICAgICAgICAgICAgIGNtcF9wZXJzb25hW10KICBocHpfcGFjaWVudGVfZXN0X3NvY2lvZWNvbm9taWNvIGhwel9wYWNpZW50ZV9lc3Rfc29jaW9lY29ub21pY29bXQp9Cgptb2RlbCBjYXRfcGFyZW50ZXNjb3MgewogIGlkICAgICAgICAgICAgIEludCAgICAgICAgICAgICAgQGlkIEBkZWZhdWx0KGF1dG9pbmNyZW1lbnQoKSkgQGRiLlVuc2lnbmVkSW50CiAgbm9tYnJlICAgICAgICAgU3RyaW5nCiAgY3JlYXRlZF9hdCAgICAgRGF0ZVRpbWU/ICAgICAgICBAZGIuVGltZXN0YW1wKDApCiAgdXBkYXRlZF9hdCAgICAgRGF0ZVRpbWU/ICAgICAgICBAZGIuVGltZXN0YW1wKDApCiAgZGVsZXRlZF9hdCAgICAgRGF0ZVRpbWU/ICAgICAgICBAZGIuVGltZXN0YW1wKDApCiAgY21wX2ZhbWlsaWFyZXMgY21wX2ZhbWlsaWFyZXNbXQp9Cgptb2RlbCBjYXRfcGF0b2xvZ2lhX3Byb2NlZGltaWVudG9zIHsKICBpZCAgICAgICAgICAgICAgICAgICAgIEludCAgICAgICAgICAgICAgICAgICAgICBAaWQgQGRlZmF1bHQoYXV0b2luY3JlbWVudCgpKSBAZGIuVW5zaWduZWRJbnQKICBub21icmUgICAgICAgICAgICAgICAgIFN0cmluZwogIGNyZWF0ZWRfYXQgICAgICAgICAgICAgRGF0ZVRpbWU/ICAgICAgICAgICAgICAgIEBkYi5UaW1lc3RhbXAoMCkKICB1cGRhdGVkX2F0ICAgICAgICAgICAgIERhdGVUaW1lPyAgICAgICAgICAgICAgICBAZGIuVGltZXN0YW1wKDApCiAgZGVsZXRlZF9hdCAgICAgICAgICAgICBEYXRlVGltZT8gICAgICAgICAgICAgICAgQGRiLlRpbWVzdGFtcCgwKQogIGhwel9wYXRvbG9naWFfZXN0dWRpb3MgaHB6X3BhdG9sb2dpYV9lc3R1ZGlvc1tdCn0KCm1vZGVsIGNhdF9wYXRvbG9naWFfdGlwb19lc3R1ZGlvIHsKICBpZCAgICAgICAgICAgICAgICAgICAgIEludCAgICAgICAgICAgICAgICAgICAgICBAaWQgQGRlZmF1bHQoYXV0b2luY3JlbWVudCgpKSBAZGIuVW5zaWduZWRJbnQKICBub21icmUgICAgICAgICAgICAgICAgIFN0cmluZwogIGNsYXZlICAgICAgICAgICAgICAgICAgU3RyaW5nICAgICAgICAgICAgICAgICAgIEBkYi5WYXJDaGFyKDIpCiAgdGlwbyAgICAgICAgICAgICAgICAgICBTdHJpbmcKICBjcmVhdGVkX2F0ICAgICAgICAgICAgIERhdGVUaW1lPyAgICAgICAgICAgICAgICBAZGIuVGltZXN0YW1wKDApCiAgdXBkYXRlZF9hdCAgICAgICAgICAgICBEYXRlVGltZT8gICAgICAgICAgICAgICAgQGRiLlRpbWVzdGFtcCgwKQogIGRlbGV0ZWRfYXQgICAgICAgICAgICAgRGF0ZVRpbWU/ICAgICAgICAgICAgICAgIEBkYi5UaW1lc3RhbXAoMCkKICBocHpfcGF0b2xvZ2lhX2VzdHVkaW9zIGhwel9wYXRvbG9naWFfZXN0dWRpb3NbXQp9Cgptb2RlbCBjYXRfcGVuc2lvbmVzIHsKICBpZCAgICAgICAgICAgIEludCAgICAgICAgICAgICBAaWQgQGRlZmF1bHQoYXV0b2luY3JlbWVudCgpKSBAZGIuVW5zaWduZWRJbnQKICBub21icmUgICAgICAgIFN0cmluZwogIGRlbGV0ZWRfYXQgICAgRGF0ZVRpbWU/ICAgICAgIEBkYi5UaW1lc3RhbXAoMCkKICBjcmVhdGVkX2F0ICAgIERhdGVUaW1lPyAgICAgICBAZGIuVGltZXN0YW1wKDApCiAgdXBkYXRlZF9hdCAgICBEYXRlVGltZT8gICAgICAgQGRiLlRpbWVzdGFtcCgwKQogIHJjaF9lbXBsZWFkb3MgcmNoX2VtcGxlYWRvc1tdCn0KCm1vZGVsIGNhdF9wZXJtaXNvcyB7CiAgaWQgICAgICAgICAgICAgICAgICAgICAgICAgSW50ICAgICAgICAgICAgICAgICAgICAgICAgICBAaWQgQGRlZmF1bHQoYXV0b2luY3JlbWVudCgpKSBAZGIuVW5zaWduZWRJbnQKICBub21icmUgICAgICAgICAgICAgICAgICAgICBTdHJpbmcKICBjcmVhdGVkX2F0ICAgICAgICAgICAgICAgICBEYXRlVGltZT8gICAgICAgICAgICAgICAgICAgIEBkYi5UaW1lc3RhbXAoMCkKICB1cGRhdGVkX2F0ICAgICAgICAgICAgICAgICBEYXRlVGltZT8gICAgICAgICAgICAgICAgICAgIEBkYi5UaW1lc3RhbXAoMCkKICBkZWxldGVkX2F0ICAgICAgICAgICAgICAgICBEYXRlVGltZT8gICAgICAgICAgICAgICAgICAgIEBkYi5UaW1lc3RhbXAoMCkKICByY2hfcGVybWlzb3MgICAgICAgICAgICAgICByY2hfcGVybWlzb3NbXQogIHJjaF90aXBvX2VtcGxlYWRvX3Blcm1pc29zIHJjaF90aXBvX2VtcGxlYWRvX3Blcm1pc29zW10KfQoKbW9kZWwgY2F0X3Bpc29zIHsKICBpZCAgICAgICAgICBJbnQgICAgICAgICAgIEBpZCBAZGVmYXVsdChhdXRvaW5jcmVtZW50KCkpIEBkYi5VbnNpZ25lZEludAogIG5vbWJyZSAgICAgIFN0cmluZyAgICAgICAgQGRiLlZhckNoYXIoMTAwKQogIGNyZWF0ZWRfYXQgIERhdGVUaW1lPyAgICAgQGRiLlRpbWVzdGFtcCgwKQogIHVwZGF0ZWRfYXQgIERhdGVUaW1lPyAgICAgQGRiLlRpbWVzdGFtcCgwKQogIGRlbGV0ZWRfYXQgIERhdGVUaW1lPyAgICAgQGRiLlRpbWVzdGFtcCgwKQogIGNhdF9lcXVpcG9zIGNhdF9lcXVpcG9zW10KfQoKbW9kZWwgY2F0X3BsYXphcyB7CiAgaWQgICAgICAgICAgICBJbnQgICAgICAgICAgICAgQGlkIEBkZWZhdWx0KGF1dG9pbmNyZW1lbnQoKSkgQGRiLlVuc2lnbmVkSW50CiAgbm9tYnJlICAgICAgICBTdHJpbmcKICBjbGF2ZSAgICAgICAgIFN0cmluZz8gICAgICAgICBAZGIuVmFyQ2hhcig1KQogIGNyZWF0ZWRfYXQgICAgRGF0ZVRpbWU/ICAgICAgIEBkYi5UaW1lc3RhbXAoMCkKICB1cGRhdGVkX2F0ICAgIERhdGVUaW1lPyAgICAgICBAZGIuVGltZXN0YW1wKDApCiAgZGVsZXRlZF9hdCAgICBEYXRlVGltZT8gICAgICAgQGRiLlRpbWVzdGFtcCgwKQogIHJjaF9lbXBsZWFkb3MgcmNoX2VtcGxlYWRvc1tdCn0KCm1vZGVsIGNhdF9wcm9jZWRpbWllbnRvc19pbnZhc2l2b3MgewogIGlkICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBCaWdJbnQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBAaWQgQGRlZmF1bHQoYXV0b2luY3JlbWVudCgpKSBAZGIuVW5zaWduZWRCaWdJbnQKICB0YWJsYSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU3RyaW5nICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQGRiLlZhckNoYXIoMjUwKQogIHRpcG8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTdHJpbmcgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBAZGIuVmFyQ2hhcigyNTApCiAgbm9tYnJlICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFN0cmluZyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBkYi5WYXJDaGFyKDI1MCkKICBjbGF2ZSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU3RyaW5nICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQGRiLlZhckNoYXIoNSkKICBwdW50b3MgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU3RyaW5nICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQGRiLlZhckNoYXIoMikKICByZWdsYXMgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU3RyaW5nICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQGRiLlZhckNoYXIoMjApCiAgY3ZwICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFN0cmluZyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBkYi5WYXJDaGFyKDQpCiAgcGljYyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFN0cmluZyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBkYi5WYXJDaGFyKDQpCiAgY3ZjICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFN0cmluZyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBkYi5WYXJDaGFyKDQpCiAgY3JlYXRlZF9hdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIERhdGVUaW1lPyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBkYi5UaW1lc3RhbXAoMCkKICB1cGRhdGVkX2F0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRGF0ZVRpbWU/ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQGRiLlRpbWVzdGFtcCgwKQogIGRlbGV0ZWRfYXQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBEYXRlVGltZT8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBAZGIuVGltZXN0YW1wKDApCiAgZW5mX3Byb2NlZGltaWVudG9zX2ludmFzaXZvc19lbmZfcHJvY2VkaW1pZW50b3NfaW52YXNpdm9zX2lkX2ZsZWJpdGlzVG9jYXRfcHJvY2VkaW1pZW50b3NfaW52YXNpdm9zIGVuZl9wcm9jZWRpbWllbnRvc19pbnZhc2l2b3NbXSAgICAgICAgIEByZWxhdGlvbigiZW5mX3Byb2NlZGltaWVudG9zX2ludmFzaXZvc19pZF9mbGViaXRpc1RvY2F0X3Byb2NlZGltaWVudG9zX2ludmFzaXZvcyIpCiAgZW5mX3Byb2NlZGltaWVudG9zX2ludmFzaXZvc19lbmZfcHJvY2VkaW1pZW50b3NfaW52YXNpdm9zX2lkX2luc3RhbG9Ub2NhdF9wcm9jZWRpbWllbnRvc19pbnZhc2l2b3MgIGVuZl9wcm9jZWRpbWllbnRvc19pbnZhc2l2b3NbXSAgICAgICAgIEByZWxhdGlvbigiZW5mX3Byb2NlZGltaWVudG9zX2ludmFzaXZvc19pZF9pbnN0YWxvVG9jYXRfcHJvY2VkaW1pZW50b3NfaW52YXNpdm9zIikKICBlbmZfcHJvY2VkaW1pZW50b3NfaW52YXNpdm9zX2VuZl9wcm9jZWRpbWllbnRvc19pbnZhc2l2b3NfaWRfcmV0aXJvVG9jYXRfcHJvY2VkaW1pZW50b3NfaW52YXNpdm9zICAgZW5mX3Byb2NlZGltaWVudG9zX2ludmFzaXZvc1tdICAgICAgICAgQHJlbGF0aW9uKCJlbmZfcHJvY2VkaW1pZW50b3NfaW52YXNpdm9zX2lkX3JldGlyb1RvY2F0X3Byb2NlZGltaWVudG9zX2ludmFzaXZvcyIpCiAgZW5mX3Byb2NlZGltaWVudG9zX2ludmFzaXZvc19lbmZfcHJvY2VkaW1pZW50b3NfaW52YXNpdm9zX2lkX3NpdGlvVG9jYXRfcHJvY2VkaW1pZW50b3NfaW52YXNpdm9zICAgIGVuZl9wcm9jZWRpbWllbnRvc19pbnZhc2l2b3NbXSAgICAgICAgIEByZWxhdGlvbigiZW5mX3Byb2NlZGltaWVudG9zX2ludmFzaXZvc19pZF9zaXRpb1RvY2F0X3Byb2NlZGltaWVudG9zX2ludmFzaXZvcyIpCiAgZW5mX3Byb2NlZGltaWVudG9zX2ludmFzaXZvc19lbmZfcHJvY2VkaW1pZW50b3NfaW52YXNpdm9zX2lkX3N1YnRpcG9Ub2NhdF9wcm9jZWRpbWllbnRvc19pbnZhc2l2b3MgIGVuZl9wcm9jZWRpbWllbnRvc19pbnZhc2l2b3NbXSAgICAgICAgIEByZWxhdGlvbigiZW5mX3Byb2NlZGltaWVudG9zX2ludmFzaXZvc19pZF9zdWJ0aXBvVG9jYXRfcHJvY2VkaW1pZW50b3NfaW52YXNpdm9zIikKICBlbmZfcHJvY2VkaW1pZW50b3NfaW52YXNpdm9zX2RldGFsbGUgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZW5mX3Byb2NlZGltaWVudG9zX2ludmFzaXZvc19kZXRhbGxlW10KfQoKbW9kZWwgY2F0X3Byb2R1Y3RvcyB7CiAgaWQgICAgICAgICAgICAgICAgICAgICAgICAgIEJpZ0ludCAgICAgICAgICAgICAgICAgICAgICAgIEBpZCBAZGVmYXVsdChhdXRvaW5jcmVtZW50KCkpIEBkYi5VbnNpZ25lZEJpZ0ludAogIGNsYXZlICAgICAgICAgICAgICAgICAgICAgICBTdHJpbmcgICAgICAgICAgICAgICAgICAgICAgICBAZGIuVmFyQ2hhcigxNSkKICBub21icmUgICAgICAgICAgICAgICAgICAgICAgU3RyaW5nICAgICAgICAgICAgICAgICAgICAgICAgQGRiLlZhckNoYXIoOTAwKQogIG5vbWJyZV9sYXNhICAgICAgICAgICAgICAgICBTdHJpbmc/ICAgICAgICAgICAgICAgICAgICAgICBAZGVmYXVsdCgiTlVMTCIpIEBkYi5WYXJDaGFyKDkwMCkKICBub21icmVfY29tZXJjaWFsICAgICAgICAgICAgU3RyaW5nICAgICAgICAgICAgICAgICAgICAgICAgQGRiLlZhckNoYXIoOTAwKQogIHByZXNlbnRhY2lvbiAgICAgICAgICAgICAgICBTdHJpbmcgICAgICAgICAgICAgICAgICAgICAgICBAZGIuVmFyQ2hhcig1MDApCiAgY3YgICAgICAgICAgICAgICAgICAgICAgICAgIFN0cmluZyAgICAgICAgICAgICAgICAgICAgICAgIEBkYi5WYXJDaGFyKDUwKQogIGFudGliaW90aWNvcyAgICAgICAgICAgICAgICBTdHJpbmcgICAgICAgICAgICAgICAgICAgICAgICBAZGIuVmFyQ2hhcig1MCkKICBsYWJvcmF0b3JpbyAgICAgICAgICAgICAgICAgU3RyaW5nICAgICAgICAgICAgICAgICAgICAgICAgQGRiLlZhckNoYXIoMjUwKQogIGZhbWlsaWEgICAgICAgICAgICAgICAgICAgICBTdHJpbmcgICAgICAgICAgICAgICAgICAgICAgICBAZGIuVmFyQ2hhcigyNTApCiAgY2JuICAgICAgICAgICAgICAgICAgICAgICAgIEJvb2xlYW4KICBjcmVhdGVkX2F0ICAgICAgICAgICAgICAgICAgRGF0ZVRpbWU/ICAgICAgICAgICAgICAgICAgICAgQGRiLlRpbWVzdGFtcCgwKQogIHVwZGF0ZWRfYXQgICAgICAgICAgICAgICAgICBEYXRlVGltZT8gICAgICAgICAgICAgICAgICAgICBAZGIuVGltZXN0YW1wKDApCiAgZGVsZXRlZF9hdCAgICAgICAgICAgICAgICAgIERhdGVUaW1lPyAgICAgICAgICAgICAgICAgICAgIEBkYi5UaW1lc3RhbXAoMCkKICBocHpfaW5kaWNhY2lvbl9tZWRpY2FtZW50b3MgaHB6X2luZGljYWNpb25fbWVkaWNhbWVudG9zW10KfQoKbW9kZWwgY2F0X3Byb2dyYW1hcyB7CiAgaWQgICAgICAgICAgICAgICBJbnQgICAgICAgICAgICAgICAgQGlkIEBkZWZhdWx0KGF1dG9pbmNyZW1lbnQoKSkgQGRiLlVuc2lnbmVkSW50CiAgbm9tYnJlICAgICAgICAgICBTdHJpbmcgICAgICAgICAgICAgQGRiLlZhckNoYXIoMTAwKQogIGNsYXZlICAgICAgICAgICAgU3RyaW5nICAgICAgICAgICAgIEBkYi5WYXJDaGFyKDEwKQogIGNyZWF0ZWRfYXQgICAgICAgRGF0ZVRpbWU/ICAgICAgICAgIEBkYi5UaW1lc3RhbXAoMCkKICB1cGRhdGVkX2F0ICAgICAgIERhdGVUaW1lPyAgICAgICAgICBAZGIuVGltZXN0YW1wKDApCiAgZGVsZXRlZF9hdCAgICAgICBEYXRlVGltZT8gICAgICAgICAgQGRiLlRpbWVzdGFtcCgwKQogIGludl9iaWVuZXMgICAgICAgaW52X2JpZW5lc1tdCiAgaW52X2JpZW5lc19jb3J0ZSBpbnZfYmllbmVzX2NvcnRlW10KfQoKbW9kZWwgY2F0X3Byb3ZlZWRvcmVzIHsKICBpZCAgICAgICAgIEludCAgICAgICAgICAgICAgICAgICAgIEBpZCBAZGVmYXVsdChhdXRvaW5jcmVtZW50KCkpIEBkYi5VbnNpZ25lZEludAogIHJmYyAgICAgICAgU3RyaW5nCiAgbm9tYnJlICAgICBTdHJpbmcKICBkb21pY2lsaW8gIFN0cmluZz8KICBub2V4dGVyaW9yIFN0cmluZz8KICBub2ludGVyaW9yIFN0cmluZz8KICBjb2xvbmlhICAgIFN0cmluZz8KICBjaXVkYWQgICAgIFN0cmluZz8KICBlc3RhZG8gICAgIFN0cmluZz8KICBwYWlzICAgICAgIFN0cmluZz8KICBjcCAgICAgICAgIFN0cmluZz8KICBsb2NhbGlkYWQgIFN0cmluZz8KICBjb25kcGFnbyAgIFN0cmluZz8KICB0ZWxlZm9ubyAgIFN0cmluZz8KICBjdWVudGFkICAgIFN0cmluZz8KICBjdWVudGFoICAgIFN0cmluZz8KICBpdmFkICAgICAgIFN0cmluZz8KICBpdmFoICAgICAgIFN0cmluZz8KICBlc3RhdHVzICAgIGNhdF9wcm92ZWVkb3Jlc19lc3RhdHVzIEBkZWZhdWx0KEFjdGl2bykKICBjdXJwICAgICAgIFN0cmluZz8KICBjcmVhdGVkX2F0IERhdGVUaW1lPyAgICAgICAgICAgICAgIEBkYi5UaW1lc3RhbXAoMCkKICB1cGRhdGVkX2F0IERhdGVUaW1lPyAgICAgICAgICAgICAgIEBkYi5UaW1lc3RhbXAoMCkKICBkZWxldGVkX2F0IERhdGVUaW1lPyAgICAgICAgICAgICAgIEBkYi5UaW1lc3RhbXAoMCkKICByY2Zfa2FyZGV4IHJjZl9rYXJkZXhbXQp9Cgptb2RlbCBjYXRfcHVlc3RvcyB7CiAgaWQgICAgICAgICAgICAgICAgIEludCAgICAgICAgICAgICAgICAgIEBpZCBAZGVmYXVsdChhdXRvaW5jcmVtZW50KCkpIEBkYi5VbnNpZ25lZEludAogIGNvZGlnbyAgICAgICAgICAgICBTdHJpbmcgICAgICAgICAgICAgICBAZGIuVmFyQ2hhcigxMCkKICBub21icmUgICAgICAgICAgICAgU3RyaW5nICAgICAgICAgICAgICAgQGRiLlZhckNoYXIoMjUwKQogIHRpcG8gICAgICAgICAgICAgICBTdHJpbmcgICAgICAgICAgICAgICBAZGIuVmFyQ2hhcigyNTApCiAgamVmYXR1cmEgICAgICAgICAgIEJvb2xlYW4gICAgICAgICAgICAgIEBkZWZhdWx0KGZhbHNlKQogIHN1ZWxkbyAgICAgICAgICAgICBEZWNpbWFsICAgICAgICAgICAgICBAZGIuRGVjaW1hbCgxMCwgMikKICBzdWVsZG9fZGlhcmlvICAgICAgRGVjaW1hbCAgICAgICAgICAgICAgQGRiLkRlY2ltYWwoMTAsIDIpCiAgY3JlYXRlZF9hdCAgICAgICAgIERhdGVUaW1lPyAgICAgICAgICAgIEBkYi5UaW1lc3RhbXAoMCkKICB1cGRhdGVkX2F0ICAgICAgICAgRGF0ZVRpbWU/ICAgICAgICAgICAgQGRiLlRpbWVzdGFtcCgwKQogIGRlbGV0ZWRfYXQgICAgICAgICBEYXRlVGltZT8gICAgICAgICAgICBAZGIuVGltZXN0YW1wKDApCiAgaW52X2NvcnRlX2VtcGxlYWRvIGludl9jb3J0ZV9lbXBsZWFkb1tdCiAgcmNoX2VtcGxlYWRvcyAgICAgIHJjaF9lbXBsZWFkb3NbXQp9Cgptb2RlbCBjYXRfcmVsaWdpb25lcyB7CiAgaWQgICAgICAgICAgIEludCAgICAgICAgICAgQGlkIEBkZWZhdWx0KGF1dG9pbmNyZW1lbnQoKSkgQGRiLlVuc2lnbmVkSW50CiAgbm9tYnJlICAgICAgIFN0cmluZwogIGNvZGlnbyAgICAgICBTdHJpbmcKICBpZGdydXBvICAgICAgU3RyaW5nCiAgZ3J1cG8gICAgICAgIFN0cmluZwogIGlkc3ViZ3J1cG8gICBTdHJpbmcKICBzdWJncnVwbyAgICAgU3RyaW5nCiAgbm9tYnJlX2NyZWRvIFN0cmluZwogIGNyZWF0ZWRfYXQgICBEYXRlVGltZT8gICAgIEBkYi5UaW1lc3RhbXAoMCkKICB1cGRhdGVkX2F0ICAgRGF0ZVRpbWU/ICAgICBAZGIuVGltZXN0YW1wKDApCiAgZGVsZXRlZF9hdCAgIERhdGVUaW1lPyAgICAgQGRiLlRpbWVzdGFtcCgwKQogIGNtcF9wZXJzb25hICBjbXBfcGVyc29uYVtdCn0KCm1vZGVsIGNhdF9zZXJ2aWNpb3MgewogIGlkICAgICAgICAgICAgICAgICBJbnQgICAgICAgICAgICAgICAgICAgICAgIEBpZCBAZGVmYXVsdChhdXRvaW5jcmVtZW50KCkpIEBkYi5VbnNpZ25lZEludAogIG5vbWJyZSAgICAgICAgICAgICBTdHJpbmcKICBlc3RhdHVzICAgICAgICAgICAgQm9vbGVhbgogIGNyZWF0ZWRfYXQgICAgICAgICBEYXRlVGltZT8gICAgICAgICAgICAgICAgIEBkYi5UaW1lc3RhbXAoMCkKICB1cGRhdGVkX2F0ICAgICAgICAgRGF0ZVRpbWU/ICAgICAgICAgICAgICAgICBAZGIuVGltZXN0YW1wKDApCiAgZGVsZXRlZF9hdCAgICAgICAgIERhdGVUaW1lPyAgICAgICAgICAgICAgICAgQGRiLlRpbWVzdGFtcCgwKQogIHRpcG9BZ2VuZGEgICAgICAgICBjYXRfc2VydmljaW9zX3RpcG9BZ2VuZGE/CiAgY2F0X2VzcGVjaWFsaWRhZGVzIGNhdF9lc3BlY2lhbGlkYWRlc1tdCn0KCm1vZGVsIGNhdF9zaW5kaWNhdG9zIHsKICBpZCAgICAgICAgICAgIEludCAgICAgICAgICAgICBAaWQgQGRlZmF1bHQoYXV0b2luY3JlbWVudCgpKSBAZGIuVW5zaWduZWRJbnQKICBub21icmUgICAgICAgIFN0cmluZwogIGNyZWF0ZWRfYXQgICAgRGF0ZVRpbWU/ICAgICAgIEBkYi5UaW1lc3RhbXAoMCkKICB1cGRhdGVkX2F0ICAgIERhdGVUaW1lPyAgICAgICBAZGIuVGltZXN0YW1wKDApCiAgZGVsZXRlZF9hdCAgICBEYXRlVGltZT8gICAgICAgQGRiLlRpbWVzdGFtcCgwKQogIHJjaF9lbXBsZWFkb3MgcmNoX2VtcGxlYWRvc1tdCn0KCm1vZGVsIGNhdF9zdWJyb2dhZG9zIHsKICBpZCAgICAgICAgICAgIEludCAgICAgICAgICAgICBAaWQgQGRlZmF1bHQoYXV0b2luY3JlbWVudCgpKSBAZGIuVW5zaWduZWRJbnQKICBub21icmUgICAgICAgIFN0cmluZwogIGNsYXZlICAgICAgICAgU3RyaW5nICAgICAgICAgIEBkYi5WYXJDaGFyKDIpCiAgcmZjICAgICAgICAgICBTdHJpbmcgICAgICAgICAgQGRiLlZhckNoYXIoMTMpCiAgY3JlYXRlZF9hdCAgICBEYXRlVGltZT8gICAgICAgQGRiLlRpbWVzdGFtcCgwKQogIHVwZGF0ZWRfYXQgICAgRGF0ZVRpbWU/ICAgICAgIEBkYi5UaW1lc3RhbXAoMCkKICBkZWxldGVkX2F0ICAgIERhdGVUaW1lPyAgICAgICBAZGIuVGltZXN0YW1wKDApCiAgaHB6X3BhY2llbnRlICBocHpfcGFjaWVudGVbXQogIHJmbl9jb252ZW5pb3MgcmZuX2NvbnZlbmlvc1tdCn0KCm1vZGVsIGNhdF90aXBvX3NhbmdyZSB7CiAgaWQgICAgICAgICAgSW50ICAgICAgICAgICBAaWQgQGRlZmF1bHQoYXV0b2luY3JlbWVudCgpKSBAZGIuVW5zaWduZWRJbnQKICBub21icmUgICAgICBTdHJpbmcKICBjcmVhdGVkX2F0ICBEYXRlVGltZT8gICAgIEBkYi5UaW1lc3RhbXAoMCkKICB1cGRhdGVkX2F0ICBEYXRlVGltZT8gICAgIEBkYi5UaW1lc3RhbXAoMCkKICBkZWxldGVkX2F0ICBEYXRlVGltZT8gICAgIEBkYi5UaW1lc3RhbXAoMCkKICBjbXBfcGVyc29uYSBjbXBfcGVyc29uYVtdCn0KCm1vZGVsIGNhdF90aXBvc19lbXBsZWFkbyB7CiAgaWQgICAgICAgICAgICAgICAgICAgICAgICAgSW50ICAgICAgICAgICAgICAgICAgICAgICAgICBAaWQgQGRlZmF1bHQoYXV0b2luY3JlbWVudCgpKSBAZGIuVW5zaWduZWRJbnQKICBub21icmUgICAgICAgICAgICAgICAgICAgICBTdHJpbmcKICBjbGF2ZSAgICAgICAgICAgICAgICAgICAgICBTdHJpbmcgICAgICAgICAgICAgICAgICAgICAgIEBkYi5WYXJDaGFyKDIpCiAgY3JlYXRlZF9hdCAgICAgICAgICAgICAgICAgRGF0ZVRpbWU/ICAgICAgICAgICAgICAgICAgICBAZGIuVGltZXN0YW1wKDApCiAgdXBkYXRlZF9hdCAgICAgICAgICAgICAgICAgRGF0ZVRpbWU/ICAgICAgICAgICAgICAgICAgICBAZGIuVGltZXN0YW1wKDApCiAgZGVsZXRlZF9hdCAgICAgICAgICAgICAgICAgRGF0ZVRpbWU/ICAgICAgICAgICAgICAgICAgICBAZGIuVGltZXN0YW1wKDApCiAgcmNoX2VtcGxlYWRvcyAgICAgICAgICAgICAgcmNoX2VtcGxlYWRvc1tdCiAgcmNoX3RpcG9fZW1wbGVhZG9fcGVybWlzb3MgcmNoX3RpcG9fZW1wbGVhZG9fcGVybWlzb3NbXQp9Cgptb2RlbCBjYXRfdGlwb3NfcGVyc29uYSB7CiAgaWQgICAgICAgICBJbnQgICAgICAgQGlkIEBkZWZhdWx0KGF1dG9pbmNyZW1lbnQoKSkgQGRiLlVuc2lnbmVkSW50CiAgbW9kZWxvICAgICBTdHJpbmcKICBub21icmUgICAgIFN0cmluZyAgICBAZGIuVmFyQ2hhcig1MCkKICBpbmFjdGl2byAgIEJvb2xlYW4KICBjcmVhdGVkX2F0IERhdGVUaW1lPyBAZGIuVGltZXN0YW1wKDApCiAgdXBkYXRlZF9hdCBEYXRlVGltZT8gQGRiLlRpbWVzdGFtcCgwKQogIGRlbGV0ZWRfYXQgRGF0ZVRpbWU/IEBkYi5UaW1lc3RhbXAoMCkKICB1c2VycyAgICAgIHVzZXJzW10KfQoKbW9kZWwgY2F0X3RpcG9zX3JlY3Vyc28gewogIGlkICAgICAgICAgICAgSW50ICAgICAgICAgICAgIEBpZCBAZGVmYXVsdChhdXRvaW5jcmVtZW50KCkpIEBkYi5VbnNpZ25lZEludAogIG5vbWJyZSAgICAgICAgU3RyaW5nCiAgY2xhdmUgICAgICAgICBTdHJpbmcgICAgICAgICAgQGRiLlZhckNoYXIoMikKICBjcmVhdGVkX2F0ICAgIERhdGVUaW1lPyAgICAgICBAZGIuVGltZXN0YW1wKDApCiAgdXBkYXRlZF9hdCAgICBEYXRlVGltZT8gICAgICAgQGRiLlRpbWVzdGFtcCgwKQogIGRlbGV0ZWRfYXQgICAgRGF0ZVRpbWU/ICAgICAgIEBkYi5UaW1lc3RhbXAoMCkKICByY2hfZW1wbGVhZG9zIHJjaF9lbXBsZWFkb3NbXQp9Cgptb2RlbCBjYXRfdHVybm9zIHsKICBpZCAgICAgICAgICAgICAgSW50ICAgICAgICAgICAgICAgQGlkIEBkZWZhdWx0KGF1dG9pbmNyZW1lbnQoKSkgQGRiLlVuc2lnbmVkSW50CiAgbm9tYnJlICAgICAgICAgIFN0cmluZwogIGNyZWF0ZWRfYXQgICAgICBEYXRlVGltZT8gICAgICAgICBAZGIuVGltZXN0YW1wKDApCiAgdXBkYXRlZF9hdCAgICAgIERhdGVUaW1lPyAgICAgICAgIEBkYi5UaW1lc3RhbXAoMCkKICBkZWxldGVkX2F0ICAgICAgRGF0ZVRpbWU/ICAgICAgICAgQGRiLlRpbWVzdGFtcCgwKQogIHJjZl9pbmNpZGVuY2lhcyByY2ZfaW5jaWRlbmNpYXNbXQogIHJjZl9rYXJkZXggICAgICByY2Zfa2FyZGV4W10KICByY2hfZW1wbGVhZG9zICAgcmNoX2VtcGxlYWRvc1tdCn0KCm1vZGVsIGNhdF91YmljYWNpb25lcyB7CiAgaWRfdWJpY2FjaW9uICAgICAgICAgSW50ICAgICAgICAgICAgICAgICAgICBAaWQgQGRlZmF1bHQoYXV0b2luY3JlbWVudCgpKSBAZGIuVW5zaWduZWRJbnQKICBub21icmUgICAgICAgICAgICAgICBTdHJpbmcKICBlc3RhdHVzICAgICAgICAgICAgICBCb29sZWFuICAgICAgICAgICAgICAgIEBkZWZhdWx0KHRydWUpCiAgaWRfcGlzbyAgICAgICAgICAgICAgSW50CiAgY3JlYXRlZF9hdCAgICAgICAgICAgRGF0ZVRpbWU/ICAgICAgICAgICAgICBAZGIuVGltZXN0YW1wKDApCiAgdXBkYXRlZF9hdCAgICAgICAgICAgRGF0ZVRpbWU/ICAgICAgICAgICAgICBAZGIuVGltZXN0YW1wKDApCiAgZGVsZXRlZF9hdCAgICAgICAgICAgRGF0ZVRpbWU/ICAgICAgICAgICAgICBAZGIuVGltZXN0YW1wKDApCiAgaWRfZGVwYXJ0YW1lbnRvICAgICAgSW50PyAgICAgICAgICAgICAgICAgICBAZGIuVW5zaWduZWRJbnQKICBjYXRfZXF1aXBvcyAgICAgICAgICBjYXRfZXF1aXBvc1tdCiAgY2F0X2RlcGFydGFtZW50b3MgICAgY2F0X2RlcGFydGFtZW50b3M/ICAgICBAcmVsYXRpb24oZmllbGRzOiBbaWRfZGVwYXJ0YW1lbnRvXSwgcmVmZXJlbmNlczogW2lkXSwgb25EZWxldGU6IFJlc3RyaWN0LCBvblVwZGF0ZTogUmVzdHJpY3QsIG1hcDogImNhdF91YmljYWNpb25lc19pZF9kZXBhcnRhbWVudG9fZm9yZWlnbiIpCiAgaW52X2VsZW1lbnRvc19iaWVuZXMgaW52X2VsZW1lbnRvc19iaWVuZXNbXQogIHJjZl9iaWVuZXMgICAgICAgICAgIHJjZl9iaWVuZXNbXQoKICBAQGluZGV4KFtpZF9kZXBhcnRhbWVudG9dLCBtYXA6ICJjYXRfdWJpY2FjaW9uZXNfaWRfZGVwYXJ0YW1lbnRvX2ZvcmVpZ24iKQp9Cgptb2RlbCBjYXRfdmVoaWN1bG9fbWFyY2EgewogIGlkICAgICAgICAgICAgICAgICAgICBCaWdJbnQgICAgICAgICAgICAgICAgICBAaWQgQGRlZmF1bHQoYXV0b2luY3JlbWVudCgpKSBAZGIuVW5zaWduZWRCaWdJbnQKICBub21icmUgICAgICAgICAgICAgICAgU3RyaW5nICAgICAgICAgICAgICAgICAgQGRiLlZhckNoYXIoNTApCiAgY3JlYXRlZF9hdCAgICAgICAgICAgIERhdGVUaW1lPyAgICAgICAgICAgICAgIEBkYi5UaW1lc3RhbXAoMCkKICB1cGRhdGVkX2F0ICAgICAgICAgICAgRGF0ZVRpbWU/ICAgICAgICAgICAgICAgQGRiLlRpbWVzdGFtcCgwKQogIGRlbGV0ZWRfYXQgICAgICAgICAgICBEYXRlVGltZT8gICAgICAgICAgICAgICBAZGIuVGltZXN0YW1wKDApCiAgc2dsX3RhcmpldG9uX3ZlaGljdWxvIHNnbF90YXJqZXRvbl92ZWhpY3Vsb1tdCn0KCm1vZGVsIGNhdF92ZWhpY3Vsb19zdWJtYXJjYSB7CiAgaWQgICAgICAgICAgICAgICAgICAgIEJpZ0ludCAgICAgICAgICAgICAgICAgIEBpZCBAZGVmYXVsdChhdXRvaW5jcmVtZW50KCkpIEBkYi5VbnNpZ25lZEJpZ0ludAogIG5vbWJyZSAgICAgICAgICAgICAgICBTdHJpbmcgICAgICAgICAgICAgICAgICBAZGIuVmFyQ2hhcig1MCkKICBpZF9tYXJjYSAgICAgICAgICAgICAgQmlnSW50PyAgICAgICAgICAgICAgICAgQGRiLlVuc2lnbmVkQmlnSW50CiAgY3JlYXRlZF9hdCAgICAgICAgICAgIERhdGVUaW1lPyAgICAgICAgICAgICAgIEBkYi5UaW1lc3RhbXAoMCkKICB1cGRhdGVkX2F0ICAgICAgICAgICAgRGF0ZVRpbWU/ICAgICAgICAgICAgICAgQGRiLlRpbWVzdGFtcCgwKQogIGRlbGV0ZWRfYXQgICAgICAgICAgICBEYXRlVGltZT8gICAgICAgICAgICAgICBAZGIuVGltZXN0YW1wKDApCiAgc2dsX3RhcmpldG9uX3ZlaGljdWxvIHNnbF90YXJqZXRvbl92ZWhpY3Vsb1tdCn0KCm1vZGVsIGNhdF92aWFzX2luZ3Jlc28gewogIGlkICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSW50ICAgICAgICAgICAgICAgICAgICAgICAgQGlkIEBkZWZhdWx0KGF1dG9pbmNyZW1lbnQoKSkgQGRiLlVuc2lnbmVkSW50CiAgbm9tYnJlICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTdHJpbmcKICBpY29uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFN0cmluZyAgICAgICAgICAgICAgICAgICAgIEBkYi5WYXJDaGFyKDUwKQogIGNyZWF0ZWRfYXQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRGF0ZVRpbWU/ICAgICAgICAgICAgICAgICAgQGRiLlRpbWVzdGFtcCgwKQogIHVwZGF0ZWRfYXQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRGF0ZVRpbWU/ICAgICAgICAgICAgICAgICAgQGRiLlRpbWVzdGFtcCgwKQogIGRlbGV0ZWRfYXQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRGF0ZVRpbWU/ICAgICAgICAgICAgICAgICAgQGRiLlRpbWVzdGFtcCgwKQogIGhwel9pbmdyZXNvX2hvc3BpdGFsYXJpb19ocHpfaW5ncmVzb19ob3NwaXRhbGFyaW9faWRfcHJvZ3JhbWFUb2NhdF92aWFzX2luZ3Jlc28gICAgaHB6X2luZ3Jlc29faG9zcGl0YWxhcmlvW10gQHJlbGF0aW9uKCJocHpfaW5ncmVzb19ob3NwaXRhbGFyaW9faWRfcHJvZ3JhbWFUb2NhdF92aWFzX2luZ3Jlc28iKQogIGhwel9pbmdyZXNvX2hvc3BpdGFsYXJpb19ocHpfaW5ncmVzb19ob3NwaXRhbGFyaW9faWRfdmlhX2luZ3Jlc29Ub2NhdF92aWFzX2luZ3Jlc28gaHB6X2luZ3Jlc29faG9zcGl0YWxhcmlvW10gQHJlbGF0aW9uKCJocHpfaW5ncmVzb19ob3NwaXRhbGFyaW9faWRfdmlhX2luZ3Jlc29Ub2NhdF92aWFzX2luZ3Jlc28iKQp9Cgptb2RlbCBjZmdfY29uZmlnX3N5c3RlbSB7CiAgaWQgICAgICAgICAgSW50ICAgICAgICAgQGlkIEBkZWZhdWx0KGF1dG9pbmNyZW1lbnQoKSkgQGRiLlVuc2lnbmVkSW50CiAgaWRfbml2ZWwgICAgSW50ICAgICAgICAgQGRiLlVuc2lnbmVkSW50CiAgY3JlYXRlZF9hdCAgRGF0ZVRpbWU/ICAgQGRiLlRpbWVzdGFtcCgwKQogIHVwZGF0ZWRfYXQgIERhdGVUaW1lPyAgIEBkYi5UaW1lc3RhbXAoMCkKICBjYXRfbml2ZWxlcyBjYXRfbml2ZWxlcyBAcmVsYXRpb24oZmllbGRzOiBbaWRfbml2ZWxdLCByZWZlcmVuY2VzOiBbaWRdLCBvblVwZGF0ZTogUmVzdHJpY3QsIG1hcDogImNmZ19jb25maWdfc3lzdGVtX2lkX25pdmVsX2ZvcmVpZ24iKQoKICBAQGluZGV4KFtpZF9uaXZlbF0sIG1hcDogImNmZ19jb25maWdfc3lzdGVtX2lkX25pdmVsX2ZvcmVpZ24iKQp9CgovLy8gVGhlIHVuZGVybHlpbmcgdGFibGUgZG9lcyBub3QgY29udGFpbiBhIHZhbGlkIHVuaXF1ZSBpZGVudGlmaWVyIGFuZCBjYW4gdGhlcmVmb3JlIGN1cnJlbnRseSBub3QgYmUgaGFuZGxlZCBieSBQcmlzbWEgQ2xpZW50Lgptb2RlbCBjamFfYXZhbGVzIHsKICBBdmFsTm9tICAgICAgU3RyaW5nCiAgQXZhbERvbSAgICAgIFN0cmluZwogIEF2YWxJZGVudCAgICBTdHJpbmcKICBEZXVkb3JOb20gICAgU3RyaW5nCiAgRGV1ZG9yRG9tICAgIFN0cmluZwogIElkX0VzdGFkbyAgICBTdHJpbmcKICBJZF9tdW5pY2lwaW8gU3RyaW5nCiAgSWRfTG9jYWxpZGFkIFN0cmluZwogIERldWRvckNvbCAgICBTdHJpbmcKICBEZXVkb3JJZGVudCAgU3RyaW5nCiAgRGV1ZG9yRmNoQ29tIFN0cmluZwoKICBAQGlnbm9yZQp9Cgptb2RlbCBjamFfcHJvZ3JhbWFzIHsKICBJZFByb2dyYW1hIEludCAgICBAaWQgQGRlZmF1bHQoYXV0b2luY3JlbWVudCgpKQogIFByb2dDdmUgICAgU3RyaW5nIEBkYi5DaGFyKDMpCiAgUHJvZ0Rlc2MgICBTdHJpbmcgQGRiLkNoYXIoNDApCiAgUHJvZ1NpZ2xhcyBTdHJpbmcgQGRiLkNoYXIoOCkKfQoKLy8vIFRoZSB1bmRlcmx5aW5nIHRhYmxlIGRvZXMgbm90IGNvbnRhaW4gYSB2YWxpZCB1bmlxdWUgaWRlbnRpZmllciBhbmQgY2FuIHRoZXJlZm9yZSBjdXJyZW50bHkgbm90IGJlIGhhbmRsZWQgYnkgUHJpc21hIENsaWVudC4KbW9kZWwgY2phX3NlcnN1YiB7CiAgQ2xhdmVTZXJ2ICAgU3RyaW5nICAgICAgQGRiLkNoYXIoNikKICBQcmVjaW9TdWIgICBEZWNpbWFsICAgICBAZGIuRGVjaW1hbCgxMCwgMikKICBpZF9uaXZlbCAgICBJbnQgICAgICAgICBAZGIuVW5zaWduZWRJbnQKICBjYXRfbml2ZWxlcyBjYXRfbml2ZWxlcyBAcmVsYXRpb24oZmllbGRzOiBbaWRfbml2ZWxdLCByZWZlcmVuY2VzOiBbaWRdLCBvblVwZGF0ZTogUmVzdHJpY3QsIG1hcDogImNqYV9zZXJzdWJfaWRfbml2ZWxfZm9yZWlnbiIpCgogIEBAaW5kZXgoW2lkX25pdmVsXSwgbWFwOiAiY2phX3NlcnN1Yl9pZF9uaXZlbF9mb3JlaWduIikKICBAQGlnbm9yZQp9CgovLy8gVGhlIHVuZGVybHlpbmcgdGFibGUgZG9lcyBub3QgY29udGFpbiBhIHZhbGlkIHVuaXF1ZSBpZGVudGlmaWVyIGFuZCBjYW4gdGhlcmVmb3JlIGN1cnJlbnRseSBub3QgYmUgaGFuZGxlZCBieSBQcmlzbWEgQ2xpZW50Lgptb2RlbCBjamFfc2VydmljaW9zIHsKICBDbGF2ZVNlcnYgICAgU3RyaW5nICBAZGIuQ2hhcig2KQogIERlc2NTZXJ2aWNpbyBTdHJpbmcgIEBkYi5DaGFyKDUwKQogIEN2ZUdwb1NlcnYgICBTdHJpbmcgIEBkYi5DaGFyKDUwKQogIFN1YnNpZGlhZG8gICBTdHJpbmcgIEBkYi5DaGFyKDEpCiAgVGlwb1NlcnZpY2lvIFN0cmluZyAgQGRiLkNoYXIoMSkKICBQcmVjaW9CYXNlICAgRGVjaW1hbCBAZGIuRGVjaW1hbCgxMCwgMikKICBDdGFDb250YWJsZSAgU3RyaW5nICBAZGIuQ2hhcigxMikKCiAgQEBpZ25vcmUKfQoKLy8vIFRoZSB1bmRlcmx5aW5nIHRhYmxlIGRvZXMgbm90IGNvbnRhaW4gYSB2YWxpZCB1bmlxdWUgaWRlbnRpZmllciBhbmQgY2FuIHRoZXJlZm9yZSBjdXJyZW50bHkgbm90IGJlIGhhbmRsZWQgYnkgUHJpc21hIENsaWVudC4KbW9kZWwgY2phX3NlcnZwYXEgewogIENsYXZlU2VydiBTdHJpbmcgQGRiLkNoYXIoNikKICBQYXF1ZXRlICAgU3RyaW5nIEBkYi5DaGFyKDYpCgogIEBAaWdub3JlCn0KCm1vZGVsIGNtcF9jb250YWN0b3MgewogIGlkICAgICAgICAgICAgSW50ICAgICAgICAgQGlkIEBkZWZhdWx0KGF1dG9pbmNyZW1lbnQoKSkgQGRiLlVuc2lnbmVkSW50CiAgdGlwbyAgICAgICAgICBTdHJpbmcKICBkZXNjcmlwY2lvbiAgIFN0cmluZwogIG9ic2VydmFjaW9uZXMgU3RyaW5nPyAgICAgQGRiLlRleHQKICBpZF9wZXJzb25hICAgIEludCAgICAgICAgIEBkYi5VbnNpZ25lZEludAogIGNyZWF0ZWRfYXQgICAgRGF0ZVRpbWU/ICAgQGRiLlRpbWVzdGFtcCgwKQogIHVwZGF0ZWRfYXQgICAgRGF0ZVRpbWU/ICAgQGRiLlRpbWVzdGFtcCgwKQogIGRlbGV0ZWRfYXQgICAgRGF0ZVRpbWU/ICAgQGRiLlRpbWVzdGFtcCgwKQogIGNtcF9wZXJzb25hICAgY21wX3BlcnNvbmEgQHJlbGF0aW9uKGZpZWxkczogW2lkX3BlcnNvbmFdLCByZWZlcmVuY2VzOiBbaWRdLCBvblVwZGF0ZTogUmVzdHJpY3QsIG1hcDogImNtcF9jb250YWN0b3NfaWRfcGVyc29uYV9mb3JlaWduIikKCiAgQEBpbmRleChbaWRfcGVyc29uYV0sIG1hcDogImNtcF9jb250YWN0b3NfaWRfcGVyc29uYV9mb3JlaWduIikKfQoKbW9kZWwgY21wX2RvY3VtZW50YWNpb24gewogIGlkICAgICAgICAgICAgIEludCAgICAgICAgICAgIEBpZCBAZGVmYXVsdChhdXRvaW5jcmVtZW50KCkpIEBkYi5VbnNpZ25lZEludAogIG1vZGVsbyAgICAgICAgIFN0cmluZwogIGlkX21vZGVsbyAgICAgIEludCAgICAgICAgICAgIEBkYi5VbnNpZ25lZEludAogIGlkX2RvY3VtZW50byAgIEludCAgICAgICAgICAgIEBkYi5VbnNpZ25lZEludAogIHBhdGhfZG9jdW1lbnRvIFN0cmluZwogIGlkVXNlciAgICAgICAgIEludD8KICBjcmVhdGVkX2F0ICAgICBEYXRlVGltZT8gICAgICBAZGIuVGltZXN0YW1wKDApCiAgdXBkYXRlZF9hdCAgICAgRGF0ZVRpbWU/ICAgICAgQGRiLlRpbWVzdGFtcCgwKQogIGRlbGV0ZWRfYXQgICAgIERhdGVUaW1lPyAgICAgIEBkYi5UaW1lc3RhbXAoMCkKICBjYXRfZG9jdW1lbnRvcyBjYXRfZG9jdW1lbnRvcyBAcmVsYXRpb24oZmllbGRzOiBbaWRfZG9jdW1lbnRvXSwgcmVmZXJlbmNlczogW2lkXSwgb25VcGRhdGU6IFJlc3RyaWN0LCBtYXA6ICJjbXBfZG9jdW1lbnRhY2lvbl9pZF9kb2N1bWVudG9fZm9yZWlnbiIpCgogIEBAaW5kZXgoW2lkX2RvY3VtZW50b10sIG1hcDogImNtcF9kb2N1bWVudGFjaW9uX2lkX2RvY3VtZW50b19mb3JlaWduIikKfQoKbW9kZWwgY21wX2RvbWljaWxpb3MgewogIGlkICAgICAgICAgICAgICAgICAgICBJbnQgICAgICAgICAgICAgICAgQGlkIEBkZWZhdWx0KGF1dG9pbmNyZW1lbnQoKSkgQGRiLlVuc2lnbmVkSW50CiAgdGlwbyAgICAgICAgICAgICAgICAgIFN0cmluZyAgICAgICAgICAgICBAZGIuVmFyQ2hhcigyMCkKICBjYWxsZSAgICAgICAgICAgICAgICAgU3RyaW5nPwogIG51bV9pbnRlcmlvciAgICAgICAgICBTdHJpbmc/CiAgbnVtX2V4dGVyaW9yICAgICAgICAgIFN0cmluZz8KICB0ZWxlZm9ubyAgICAgICAgICAgICAgU3RyaW5nPwogIGNwICAgICAgICAgICAgICAgICAgICBTdHJpbmc/CiAgZW50cmVfY2FsbGUgICAgICAgICAgIFN0cmluZz8KICB5X2NhbGxlICAgICAgICAgICAgICAgU3RyaW5nPwogIGNhbGxlX3Bvc3RlcmlvciAgICAgICBTdHJpbmc/CiAgZGVzY3JpcGNpb25fdWJpY2FjaW9uIFN0cmluZz8gICAgICAgICAgICBAZGIuVGV4dAogIGlkX2VzdGFkbyAgICAgICAgICAgICBJbnQ/ICAgICAgICAgICAgICAgQGRiLlVuc2lnbmVkSW50CiAgaWRfbXVuaWNpcGlvICAgICAgICAgIEludD8gICAgICAgICAgICAgICBAZGIuVW5zaWduZWRJbnQKICBpZF9sb2NhbGlkYWQgICAgICAgICAgSW50PyAgICAgICAgICAgICAgIEBkYi5VbnNpZ25lZEludAogIGlkX2FzZW50YW1pZW50byAgICAgICBJbnQ/ICAgICAgICAgICAgICAgQGRiLlVuc2lnbmVkSW50CiAgaWRfcGVyc29uYSAgICAgICAgICAgIEludD8gICAgICAgICAgICAgICBAZGIuVW5zaWduZWRJbnQKICBpZFVzZXIgICAgICAgICAgICAgICAgSW50PwogIGNyZWF0ZWRfYXQgICAgICAgICAgICBEYXRlVGltZT8gICAgICAgICAgQGRiLlRpbWVzdGFtcCgwKQogIHVwZGF0ZWRfYXQgICAgICAgICAgICBEYXRlVGltZT8gICAgICAgICAgQGRiLlRpbWVzdGFtcCgwKQogIGRlbGV0ZWRfYXQgICAgICAgICAgICBEYXRlVGltZT8gICAgICAgICAgQGRiLlRpbWVzdGFtcCgwKQogIGNhdF9hc2VudGFtaWVudG9zICAgICBjYXRfYXNlbnRhbWllbnRvcz8gQHJlbGF0aW9uKGZpZWxkczogW2lkX2FzZW50YW1pZW50b10sIHJlZmVyZW5jZXM6IFtpZF0sIG9uRGVsZXRlOiBSZXN0cmljdCwgb25VcGRhdGU6IFJlc3RyaWN0LCBtYXA6ICJjbXBfZG9taWNpbGlvc19pZF9hc2VudGFtaWVudG9fZm9yZWlnbiIpCiAgY2F0X2VzdGFkb3MgICAgICAgICAgIGNhdF9lc3RhZG9zPyAgICAgICBAcmVsYXRpb24oZmllbGRzOiBbaWRfZXN0YWRvXSwgcmVmZXJlbmNlczogW2lkXSwgb25EZWxldGU6IFJlc3RyaWN0LCBvblVwZGF0ZTogUmVzdHJpY3QsIG1hcDogImNtcF9kb21pY2lsaW9zX2lkX2VzdGFkb19mb3JlaWduIikKICBjYXRfbG9jYWxpZGFkZXMgICAgICAgY2F0X2xvY2FsaWRhZGVzPyAgIEByZWxhdGlvbihmaWVsZHM6IFtpZF9sb2NhbGlkYWRdLCByZWZlcmVuY2VzOiBbaWRdLCBvbkRlbGV0ZTogUmVzdHJpY3QsIG9uVXBkYXRlOiBSZXN0cmljdCwgbWFwOiAiY21wX2RvbWljaWxpb3NfaWRfbG9jYWxpZGFkX2ZvcmVpZ24iKQogIGNhdF9tdW5pY2lwaW9zICAgICAgICBjYXRfbXVuaWNpcGlvcz8gICAgQHJlbGF0aW9uKGZpZWxkczogW2lkX211bmljaXBpb10sIHJlZmVyZW5jZXM6IFtpZF0sIG9uRGVsZXRlOiBSZXN0cmljdCwgb25VcGRhdGU6IFJlc3RyaWN0LCBtYXA6ICJjbXBfZG9taWNpbGlvc19pZF9tdW5pY2lwaW9fZm9yZWlnbiIpCiAgY21wX3BlcnNvbmEgICAgICAgICAgIGNtcF9wZXJzb25hPyAgICAgICBAcmVsYXRpb24oZmllbGRzOiBbaWRfcGVyc29uYV0sIHJlZmVyZW5jZXM6IFtpZF0sIG9uRGVsZXRlOiBSZXN0cmljdCwgb25VcGRhdGU6IFJlc3RyaWN0LCBtYXA6ICJjbXBfZG9taWNpbGlvc19pZF9wZXJzb25hX2ZvcmVpZ24iKQoKICBAQGluZGV4KFtpZF9hc2VudGFtaWVudG9dLCBtYXA6ICJjbXBfZG9taWNpbGlvc19pZF9hc2VudGFtaWVudG9fZm9yZWlnbiIpCiAgQEBpbmRleChbaWRfZXN0YWRvXSwgbWFwOiAiY21wX2RvbWljaWxpb3NfaWRfZXN0YWRvX2ZvcmVpZ24iKQogIEBAaW5kZXgoW2lkX2xvY2FsaWRhZF0sIG1hcDogImNtcF9kb21pY2lsaW9zX2lkX2xvY2FsaWRhZF9mb3JlaWduIikKICBAQGluZGV4KFtpZF9tdW5pY2lwaW9dLCBtYXA6ICJjbXBfZG9taWNpbGlvc19pZF9tdW5pY2lwaW9fZm9yZWlnbiIpCiAgQEBpbmRleChbaWRfcGVyc29uYV0sIG1hcDogImNtcF9kb21pY2lsaW9zX2lkX3BlcnNvbmFfZm9yZWlnbiIpCn0KCm1vZGVsIGNtcF9lZHVjYWNpb24gewogIGlkICAgICAgICAgICAgICAgIEludCAgICAgICAgICAgICAgIEBpZCBAZGVmYXVsdChhdXRvaW5jcmVtZW50KCkpIEBkYi5VbnNpZ25lZEludAogIGlkX3BlcnNvbmEgICAgICAgIEludCAgICAgICAgICAgICAgIEBkYi5VbnNpZ25lZEludAogIGlkX2VzY29sYXJpZGFkICAgIEludCAgICAgICAgICAgICAgIEBkYi5VbnNpZ25lZEludAogIGVzY3VlbGEgICAgICAgICAgIFN0cmluZz8KICBjYXJyZXJhICAgICAgICAgICBTdHJpbmc/CiAgcGVyaW9kb19pbmljaW8gICAgU3RyaW5nPyAgICAgICAgICAgQGRiLkNoYXIoMTkxKQogIHBlcmlvZG9fZmluICAgICAgIFN0cmluZz8gICAgICAgICAgIEBkYi5DaGFyKDE5MSkKICBjZWR1bGEgICAgICAgICAgICBTdHJpbmc/CiAgaWRVc2VyICAgICAgICAgICAgSW50PwogIGNyZWF0ZWRfYXQgICAgICAgIERhdGVUaW1lPyAgICAgICAgIEBkYi5UaW1lc3RhbXAoMCkKICB1cGRhdGVkX2F0ICAgICAgICBEYXRlVGltZT8gICAgICAgICBAZGIuVGltZXN0YW1wKDApCiAgZGVsZXRlZF9hdCAgICAgICAgRGF0ZVRpbWU/ICAgICAgICAgQGRiLlRpbWVzdGFtcCgwKQogIGNhdF9lc2NvbGFyaWRhZGVzIGNhdF9lc2NvbGFyaWRhZGVzIEByZWxhdGlvbihmaWVsZHM6IFtpZF9lc2NvbGFyaWRhZF0sIHJlZmVyZW5jZXM6IFtpZF0sIG9uVXBkYXRlOiBSZXN0cmljdCwgbWFwOiAiY21wX2VkdWNhY2lvbl9pZF9lc2NvbGFyaWRhZF9mb3JlaWduIikKICBjbXBfcGVyc29uYSAgICAgICBjbXBfcGVyc29uYSAgICAgICBAcmVsYXRpb24oZmllbGRzOiBbaWRfcGVyc29uYV0sIHJlZmVyZW5jZXM6IFtpZF0sIG9uVXBkYXRlOiBSZXN0cmljdCwgbWFwOiAiY21wX2VkdWNhY2lvbl9pZF9wZXJzb25hX2ZvcmVpZ24iKQoKICBAQGluZGV4KFtpZF9lc2NvbGFyaWRhZF0sIG1hcDogImNtcF9lZHVjYWNpb25faWRfZXNjb2xhcmlkYWRfZm9yZWlnbiIpCiAgQEBpbmRleChbaWRfcGVyc29uYV0sIG1hcDogImNtcF9lZHVjYWNpb25faWRfcGVyc29uYV9mb3JlaWduIikKfQoKbW9kZWwgY21wX2ZhbWlsaWFyZXMgewogIGlkICAgICAgICAgICAgICAgICAgICBJbnQgICAgICAgICAgICAgICAgQGlkIEBkZWZhdWx0KGF1dG9pbmNyZW1lbnQoKSkgQGRiLlVuc2lnbmVkSW50CiAgdGlwb19mYW1pbGlhciAgICAgICAgIFN0cmluZwogIHByaW1lcl9hcGVsbGlkbyAgICAgICBTdHJpbmcKICBzZWd1bmRvX2FwZWxsaWRvICAgICAgU3RyaW5nPwogIG5vbWJyZXMgICAgICAgICAgICAgICBTdHJpbmcKICBpZF9wYXJlbnRlc2NvICAgICAgICAgSW50PyAgICAgICAgICAgICAgIEBkYi5VbnNpZ25lZEludAogIGNhbGxlICAgICAgICAgICAgICAgICBTdHJpbmc/CiAgbnVtX2ludGVyaW9yICAgICAgICAgIFN0cmluZz8KICBudW1fZXh0ZXJpb3IgICAgICAgICAgU3RyaW5nPwogIHRlbGVmb25vICAgICAgICAgICAgICBTdHJpbmc/CiAgY3AgICAgICAgICAgICAgICAgICAgIFN0cmluZz8KICBlbnRyZV9jYWxsZSAgICAgICAgICAgU3RyaW5nPwogIHlfY2FsbGUgICAgICAgICAgICAgICBTdHJpbmc/CiAgY2FsbGVfcG9zdGVyaW9yICAgICAgIFN0cmluZz8KICBkZXNjcmlwY2lvbl91YmljYWNpb24gU3RyaW5nPyAgICAgICAgICAgIEBkYi5UZXh0CiAgaWRfZXN0YWRvICAgICAgICAgICAgIEludD8gICAgICAgICAgICAgICBAZGIuVW5zaWduZWRJbnQKICBpZF9tdW5pY2lwaW8gICAgICAgICAgSW50PyAgICAgICAgICAgICAgIEBkYi5VbnNpZ25lZEludAogIGlkX2xvY2FsaWRhZCAgICAgICAgICBJbnQ/ICAgICAgICAgICAgICAgQGRiLlVuc2lnbmVkSW50CiAgaWRfYXNlbnRhbWllbnRvICAgICAgIEludD8gICAgICAgICAgICAgICBAZGIuVW5zaWduZWRJbnQKICBpZF9wZXJzb25hICAgICAgICAgICAgSW50ICAgICAgICAgICAgICAgIEBkYi5VbnNpZ25lZEludAogIGlkVXNlciAgICAgICAgICAgICAgICBJbnQ/CiAgY3JlYXRlZF9hdCAgICAgICAgICAgIERhdGVUaW1lPyAgICAgICAgICBAZGIuVGltZXN0YW1wKDApCiAgdXBkYXRlZF9hdCAgICAgICAgICAgIERhdGVUaW1lPyAgICAgICAgICBAZGIuVGltZXN0YW1wKDApCiAgZGVsZXRlZF9hdCAgICAgICAgICAgIERhdGVUaW1lPyAgICAgICAgICBAZGIuVGltZXN0YW1wKDApCiAgY2F0X2FzZW50YW1pZW50b3MgICAgIGNhdF9hc2VudGFtaWVudG9zPyBAcmVsYXRpb24oZmllbGRzOiBbaWRfYXNlbnRhbWllbnRvXSwgcmVmZXJlbmNlczogW2lkXSwgb25EZWxldGU6IFJlc3RyaWN0LCBvblVwZGF0ZTogUmVzdHJpY3QsIG1hcDogImNtcF9mYW1pbGlhcmVzX2lkX2FzZW50YW1pZW50b19mb3JlaWduIikKICBjYXRfZXN0YWRvcyAgICAgICAgICAgY2F0X2VzdGFkb3M/ICAgICAgIEByZWxhdGlvbihmaWVsZHM6IFtpZF9lc3RhZG9dLCByZWZlcmVuY2VzOiBbaWRdLCBvbkRlbGV0ZTogUmVzdHJpY3QsIG9uVXBkYXRlOiBSZXN0cmljdCwgbWFwOiAiY21wX2ZhbWlsaWFyZXNfaWRfZXN0YWRvX2ZvcmVpZ24iKQogIGNhdF9sb2NhbGlkYWRlcyAgICAgICBjYXRfbG9jYWxpZGFkZXM/ICAgQHJlbGF0aW9uKGZpZWxkczogW2lkX2xvY2FsaWRhZF0sIHJlZmVyZW5jZXM6IFtpZF0sIG9uRGVsZXRlOiBSZXN0cmljdCwgb25VcGRhdGU6IFJlc3RyaWN0LCBtYXA6ICJjbXBfZmFtaWxpYXJlc19pZF9sb2NhbGlkYWRfZm9yZWlnbiIpCiAgY2F0X211bmljaXBpb3MgICAgICAgIGNhdF9tdW5pY2lwaW9zPyAgICBAcmVsYXRpb24oZmllbGRzOiBbaWRfbXVuaWNpcGlvXSwgcmVmZXJlbmNlczogW2lkXSwgb25EZWxldGU6IFJlc3RyaWN0LCBvblVwZGF0ZTogUmVzdHJpY3QsIG1hcDogImNtcF9mYW1pbGlhcmVzX2lkX211bmljaXBpb19mb3JlaWduIikKICBjYXRfcGFyZW50ZXNjb3MgICAgICAgY2F0X3BhcmVudGVzY29zPyAgIEByZWxhdGlvbihmaWVsZHM6IFtpZF9wYXJlbnRlc2NvXSwgcmVmZXJlbmNlczogW2lkXSwgb25EZWxldGU6IFJlc3RyaWN0LCBvblVwZGF0ZTogUmVzdHJpY3QsIG1hcDogImNtcF9mYW1pbGlhcmVzX2lkX3BhcmVudGVzY29fZm9yZWlnbiIpCiAgY21wX3BlcnNvbmEgICAgICAgICAgIGNtcF9wZXJzb25hICAgICAgICBAcmVsYXRpb24oZmllbGRzOiBbaWRfcGVyc29uYV0sIHJlZmVyZW5jZXM6IFtpZF0sIG9uVXBkYXRlOiBSZXN0cmljdCwgbWFwOiAiY21wX2ZhbWlsaWFyZXNfaWRfcGVyc29uYV9mb3JlaWduIikKCiAgQEBpbmRleChbaWRfYXNlbnRhbWllbnRvXSwgbWFwOiAiY21wX2ZhbWlsaWFyZXNfaWRfYXNlbnRhbWllbnRvX2ZvcmVpZ24iKQogIEBAaW5kZXgoW2lkX2VzdGFkb10sIG1hcDogImNtcF9mYW1pbGlhcmVzX2lkX2VzdGFkb19mb3JlaWduIikKICBAQGluZGV4KFtpZF9sb2NhbGlkYWRdLCBtYXA6ICJjbXBfZmFtaWxpYXJlc19pZF9sb2NhbGlkYWRfZm9yZWlnbiIpCiAgQEBpbmRleChbaWRfbXVuaWNpcGlvXSwgbWFwOiAiY21wX2ZhbWlsaWFyZXNfaWRfbXVuaWNpcGlvX2ZvcmVpZ24iKQogIEBAaW5kZXgoW2lkX3BhcmVudGVzY29dLCBtYXA6ICJjbXBfZmFtaWxpYXJlc19pZF9wYXJlbnRlc2NvX2ZvcmVpZ24iKQogIEBAaW5kZXgoW2lkX3BlcnNvbmFdLCBtYXA6ICJjbXBfZmFtaWxpYXJlc19pZF9wZXJzb25hX2ZvcmVpZ24iKQp9Cgptb2RlbCBjbXBfZmlybWFzIHsKICBpZCAgICAgICAgICAgSW50ICAgICAgIEBpZCBAZGVmYXVsdChhdXRvaW5jcmVtZW50KCkpIEBkYi5VbnNpZ25lZEludAogIG1vZGVsb19maXJtYSBTdHJpbmcKICBpbWFnZSAgICAgICAgU3RyaW5nICAgIEBkYi5UZXh0CiAgaWRfbW9kZWxvICAgIEludCAgICAgICBAZGIuVW5zaWduZWRJbnQKICBjcmVhdGVkX2F0ICAgRGF0ZVRpbWU/IEBkYi5UaW1lc3RhbXAoMCkKICB1cGRhdGVkX2F0ICAgRGF0ZVRpbWU/IEBkYi5UaW1lc3RhbXAoMCkKICBkZWxldGVkX2F0ICAgRGF0ZVRpbWU/IEBkYi5UaW1lc3RhbXAoMCkKfQoKbW9kZWwgY21wX3BlcnNvbmEgewogIGlkICAgICAgICAgICAgICAgICAgICAgICBJbnQgICAgICAgICAgICAgICAgICAgICAgQGlkIEBkZWZhdWx0KGF1dG9pbmNyZW1lbnQoKSkgQGRiLlVuc2lnbmVkSW50CiAgcHJpbWVyX2FwZWxsaWRvICAgICAgICAgIFN0cmluZz8KICBzZWd1bmRvX2FwZWxsaWRvICAgICAgICAgU3RyaW5nPwogIG5vbWJyZXMgICAgICAgICAgICAgICAgICBTdHJpbmc/CiAgZmVjaGFfbmFjaW1pZW50byAgICAgICAgIERhdGVUaW1lPyAgICAgICAgICAgICAgICBAZGIuRGF0ZQogIGN1cnAgICAgICAgICAgICAgICAgICAgICBTdHJpbmc/ICAgICAgICAgICAgICAgICAgQGRiLkNoYXIoNTApCiAgcmZjICAgICAgICAgICAgICAgICAgICAgIFN0cmluZz8gICAgICAgICAgICAgICAgICBAZGIuQ2hhcig1MCkKICBzZXhvICAgICAgICAgICAgICAgICAgICAgY21wX3BlcnNvbmFfc2V4bwogIGVzdGFkb19uYWNpbWllbnRvICAgICAgICBTdHJpbmcgICAgICAgICAgICAgICAgICAgQGRlZmF1bHQoIlhYIikgQGRiLkNoYXIoMikKICBtZWRpb3NfY29tdW5pY2FjaW9uICAgICAgU3RyaW5nPyAgICAgICAgICAgICAgICAgIEBkYi5UZXh0CiAgZmVjaGFfZGVmdW5jaW9uICAgICAgICAgIERhdGVUaW1lPyAgICAgICAgICAgICAgICBAZGIuRGF0ZQogIGRlZnVuY2lvbl9vYnNlcnZhY2lvbmVzICBTdHJpbmc/ICAgICAgICAgICAgICAgICAgQGRiLlRleHQKICBpZF9vY3VwYWNpb24gICAgICAgICAgICAgSW50ICAgICAgICAgICAgICAgICAgICAgIEBkZWZhdWx0KDEpIEBkYi5VbnNpZ25lZEludAogIGlkX2VzdGFkb2NpdmlsICAgICAgICAgICBJbnQgICAgICAgICAgICAgICAgICAgICAgQGRlZmF1bHQoMSkgQGRiLlVuc2lnbmVkSW50CiAgaWRfdGlwb3NhbmdyZSAgICAgICAgICAgIEludD8gICAgICAgICAgICAgICAgICAgICBAZGIuVW5zaWduZWRJbnQKICBpZF9lc2NvbGFyaWRhZCAgICAgICAgICAgSW50PyAgICAgICAgICAgICAgICAgICAgIEBkYi5VbnNpZ25lZEludAogIGlkX3JlbGlnaW9uICAgICAgICAgICAgICBJbnQ/ICAgICAgICAgICAgICAgICAgICAgQGRiLlVuc2lnbmVkSW50CiAgaWRfbmFjaW9uYWxpZGFkICAgICAgICAgIEludD8gICAgICAgICAgICAgICAgICAgICBAZGIuVW5zaWduZWRJbnQKICBjdXJwX3ZlcmlmaWNhZGEgICAgICAgICAgQm9vbGVhbiAgICAgICAgICAgICAgICAgIEBkZWZhdWx0KGZhbHNlKQogIG1vdGl2b192ZXJpZmljYWNpb25fY3VycCBTdHJpbmc/CiAgY3JlYXRlZF91c2VyICAgICAgICAgICAgIFN0cmluZz8KICBjcmVhdGVkX2F0ICAgICAgICAgICAgICAgRGF0ZVRpbWU/ICAgICAgICAgICAgICAgIEBkYi5UaW1lc3RhbXAoMCkKICB1cGRhdGVkX2F0ICAgICAgICAgICAgICAgRGF0ZVRpbWU/ICAgICAgICAgICAgICAgIEBkYi5UaW1lc3RhbXAoMCkKICBkZWxldGVkX2F0ICAgICAgICAgICAgICAgRGF0ZVRpbWU/ICAgICAgICAgICAgICAgIEBkYi5UaW1lc3RhbXAoMCkKICBjbXBfY29udGFjdG9zICAgICAgICAgICAgY21wX2NvbnRhY3Rvc1tdCiAgY21wX2RvbWljaWxpb3MgICAgICAgICAgIGNtcF9kb21pY2lsaW9zW10KICBjbXBfZWR1Y2FjaW9uICAgICAgICAgICAgY21wX2VkdWNhY2lvbltdCiAgY21wX2ZhbWlsaWFyZXMgICAgICAgICAgIGNtcF9mYW1pbGlhcmVzW10KICBjYXRfZXNjb2xhcmlkYWRlcyAgICAgICAgY2F0X2VzY29sYXJpZGFkZXM/ICAgICAgIEByZWxhdGlvbihmaWVsZHM6IFtpZF9lc2NvbGFyaWRhZF0sIHJlZmVyZW5jZXM6IFtpZF0sIG9uRGVsZXRlOiBSZXN0cmljdCwgb25VcGRhdGU6IFJlc3RyaWN0LCBtYXA6ICJjbXBfcGVyc29uYV9pZF9lc2NvbGFyaWRhZF9mb3JlaWduIikKICBjYXRfZXN0YWRvX2NpdmlsICAgICAgICAgY2F0X2VzdGFkb19jaXZpbCAgICAgICAgIEByZWxhdGlvbihmaWVsZHM6IFtpZF9lc3RhZG9jaXZpbF0sIHJlZmVyZW5jZXM6IFtpZF0sIG9uVXBkYXRlOiBSZXN0cmljdCwgbWFwOiAiY21wX3BlcnNvbmFfaWRfZXN0YWRvY2l2aWxfZm9yZWlnbiIpCiAgY2F0X25hY2lvbmFsaWRhZGVzICAgICAgIGNhdF9uYWNpb25hbGlkYWRlcz8gICAgICBAcmVsYXRpb24oZmllbGRzOiBbaWRfbmFjaW9uYWxpZGFkXSwgcmVmZXJlbmNlczogW2lkXSwgb25EZWxldGU6IFJlc3RyaWN0LCBvblVwZGF0ZTogUmVzdHJpY3QsIG1hcDogImNtcF9wZXJzb25hX2lkX25hY2lvbmFsaWRhZF9mb3JlaWduIikKICBjYXRfb2N1cGFjaW9uZXMgICAgICAgICAgY2F0X29jdXBhY2lvbmVzICAgICAgICAgIEByZWxhdGlvbihmaWVsZHM6IFtpZF9vY3VwYWNpb25dLCByZWZlcmVuY2VzOiBbaWRdLCBvblVwZGF0ZTogUmVzdHJpY3QsIG1hcDogImNtcF9wZXJzb25hX2lkX29jdXBhY2lvbl9mb3JlaWduIikKICBjYXRfcmVsaWdpb25lcyAgICAgICAgICAgY2F0X3JlbGlnaW9uZXM/ICAgICAgICAgIEByZWxhdGlvbihmaWVsZHM6IFtpZF9yZWxpZ2lvbl0sIHJlZmVyZW5jZXM6IFtpZF0sIG9uRGVsZXRlOiBSZXN0cmljdCwgb25VcGRhdGU6IFJlc3RyaWN0LCBtYXA6ICJjbXBfcGVyc29uYV9pZF9yZWxpZ2lvbl9mb3JlaWduIikKICBjYXRfdGlwb19zYW5ncmUgICAgICAgICAgY2F0X3RpcG9fc2FuZ3JlPyAgICAgICAgIEByZWxhdGlvbihmaWVsZHM6IFtpZF90aXBvc2FuZ3JlXSwgcmVmZXJlbmNlczogW2lkXSwgb25EZWxldGU6IFJlc3RyaWN0LCBvblVwZGF0ZTogUmVzdHJpY3QsIG1hcDogImNtcF9wZXJzb25hX2lkX3RpcG9zYW5ncmVfZm9yZWlnbiIpCiAgaHB6X3BhY2llbnRlICAgICAgICAgICAgIGhwel9wYWNpZW50ZVtdCiAgaHB6X3BhdG9sb2dpYV9lc3R1ZGlvcyAgIGhwel9wYXRvbG9naWFfZXN0dWRpb3NbXQogIHJjaF9lbXBsZWFkb3MgICAgICAgICAgICByY2hfZW1wbGVhZG9zW10KICByY2hfZW1wbGVhZG9zX2V4dGVybm9zICAgcmNoX2VtcGxlYWRvc19leHRlcm5vc1tdCiAgdXNlcnMgICAgICAgICAgICAgICAgICAgIHVzZXJzW10KCiAgQEBpbmRleChbaWRfZXNjb2xhcmlkYWRdLCBtYXA6ICJjbXBfcGVyc29uYV9pZF9lc2NvbGFyaWRhZF9mb3JlaWduIikKICBAQGluZGV4KFtpZF9lc3RhZG9jaXZpbF0sIG1hcDogImNtcF9wZXJzb25hX2lkX2VzdGFkb2NpdmlsX2ZvcmVpZ24iKQogIEBAaW5kZXgoW2lkX25hY2lvbmFsaWRhZF0sIG1hcDogImNtcF9wZXJzb25hX2lkX25hY2lvbmFsaWRhZF9mb3JlaWduIikKICBAQGluZGV4KFtpZF9vY3VwYWNpb25dLCBtYXA6ICJjbXBfcGVyc29uYV9pZF9vY3VwYWNpb25fZm9yZWlnbiIpCiAgQEBpbmRleChbaWRfcmVsaWdpb25dLCBtYXA6ICJjbXBfcGVyc29uYV9pZF9yZWxpZ2lvbl9mb3JlaWduIikKICBAQGluZGV4KFtpZF90aXBvc2FuZ3JlXSwgbWFwOiAiY21wX3BlcnNvbmFfaWRfdGlwb3NhbmdyZV9mb3JlaWduIikKfQoKbW9kZWwgZW5mX2VzY2FsYV92YWxvcmFjaW9uIHsKICBpZCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBCaWdJbnQgICAgICAgICAgICAgICAgICAgQGlkIEBkZWZhdWx0KGF1dG9pbmNyZW1lbnQoKSkgQGRiLlVuc2lnbmVkQmlnSW50CiAgaWRfZXZhICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQmlnSW50PyAgICAgICAgICAgICAgICAgIEBkYi5VbnNpZ25lZEJpZ0ludAogIHB1bnRvc19ldmEgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEludD8gICAgICAgICAgICAgICAgICAgICBAZGIuVW5zaWduZWRJbnQKICBpZF9jcml0ZXJpb19vY3VsYXIgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBCaWdJbnQ/ICAgICAgICAgICAgICAgICAgQGRiLlVuc2lnbmVkQmlnSW50CiAgcHVudG9zX2NyaXRlcmlvX29jdWxhciAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSW50PyAgICAgICAgICAgICAgICAgICAgIEBkYi5VbnNpZ25lZEludAogIGlkX2NyaXRlcmlvX3ZlcmJhbCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEJpZ0ludD8gICAgICAgICAgICAgICAgICBAZGIuVW5zaWduZWRCaWdJbnQKICBwdW50b3NfY3JpdGVyaW9fdmVyYmFsICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBJbnQ/ICAgICAgICAgICAgICAgICAgICAgQGRiLlVuc2lnbmVkSW50CiAgaWRfY3JpdGVyaW9fbW90b3JhICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQmlnSW50PyAgICAgICAgICAgICAgICAgIEBkYi5VbnNpZ25lZEJpZ0ludAogIHB1bnRvc19jcml0ZXJpb19tb3RvcmEgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEludD8gICAgICAgICAgICAgICAgICAgICBAZGIuVW5zaWduZWRJbnQKICByaWVzZ29fY2FpZGFzICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTdHJpbmc/ICAgICAgICAgICAgICAgICAgQGRiLlRleHQKICBwdW50b3Nfcmllc2dvX2NhaWRhcyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBJbnQ/ICAgICAgICAgICAgICAgICAgICAgQGRiLlVuc2lnbmVkSW50CiAgaWRfcGVyY2VwY2lvbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQmlnSW50PyAgICAgICAgICAgICAgICAgIEBkYi5VbnNpZ25lZEJpZ0ludAogIHB1bnRvc19wZXJjZXBjaW9uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEludD8gICAgICAgICAgICAgICAgICAgICBAZGIuVW5zaWduZWRJbnQKICBpZF9odW1lZGFkICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBCaWdJbnQ/ICAgICAgICAgICAgICAgICAgQGRiLlVuc2lnbmVkQmlnSW50CiAgcHVudG9zX2h1bWVkYWQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSW50PyAgICAgICAgICAgICAgICAgICAgIEBkYi5VbnNpZ25lZEludAogIGlkX2FjdGl2aWRhZCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEJpZ0ludD8gICAgICAgICAgICAgICAgICBAZGIuVW5zaWduZWRCaWdJbnQKICBwdW50b3NfYWN0aXZpZGFkICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBJbnQ/ICAgICAgICAgICAgICAgICAgICAgQGRiLlVuc2lnbmVkSW50CiAgaWRfbW92aWxpZGFkICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQmlnSW50PyAgICAgICAgICAgICAgICAgIEBkYi5VbnNpZ25lZEJpZ0ludAogIHB1bnRvc19tb3ZpbGlkYWQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEludD8gICAgICAgICAgICAgICAgICAgICBAZGIuVW5zaWduZWRJbnQKICBpZF9udXRyaWNpb24gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBCaWdJbnQ/ICAgICAgICAgICAgICAgICAgQGRiLlVuc2lnbmVkQmlnSW50CiAgcHVudG9zX251dHJpY2lvbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSW50PyAgICAgICAgICAgICAgICAgICAgIEBkYi5VbnNpZ25lZEludAogIGlkX3JvY2VfbGVzaW9uZXMgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEJpZ0ludD8gICAgICAgICAgICAgICAgICBAZGIuVW5zaWduZWRCaWdJbnQKICBwdW50b3NfbGVzaW9uZXMgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBJbnQ/ICAgICAgICAgICAgICAgICAgICAgQGRiLlVuc2lnbmVkSW50CiAgaWRfaW5ncmVzbyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSW50ICAgICAgICAgICAgICAgICAgICAgIEBkYi5VbnNpZ25lZEludAogIGlkX3VzZXIgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEludD8gICAgICAgICAgICAgICAgICAgICBAZGIuVW5zaWduZWRJbnQKICBpZF9hdXRvcml6byAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBJbnQ/ICAgICAgICAgICAgICAgICAgICAgQGRiLlVuc2lnbmVkSW50CiAgaWRfY2FuY2VsbyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSW50PyAgICAgICAgICAgICAgICAgICAgIEBkYi5VbnNpZ25lZEludAogIGNyZWF0ZWRfYXQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIERhdGVUaW1lPyAgICAgICAgICAgICAgICBAZGIuVGltZXN0YW1wKDApCiAgdXBkYXRlZF9hdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRGF0ZVRpbWU/ICAgICAgICAgICAgICAgIEBkYi5UaW1lc3RhbXAoMCkKICBkZWxldGVkX2F0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBEYXRlVGltZT8gICAgICAgICAgICAgICAgQGRiLlRpbWVzdGFtcCgwKQogIGNhdF9lbmZlcm1lcmlhX2VuZl9lc2NhbGFfdmFsb3JhY2lvbl9pZF9hY3RpdmlkYWRUb2NhdF9lbmZlcm1lcmlhICAgICAgIGNhdF9lbmZlcm1lcmlhPyAgICAgICAgICBAcmVsYXRpb24oImVuZl9lc2NhbGFfdmFsb3JhY2lvbl9pZF9hY3RpdmlkYWRUb2NhdF9lbmZlcm1lcmlhIiwgZmllbGRzOiBbaWRfYWN0aXZpZGFkXSwgcmVmZXJlbmNlczogW2lkXSwgb25EZWxldGU6IFJlc3RyaWN0LCBvblVwZGF0ZTogUmVzdHJpY3QsIG1hcDogImVuZl9lc2NhbGFfdmFsb3JhY2lvbl9pZF9hY3RpdmlkYWRfZm9yZWlnbiIpCiAgdXNlcnNfZW5mX2VzY2FsYV92YWxvcmFjaW9uX2lkX2F1dG9yaXpvVG91c2VycyAgICAgICAgICAgICAgICAgICAgICAgICAgdXNlcnM/ICAgICAgICAgICAgICAgICAgIEByZWxhdGlvbigiZW5mX2VzY2FsYV92YWxvcmFjaW9uX2lkX2F1dG9yaXpvVG91c2VycyIsIGZpZWxkczogW2lkX2F1dG9yaXpvXSwgcmVmZXJlbmNlczogW2lkXSwgb25EZWxldGU6IFJlc3RyaWN0LCBvblVwZGF0ZTogUmVzdHJpY3QsIG1hcDogImVuZl9lc2NhbGFfdmFsb3JhY2lvbl9pZF9hdXRvcml6b19mb3JlaWduIikKICB1c2Vyc19lbmZfZXNjYWxhX3ZhbG9yYWNpb25faWRfY2FuY2Vsb1RvdXNlcnMgICAgICAgICAgICAgICAgICAgICAgICAgICB1c2Vycz8gICAgICAgICAgICAgICAgICAgQHJlbGF0aW9uKCJlbmZfZXNjYWxhX3ZhbG9yYWNpb25faWRfY2FuY2Vsb1RvdXNlcnMiLCBmaWVsZHM6IFtpZF9jYW5jZWxvXSwgcmVmZXJlbmNlczogW2lkXSwgb25EZWxldGU6IFJlc3RyaWN0LCBvblVwZGF0ZTogUmVzdHJpY3QsIG1hcDogImVuZl9lc2NhbGFfdmFsb3JhY2lvbl9pZF9jYW5jZWxvX2ZvcmVpZ24iKQogIGNhdF9lbmZlcm1lcmlhX2VuZl9lc2NhbGFfdmFsb3JhY2lvbl9pZF9jcml0ZXJpb19tb3RvcmFUb2NhdF9lbmZlcm1lcmlhIGNhdF9lbmZlcm1lcmlhPyAgICAgICAgICBAcmVsYXRpb24oImVuZl9lc2NhbGFfdmFsb3JhY2lvbl9pZF9jcml0ZXJpb19tb3RvcmFUb2NhdF9lbmZlcm1lcmlhIiwgZmllbGRzOiBbaWRfY3JpdGVyaW9fbW90b3JhXSwgcmVmZXJlbmNlczogW2lkXSwgb25EZWxldGU6IFJlc3RyaWN0LCBvblVwZGF0ZTogUmVzdHJpY3QsIG1hcDogImVuZl9lc2NhbGFfdmFsb3JhY2lvbl9pZF9jcml0ZXJpb19tb3RvcmFfZm9yZWlnbiIpCiAgY2F0X2VuZmVybWVyaWFfZW5mX2VzY2FsYV92YWxvcmFjaW9uX2lkX2NyaXRlcmlvX29jdWxhclRvY2F0X2VuZmVybWVyaWEgY2F0X2VuZmVybWVyaWE/ICAgICAgICAgIEByZWxhdGlvbigiZW5mX2VzY2FsYV92YWxvcmFjaW9uX2lkX2NyaXRlcmlvX29jdWxhclRvY2F0X2VuZmVybWVyaWEiLCBmaWVsZHM6IFtpZF9jcml0ZXJpb19vY3VsYXJdLCByZWZlcmVuY2VzOiBbaWRdLCBvbkRlbGV0ZTogUmVzdHJpY3QsIG9uVXBkYXRlOiBSZXN0cmljdCwgbWFwOiAiZW5mX2VzY2FsYV92YWxvcmFjaW9uX2lkX2NyaXRlcmlvX29jdWxhcl9mb3JlaWduIikKICBjYXRfZW5mZXJtZXJpYV9lbmZfZXNjYWxhX3ZhbG9yYWNpb25faWRfY3JpdGVyaW9fdmVyYmFsVG9jYXRfZW5mZXJtZXJpYSBjYXRfZW5mZXJtZXJpYT8gICAgICAgICAgQHJlbGF0aW9uKCJlbmZfZXNjYWxhX3ZhbG9yYWNpb25faWRfY3JpdGVyaW9fdmVyYmFsVG9jYXRfZW5mZXJtZXJpYSIsIGZpZWxkczogW2lkX2NyaXRlcmlvX3ZlcmJhbF0sIHJlZmVyZW5jZXM6IFtpZF0sIG9uRGVsZXRlOiBSZXN0cmljdCwgb25VcGRhdGU6IFJlc3RyaWN0LCBtYXA6ICJlbmZfZXNjYWxhX3ZhbG9yYWNpb25faWRfY3JpdGVyaW9fdmVyYmFsX2ZvcmVpZ24iKQogIGNhdF9lbmZlcm1lcmlhX2VuZl9lc2NhbGFfdmFsb3JhY2lvbl9pZF9ldmFUb2NhdF9lbmZlcm1lcmlhICAgICAgICAgICAgIGNhdF9lbmZlcm1lcmlhPyAgICAgICAgICBAcmVsYXRpb24oImVuZl9lc2NhbGFfdmFsb3JhY2lvbl9pZF9ldmFUb2NhdF9lbmZlcm1lcmlhIiwgZmllbGRzOiBbaWRfZXZhXSwgcmVmZXJlbmNlczogW2lkXSwgb25EZWxldGU6IFJlc3RyaWN0LCBvblVwZGF0ZTogUmVzdHJpY3QsIG1hcDogImVuZl9lc2NhbGFfdmFsb3JhY2lvbl9pZF9ldmFfZm9yZWlnbiIpCiAgY2F0X2VuZmVybWVyaWFfZW5mX2VzY2FsYV92YWxvcmFjaW9uX2lkX2h1bWVkYWRUb2NhdF9lbmZlcm1lcmlhICAgICAgICAgY2F0X2VuZmVybWVyaWE/ICAgICAgICAgIEByZWxhdGlvbigiZW5mX2VzY2FsYV92YWxvcmFjaW9uX2lkX2h1bWVkYWRUb2NhdF9lbmZlcm1lcmlhIiwgZmllbGRzOiBbaWRfaHVtZWRhZF0sIHJlZmVyZW5jZXM6IFtpZF0sIG9uRGVsZXRlOiBSZXN0cmljdCwgb25VcGRhdGU6IFJlc3RyaWN0LCBtYXA6ICJlbmZfZXNjYWxhX3ZhbG9yYWNpb25faWRfaHVtZWRhZF9mb3JlaWduIikKICBocHpfaW5ncmVzb19ob3NwaXRhbGFyaW8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBocHpfaW5ncmVzb19ob3NwaXRhbGFyaW8gQHJlbGF0aW9uKGZpZWxkczogW2lkX2luZ3Jlc29dLCByZWZlcmVuY2VzOiBbaWRdLCBvblVwZGF0ZTogUmVzdHJpY3QsIG1hcDogImVuZl9lc2NhbGFfdmFsb3JhY2lvbl9pZF9pbmdyZXNvX2ZvcmVpZ24iKQogIGNhdF9lbmZlcm1lcmlhX2VuZl9lc2NhbGFfdmFsb3JhY2lvbl9pZF9tb3ZpbGlkYWRUb2NhdF9lbmZlcm1lcmlhICAgICAgIGNhdF9lbmZlcm1lcmlhPyAgICAgICAgICBAcmVsYXRpb24oImVuZl9lc2NhbGFfdmFsb3JhY2lvbl9pZF9tb3ZpbGlkYWRUb2NhdF9lbmZlcm1lcmlhIiwgZmllbGRzOiBbaWRfbW92aWxpZGFkXSwgcmVmZXJlbmNlczogW2lkXSwgb25EZWxldGU6IFJlc3RyaWN0LCBvblVwZGF0ZTogUmVzdHJpY3QsIG1hcDogImVuZl9lc2NhbGFfdmFsb3JhY2lvbl9pZF9tb3ZpbGlkYWRfZm9yZWlnbiIpCiAgY2F0X2VuZmVybWVyaWFfZW5mX2VzY2FsYV92YWxvcmFjaW9uX2lkX251dHJpY2lvblRvY2F0X2VuZmVybWVyaWEgICAgICAgY2F0X2VuZmVybWVyaWE/ICAgICAgICAgIEByZWxhdGlvbigiZW5mX2VzY2FsYV92YWxvcmFjaW9uX2lkX251dHJpY2lvblRvY2F0X2VuZmVybWVyaWEiLCBmaWVsZHM6IFtpZF9udXRyaWNpb25dLCByZWZlcmVuY2VzOiBbaWRdLCBvbkRlbGV0ZTogUmVzdHJpY3QsIG9uVXBkYXRlOiBSZXN0cmljdCwgbWFwOiAiZW5mX2VzY2FsYV92YWxvcmFjaW9uX2lkX251dHJpY2lvbl9mb3JlaWduIikKICBjYXRfZW5mZXJtZXJpYV9lbmZfZXNjYWxhX3ZhbG9yYWNpb25faWRfcGVyY2VwY2lvblRvY2F0X2VuZmVybWVyaWEgICAgICBjYXRfZW5mZXJtZXJpYT8gICAgICAgICAgQHJlbGF0aW9uKCJlbmZfZXNjYWxhX3ZhbG9yYWNpb25faWRfcGVyY2VwY2lvblRvY2F0X2VuZmVybWVyaWEiLCBmaWVsZHM6IFtpZF9wZXJjZXBjaW9uXSwgcmVmZXJlbmNlczogW2lkXSwgb25EZWxldGU6IFJlc3RyaWN0LCBvblVwZGF0ZTogUmVzdHJpY3QsIG1hcDogImVuZl9lc2NhbGFfdmFsb3JhY2lvbl9pZF9wZXJjZXBjaW9uX2ZvcmVpZ24iKQogIGNhdF9lbmZlcm1lcmlhX2VuZl9lc2NhbGFfdmFsb3JhY2lvbl9pZF9yb2NlX2xlc2lvbmVzVG9jYXRfZW5mZXJtZXJpYSAgIGNhdF9lbmZlcm1lcmlhPyAgICAgICAgICBAcmVsYXRpb24oImVuZl9lc2NhbGFfdmFsb3JhY2lvbl9pZF9yb2NlX2xlc2lvbmVzVG9jYXRfZW5mZXJtZXJpYSIsIGZpZWxkczogW2lkX3JvY2VfbGVzaW9uZXNdLCByZWZlcmVuY2VzOiBbaWRdLCBvbkRlbGV0ZTogUmVzdHJpY3QsIG9uVXBkYXRlOiBSZXN0cmljdCwgbWFwOiAiZW5mX2VzY2FsYV92YWxvcmFjaW9uX2lkX3JvY2VfbGVzaW9uZXNfZm9yZWlnbiIpCiAgdXNlcnNfZW5mX2VzY2FsYV92YWxvcmFjaW9uX2lkX3VzZXJUb3VzZXJzICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXNlcnM/ICAgICAgICAgICAgICAgICAgIEByZWxhdGlvbigiZW5mX2VzY2FsYV92YWxvcmFjaW9uX2lkX3VzZXJUb3VzZXJzIiwgZmllbGRzOiBbaWRfdXNlcl0sIHJlZmVyZW5jZXM6IFtpZF0sIG9uRGVsZXRlOiBSZXN0cmljdCwgb25VcGRhdGU6IFJlc3RyaWN0LCBtYXA6ICJlbmZfZXNjYWxhX3ZhbG9yYWNpb25faWRfdXNlcl9mb3JlaWduIikKCiAgQEBpbmRleChbaWRfYWN0aXZpZGFkXSwgbWFwOiAiZW5mX2VzY2FsYV92YWxvcmFjaW9uX2lkX2FjdGl2aWRhZF9mb3JlaWduIikKICBAQGluZGV4KFtpZF9hdXRvcml6b10sIG1hcDogImVuZl9lc2NhbGFfdmFsb3JhY2lvbl9pZF9hdXRvcml6b19mb3JlaWduIikKICBAQGluZGV4KFtpZF9jYW5jZWxvXSwgbWFwOiAiZW5mX2VzY2FsYV92YWxvcmFjaW9uX2lkX2NhbmNlbG9fZm9yZWlnbiIpCiAgQEBpbmRleChbaWRfY3JpdGVyaW9fbW90b3JhXSwgbWFwOiAiZW5mX2VzY2FsYV92YWxvcmFjaW9uX2lkX2NyaXRlcmlvX21vdG9yYV9mb3JlaWduIikKICBAQGluZGV4KFtpZF9jcml0ZXJpb19vY3VsYXJdLCBtYXA6ICJlbmZfZXNjYWxhX3ZhbG9yYWNpb25faWRfY3JpdGVyaW9fb2N1bGFyX2ZvcmVpZ24iKQogIEBAaW5kZXgoW2lkX2NyaXRlcmlvX3ZlcmJhbF0sIG1hcDogImVuZl9lc2NhbGFfdmFsb3JhY2lvbl9pZF9jcml0ZXJpb192ZXJiYWxfZm9yZWlnbiIpCiAgQEBpbmRleChbaWRfZXZhXSwgbWFwOiAiZW5mX2VzY2FsYV92YWxvcmFjaW9uX2lkX2V2YV9mb3JlaWduIikKICBAQGluZGV4KFtpZF9odW1lZGFkXSwgbWFwOiAiZW5mX2VzY2FsYV92YWxvcmFjaW9uX2lkX2h1bWVkYWRfZm9yZWlnbiIpCiAgQEBpbmRleChbaWRfaW5ncmVzb10sIG1hcDogImVuZl9lc2NhbGFfdmFsb3JhY2lvbl9pZF9pbmdyZXNvX2ZvcmVpZ24iKQogIEBAaW5kZXgoW2lkX21vdmlsaWRhZF0sIG1hcDogImVuZl9lc2NhbGFfdmFsb3JhY2lvbl9pZF9tb3ZpbGlkYWRfZm9yZWlnbiIpCiAgQEBpbmRleChbaWRfbnV0cmljaW9uXSwgbWFwOiAiZW5mX2VzY2FsYV92YWxvcmFjaW9uX2lkX251dHJpY2lvbl9mb3JlaWduIikKICBAQGluZGV4KFtpZF9wZXJjZXBjaW9uXSwgbWFwOiAiZW5mX2VzY2FsYV92YWxvcmFjaW9uX2lkX3BlcmNlcGNpb25fZm9yZWlnbiIpCiAgQEBpbmRleChbaWRfcm9jZV9sZXNpb25lc10sIG1hcDogImVuZl9lc2NhbGFfdmFsb3JhY2lvbl9pZF9yb2NlX2xlc2lvbmVzX2ZvcmVpZ24iKQogIEBAaW5kZXgoW2lkX3VzZXJdLCBtYXA6ICJlbmZfZXNjYWxhX3ZhbG9yYWNpb25faWRfdXNlcl9mb3JlaWduIikKfQoKbW9kZWwgZW5mX21lZGlkYXNfYW50cm9wb21ldHJpY2FzIHsKICBpZCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEJpZ0ludCAgICAgICAgICAgICAgICAgICBAaWQgQGRlZmF1bHQoYXV0b2luY3JlbWVudCgpKSBAZGIuVW5zaWduZWRCaWdJbnQKICBwZXNvICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEludAogIHRhbGxhICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRGVjaW1hbD8gICAgICAgICAgICAgICAgIEBkYi5EZWNpbWFsKDQsIDIpCiAgaWRfaW5ncmVzbyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBJbnQgICAgICAgICAgICAgICAgICAgICAgQGRiLlVuc2lnbmVkSW50CiAgaWRfdXNlciAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBJbnQ/ICAgICAgICAgICAgICAgICAgICAgQGRiLlVuc2lnbmVkSW50CiAgaWRfYXV0b3Jpem8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBJbnQ/ICAgICAgICAgICAgICAgICAgICAgQGRiLlVuc2lnbmVkSW50CiAgaWRfY2FuY2VsbyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBJbnQ/ICAgICAgICAgICAgICAgICAgICAgQGRiLlVuc2lnbmVkSW50CiAgY3JlYXRlZF9hdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBEYXRlVGltZT8gICAgICAgICAgICAgICAgQGRiLlRpbWVzdGFtcCgwKQogIHVwZGF0ZWRfYXQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRGF0ZVRpbWU/ICAgICAgICAgICAgICAgIEBkYi5UaW1lc3RhbXAoMCkKICBkZWxldGVkX2F0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIERhdGVUaW1lPyAgICAgICAgICAgICAgICBAZGIuVGltZXN0YW1wKDApCiAgdXNlcnNfZW5mX21lZGlkYXNfYW50cm9wb21ldHJpY2FzX2lkX2F1dG9yaXpvVG91c2VycyB1c2Vycz8gICAgICAgICAgICAgICAgICAgQHJlbGF0aW9uKCJlbmZfbWVkaWRhc19hbnRyb3BvbWV0cmljYXNfaWRfYXV0b3Jpem9Ub3VzZXJzIiwgZmllbGRzOiBbaWRfYXV0b3Jpem9dLCByZWZlcmVuY2VzOiBbaWRdLCBvbkRlbGV0ZTogUmVzdHJpY3QsIG9uVXBkYXRlOiBSZXN0cmljdCwgbWFwOiAiZW5mX21lZGlkYXNfYW50cm9wb21ldHJpY2FzX2lkX2F1dG9yaXpvX2ZvcmVpZ24iKQogIHVzZXJzX2VuZl9tZWRpZGFzX2FudHJvcG9tZXRyaWNhc19pZF9jYW5jZWxvVG91c2VycyAgdXNlcnM/ICAgICAgICAgICAgICAgICAgIEByZWxhdGlvbigiZW5mX21lZGlkYXNfYW50cm9wb21ldHJpY2FzX2lkX2NhbmNlbG9Ub3VzZXJzIiwgZmllbGRzOiBbaWRfY2FuY2Vsb10sIHJlZmVyZW5jZXM6IFtpZF0sIG9uRGVsZXRlOiBSZXN0cmljdCwgb25VcGRhdGU6IFJlc3RyaWN0LCBtYXA6ICJlbmZfbWVkaWRhc19hbnRyb3BvbWV0cmljYXNfaWRfY2FuY2Vsb19mb3JlaWduIikKICBocHpfaW5ncmVzb19ob3NwaXRhbGFyaW8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhwel9pbmdyZXNvX2hvc3BpdGFsYXJpbyBAcmVsYXRpb24oZmllbGRzOiBbaWRfaW5ncmVzb10sIHJlZmVyZW5jZXM6IFtpZF0sIG9uVXBkYXRlOiBSZXN0cmljdCwgbWFwOiAiZW5mX21lZGlkYXNfYW50cm9wb21ldHJpY2FzX2lkX2luZ3Jlc29fZm9yZWlnbiIpCiAgdXNlcnNfZW5mX21lZGlkYXNfYW50cm9wb21ldHJpY2FzX2lkX3VzZXJUb3VzZXJzICAgICB1c2Vycz8gICAgICAgICAgICAgICAgICAgQHJlbGF0aW9uKCJlbmZfbWVkaWRhc19hbnRyb3BvbWV0cmljYXNfaWRfdXNlclRvdXNlcnMiLCBmaWVsZHM6IFtpZF91c2VyXSwgcmVmZXJlbmNlczogW2lkXSwgb25EZWxldGU6IFJlc3RyaWN0LCBvblVwZGF0ZTogUmVzdHJpY3QsIG1hcDogImVuZl9tZWRpZGFzX2FudHJvcG9tZXRyaWNhc19pZF91c2VyX2ZvcmVpZ24iKQoKICBAQGluZGV4KFtpZF9hdXRvcml6b10sIG1hcDogImVuZl9tZWRpZGFzX2FudHJvcG9tZXRyaWNhc19pZF9hdXRvcml6b19mb3JlaWduIikKICBAQGluZGV4KFtpZF9jYW5jZWxvXSwgbWFwOiAiZW5mX21lZGlkYXNfYW50cm9wb21ldHJpY2FzX2lkX2NhbmNlbG9fZm9yZWlnbiIpCiAgQEBpbmRleChbaWRfaW5ncmVzb10sIG1hcDogImVuZl9tZWRpZGFzX2FudHJvcG9tZXRyaWNhc19pZF9pbmdyZXNvX2ZvcmVpZ24iKQogIEBAaW5kZXgoW2lkX3VzZXJdLCBtYXA6ICJlbmZfbWVkaWRhc19hbnRyb3BvbWV0cmljYXNfaWRfdXNlcl9mb3JlaWduIikKfQoKbW9kZWwgZW5mX294aWdlbm90ZXJhcGlhIHsKICBpZCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEJpZ0ludCAgICAgICAgICAgICAgICAgICBAaWQgQGRlZmF1bHQoYXV0b2luY3JlbWVudCgpKSBAZGIuVW5zaWduZWRCaWdJbnQKICBpZF9hZG1pbmlzdHJhY2lvbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEJpZ0ludCAgICAgICAgICAgICAgICAgICBAZGIuVW5zaWduZWRCaWdJbnQKICBmcmFjY2lvbl9pbnNwaXJhZGEgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEludAogIHByZXNpb25fcG9zaXRpdmEgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSW50PwogIGlkX3NlZGFjY2lvbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQmlnSW50PyAgICAgICAgICAgICAgICAgIEBkYi5VbnNpZ25lZEJpZ0ludAogIGlkX3NpZ25vcyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQmlnSW50PyAgICAgICAgICAgICAgICAgIEBkYi5VbnNpZ25lZEJpZ0ludAogIGlkX2luZ3Jlc28gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSW50ICAgICAgICAgICAgICAgICAgICAgIEBkYi5VbnNpZ25lZEludAogIGlkX3VzZXIgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSW50PyAgICAgICAgICAgICAgICAgICAgIEBkYi5VbnNpZ25lZEludAogIGlkX2F1dG9yaXpvICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSW50PyAgICAgICAgICAgICAgICAgICAgIEBkYi5VbnNpZ25lZEludAogIGlkX2NhbmNlbG8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSW50PyAgICAgICAgICAgICAgICAgICAgIEBkYi5VbnNpZ25lZEludAogIGNyZWF0ZWRfYXQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRGF0ZVRpbWU/ICAgICAgICAgICAgICAgIEBkYi5UaW1lc3RhbXAoMCkKICB1cGRhdGVkX2F0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIERhdGVUaW1lPyAgICAgICAgICAgICAgICBAZGIuVGltZXN0YW1wKDApCiAgZGVsZXRlZF9hdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBEYXRlVGltZT8gICAgICAgICAgICAgICAgQGRiLlRpbWVzdGFtcCgwKQogIGNhdF9lbmZlcm1lcmlhX2VuZl9veGlnZW5vdGVyYXBpYV9pZF9hZG1pbmlzdHJhY2lvblRvY2F0X2VuZmVybWVyaWEgY2F0X2VuZmVybWVyaWEgICAgICAgICAgIEByZWxhdGlvbigiZW5mX294aWdlbm90ZXJhcGlhX2lkX2FkbWluaXN0cmFjaW9uVG9jYXRfZW5mZXJtZXJpYSIsIGZpZWxkczogW2lkX2FkbWluaXN0cmFjaW9uXSwgcmVmZXJlbmNlczogW2lkXSwgb25VcGRhdGU6IFJlc3RyaWN0LCBtYXA6ICJlbmZfb3hpZ2Vub3RlcmFwaWFfaWRfYWRtaW5pc3RyYWNpb25fZm9yZWlnbiIpCiAgdXNlcnNfZW5mX294aWdlbm90ZXJhcGlhX2lkX2F1dG9yaXpvVG91c2VycyAgICAgICAgICAgICAgICAgICAgICAgICB1c2Vycz8gICAgICAgICAgICAgICAgICAgQHJlbGF0aW9uKCJlbmZfb3hpZ2Vub3RlcmFwaWFfaWRfYXV0b3Jpem9Ub3VzZXJzIiwgZmllbGRzOiBbaWRfYXV0b3Jpem9dLCByZWZlcmVuY2VzOiBbaWRdLCBvbkRlbGV0ZTogUmVzdHJpY3QsIG9uVXBkYXRlOiBSZXN0cmljdCwgbWFwOiAiZW5mX294aWdlbm90ZXJhcGlhX2lkX2F1dG9yaXpvX2ZvcmVpZ24iKQogIHVzZXJzX2VuZl9veGlnZW5vdGVyYXBpYV9pZF9jYW5jZWxvVG91c2VycyAgICAgICAgICAgICAgICAgICAgICAgICAgdXNlcnM/ICAgICAgICAgICAgICAgICAgIEByZWxhdGlvbigiZW5mX294aWdlbm90ZXJhcGlhX2lkX2NhbmNlbG9Ub3VzZXJzIiwgZmllbGRzOiBbaWRfY2FuY2Vsb10sIHJlZmVyZW5jZXM6IFtpZF0sIG9uRGVsZXRlOiBSZXN0cmljdCwgb25VcGRhdGU6IFJlc3RyaWN0LCBtYXA6ICJlbmZfb3hpZ2Vub3RlcmFwaWFfaWRfY2FuY2Vsb19mb3JlaWduIikKICBocHpfaW5ncmVzb19ob3NwaXRhbGFyaW8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhwel9pbmdyZXNvX2hvc3BpdGFsYXJpbyBAcmVsYXRpb24oZmllbGRzOiBbaWRfaW5ncmVzb10sIHJlZmVyZW5jZXM6IFtpZF0sIG9uVXBkYXRlOiBSZXN0cmljdCwgbWFwOiAiZW5mX294aWdlbm90ZXJhcGlhX2lkX2luZ3Jlc29fZm9yZWlnbiIpCiAgY2F0X2VuZmVybWVyaWFfZW5mX294aWdlbm90ZXJhcGlhX2lkX3NlZGFjY2lvblRvY2F0X2VuZmVybWVyaWEgICAgICBjYXRfZW5mZXJtZXJpYT8gICAgICAgICAgQHJlbGF0aW9uKCJlbmZfb3hpZ2Vub3RlcmFwaWFfaWRfc2VkYWNjaW9uVG9jYXRfZW5mZXJtZXJpYSIsIGZpZWxkczogW2lkX3NlZGFjY2lvbl0sIHJlZmVyZW5jZXM6IFtpZF0sIG9uRGVsZXRlOiBSZXN0cmljdCwgb25VcGRhdGU6IFJlc3RyaWN0LCBtYXA6ICJlbmZfb3hpZ2Vub3RlcmFwaWFfaWRfc2VkYWNjaW9uX2ZvcmVpZ24iKQogIGNhdF9lbmZlcm1lcmlhX2VuZl9veGlnZW5vdGVyYXBpYV9pZF9zaWdub3NUb2NhdF9lbmZlcm1lcmlhICAgICAgICAgY2F0X2VuZmVybWVyaWE/ICAgICAgICAgIEByZWxhdGlvbigiZW5mX294aWdlbm90ZXJhcGlhX2lkX3NpZ25vc1RvY2F0X2VuZmVybWVyaWEiLCBmaWVsZHM6IFtpZF9zaWdub3NdLCByZWZlcmVuY2VzOiBbaWRdLCBvbkRlbGV0ZTogUmVzdHJpY3QsIG9uVXBkYXRlOiBSZXN0cmljdCwgbWFwOiAiZW5mX294aWdlbm90ZXJhcGlhX2lkX3NpZ25vc19mb3JlaWduIikKICB1c2Vyc19lbmZfb3hpZ2Vub3RlcmFwaWFfaWRfdXNlclRvdXNlcnMgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJzPyAgICAgICAgICAgICAgICAgICBAcmVsYXRpb24oImVuZl9veGlnZW5vdGVyYXBpYV9pZF91c2VyVG91c2VycyIsIGZpZWxkczogW2lkX3VzZXJdLCByZWZlcmVuY2VzOiBbaWRdLCBvbkRlbGV0ZTogUmVzdHJpY3QsIG9uVXBkYXRlOiBSZXN0cmljdCwgbWFwOiAiZW5mX294aWdlbm90ZXJhcGlhX2lkX3VzZXJfZm9yZWlnbiIpCgogIEBAaW5kZXgoW2lkX2FkbWluaXN0cmFjaW9uXSwgbWFwOiAiZW5mX294aWdlbm90ZXJhcGlhX2lkX2FkbWluaXN0cmFjaW9uX2ZvcmVpZ24iKQogIEBAaW5kZXgoW2lkX2F1dG9yaXpvXSwgbWFwOiAiZW5mX294aWdlbm90ZXJhcGlhX2lkX2F1dG9yaXpvX2ZvcmVpZ24iKQogIEBAaW5kZXgoW2lkX2NhbmNlbG9dLCBtYXA6ICJlbmZfb3hpZ2Vub3RlcmFwaWFfaWRfY2FuY2Vsb19mb3JlaWduIikKICBAQGluZGV4KFtpZF9pbmdyZXNvXSwgbWFwOiAiZW5mX294aWdlbm90ZXJhcGlhX2lkX2luZ3Jlc29fZm9yZWlnbiIpCiAgQEBpbmRleChbaWRfc2VkYWNjaW9uXSwgbWFwOiAiZW5mX294aWdlbm90ZXJhcGlhX2lkX3NlZGFjY2lvbl9mb3JlaWduIikKICBAQGluZGV4KFtpZF9zaWdub3NdLCBtYXA6ICJlbmZfb3hpZ2Vub3RlcmFwaWFfaWRfc2lnbm9zX2ZvcmVpZ24iKQogIEBAaW5kZXgoW2lkX3VzZXJdLCBtYXA6ICJlbmZfb3hpZ2Vub3RlcmFwaWFfaWRfdXNlcl9mb3JlaWduIikKfQoKbW9kZWwgZW5mX3Byb2NlZGltaWVudG9zX2ludmFzaXZvcyB7CiAgaWQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEJpZ0ludCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBpZCBAZGVmYXVsdChhdXRvaW5jcmVtZW50KCkpIEBkYi5VbnNpZ25lZEJpZ0ludAogIGZlY2hhX2luc3RhbGFjaW9uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBEYXRlVGltZSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBAZGIuRGF0ZVRpbWUoMCkKICBjYWxpYnJlICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU3RyaW5nICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQGRiLlZhckNoYXIoMjUwKQogIGx1bWVuZXMgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTdHJpbmc/ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBAZGIuVmFyQ2hhcigyNTApCiAgY2VudGltZXRyb3NfaW50cm9kdWNpZG9zICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFN0cmluZz8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBkYi5WYXJDaGFyKDI1MCkKICBmZWNoYV9yZXRpcm8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRGF0ZVRpbWU/ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQGRiLkRhdGUKICBpZF9zdWJ0aXBvICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQmlnSW50PyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQGRiLlVuc2lnbmVkQmlnSW50CiAgaWRfaW5zdGFsbyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEJpZ0ludD8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBkYi5VbnNpZ25lZEJpZ0ludAogIGlkX2ZsZWJpdGlzICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBCaWdJbnQ/ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBAZGIuVW5zaWduZWRCaWdJbnQKICBpZF9zaXRpbyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQmlnSW50PyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQGRiLlVuc2lnbmVkQmlnSW50CiAgaWRfcmV0aXJvICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEJpZ0ludD8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBkYi5VbnNpZ25lZEJpZ0ludAogIGlkX3ViaWNhY2lvbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBJbnQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBAZGIuVW5zaWduZWRJbnQKICBpZF9pbmdyZXNvICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSW50ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQGRiLlVuc2lnbmVkSW50CiAgaWRfdXNlciAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEludD8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBkYi5VbnNpZ25lZEludAogIGlkX2F1dG9yaXpvICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBJbnQ/ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBAZGIuVW5zaWduZWRJbnQKICBpZF9jYW5jZWxvICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSW50PyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQGRiLlVuc2lnbmVkSW50CiAgY3JlYXRlZF9hdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIERhdGVUaW1lPyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBkYi5UaW1lc3RhbXAoMCkKICB1cGRhdGVkX2F0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRGF0ZVRpbWU/ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQGRiLlRpbWVzdGFtcCgwKQogIGRlbGV0ZWRfYXQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBEYXRlVGltZT8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBAZGIuVGltZXN0YW1wKDApCiAgdXNlcnNfZW5mX3Byb2NlZGltaWVudG9zX2ludmFzaXZvc19pZF9hdXRvcml6b1RvdXNlcnMgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJzPyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEByZWxhdGlvbigiZW5mX3Byb2NlZGltaWVudG9zX2ludmFzaXZvc19pZF9hdXRvcml6b1RvdXNlcnMiLCBmaWVsZHM6IFtpZF9hdXRvcml6b10sIHJlZmVyZW5jZXM6IFtpZF0sIG9uRGVsZXRlOiBSZXN0cmljdCwgb25VcGRhdGU6IFJlc3RyaWN0LCBtYXA6ICJlbmZfcHJvY2VkaW1pZW50b3NfaW52YXNpdm9zX2lkX2F1dG9yaXpvX2ZvcmVpZ24iKQogIHVzZXJzX2VuZl9wcm9jZWRpbWllbnRvc19pbnZhc2l2b3NfaWRfY2FuY2Vsb1RvdXNlcnMgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1c2Vycz8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBAcmVsYXRpb24oImVuZl9wcm9jZWRpbWllbnRvc19pbnZhc2l2b3NfaWRfY2FuY2Vsb1RvdXNlcnMiLCBmaWVsZHM6IFtpZF9jYW5jZWxvXSwgcmVmZXJlbmNlczogW2lkXSwgb25EZWxldGU6IFJlc3RyaWN0LCBvblVwZGF0ZTogUmVzdHJpY3QsIG1hcDogImVuZl9wcm9jZWRpbWllbnRvc19pbnZhc2l2b3NfaWRfY2FuY2Vsb19mb3JlaWduIikKICBjYXRfcHJvY2VkaW1pZW50b3NfaW52YXNpdm9zX2VuZl9wcm9jZWRpbWllbnRvc19pbnZhc2l2b3NfaWRfZmxlYml0aXNUb2NhdF9wcm9jZWRpbWllbnRvc19pbnZhc2l2b3MgY2F0X3Byb2NlZGltaWVudG9zX2ludmFzaXZvcz8gICAgICAgICAgQHJlbGF0aW9uKCJlbmZfcHJvY2VkaW1pZW50b3NfaW52YXNpdm9zX2lkX2ZsZWJpdGlzVG9jYXRfcHJvY2VkaW1pZW50b3NfaW52YXNpdm9zIiwgZmllbGRzOiBbaWRfZmxlYml0aXNdLCByZWZlcmVuY2VzOiBbaWRdLCBvbkRlbGV0ZTogUmVzdHJpY3QsIG9uVXBkYXRlOiBSZXN0cmljdCwgbWFwOiAiZW5mX3Byb2NlZGltaWVudG9zX2ludmFzaXZvc19pZF9mbGViaXRpc19mb3JlaWduIikKICBocHpfaW5ncmVzb19ob3NwaXRhbGFyaW8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHB6X2luZ3Jlc29faG9zcGl0YWxhcmlvICAgICAgICAgICAgICAgQHJlbGF0aW9uKGZpZWxkczogW2lkX2luZ3Jlc29dLCByZWZlcmVuY2VzOiBbaWRdLCBvblVwZGF0ZTogUmVzdHJpY3QsIG1hcDogImVuZl9wcm9jZWRpbWllbnRvc19pbnZhc2l2b3NfaWRfaW5ncmVzb19mb3JlaWduIikKICBjYXRfcHJvY2VkaW1pZW50b3NfaW52YXNpdm9zX2VuZl9wcm9jZWRpbWllbnRvc19pbnZhc2l2b3NfaWRfaW5zdGFsb1RvY2F0X3Byb2NlZGltaWVudG9zX2ludmFzaXZvcyAgY2F0X3Byb2NlZGltaWVudG9zX2ludmFzaXZvcz8gICAgICAgICAgQHJlbGF0aW9uKCJlbmZfcHJvY2VkaW1pZW50b3NfaW52YXNpdm9zX2lkX2luc3RhbG9Ub2NhdF9wcm9jZWRpbWllbnRvc19pbnZhc2l2b3MiLCBmaWVsZHM6IFtpZF9pbnN0YWxvXSwgcmVmZXJlbmNlczogW2lkXSwgb25EZWxldGU6IFJlc3RyaWN0LCBvblVwZGF0ZTogUmVzdHJpY3QsIG1hcDogImVuZl9wcm9jZWRpbWllbnRvc19pbnZhc2l2b3NfaWRfaW5zdGFsb19mb3JlaWduIikKICBjYXRfcHJvY2VkaW1pZW50b3NfaW52YXNpdm9zX2VuZl9wcm9jZWRpbWllbnRvc19pbnZhc2l2b3NfaWRfcmV0aXJvVG9jYXRfcHJvY2VkaW1pZW50b3NfaW52YXNpdm9zICAgY2F0X3Byb2NlZGltaWVudG9zX2ludmFzaXZvcz8gICAgICAgICAgQHJlbGF0aW9uKCJlbmZfcHJvY2VkaW1pZW50b3NfaW52YXNpdm9zX2lkX3JldGlyb1RvY2F0X3Byb2NlZGltaWVudG9zX2ludmFzaXZvcyIsIGZpZWxkczogW2lkX3JldGlyb10sIHJlZmVyZW5jZXM6IFtpZF0sIG9uRGVsZXRlOiBSZXN0cmljdCwgb25VcGRhdGU6IFJlc3RyaWN0LCBtYXA6ICJlbmZfcHJvY2VkaW1pZW50b3NfaW52YXNpdm9zX2lkX3JldGlyb19mb3JlaWduIikKICBjYXRfcHJvY2VkaW1pZW50b3NfaW52YXNpdm9zX2VuZl9wcm9jZWRpbWllbnRvc19pbnZhc2l2b3NfaWRfc2l0aW9Ub2NhdF9wcm9jZWRpbWllbnRvc19pbnZhc2l2b3MgICAgY2F0X3Byb2NlZGltaWVudG9zX2ludmFzaXZvcz8gICAgICAgICAgQHJlbGF0aW9uKCJlbmZfcHJvY2VkaW1pZW50b3NfaW52YXNpdm9zX2lkX3NpdGlvVG9jYXRfcHJvY2VkaW1pZW50b3NfaW52YXNpdm9zIiwgZmllbGRzOiBbaWRfc2l0aW9dLCByZWZlcmVuY2VzOiBbaWRdLCBvbkRlbGV0ZTogUmVzdHJpY3QsIG9uVXBkYXRlOiBSZXN0cmljdCwgbWFwOiAiZW5mX3Byb2NlZGltaWVudG9zX2ludmFzaXZvc19pZF9zaXRpb19mb3JlaWduIikKICBjYXRfcHJvY2VkaW1pZW50b3NfaW52YXNpdm9zX2VuZl9wcm9jZWRpbWllbnRvc19pbnZhc2l2b3NfaWRfc3VidGlwb1RvY2F0X3Byb2NlZGltaWVudG9zX2ludmFzaXZvcyAgY2F0X3Byb2NlZGltaWVudG9zX2ludmFzaXZvcz8gICAgICAgICAgQHJlbGF0aW9uKCJlbmZfcHJvY2VkaW1pZW50b3NfaW52YXNpdm9zX2lkX3N1YnRpcG9Ub2NhdF9wcm9jZWRpbWllbnRvc19pbnZhc2l2b3MiLCBmaWVsZHM6IFtpZF9zdWJ0aXBvXSwgcmVmZXJlbmNlczogW2lkXSwgb25EZWxldGU6IFJlc3RyaWN0LCBvblVwZGF0ZTogUmVzdHJpY3QsIG1hcDogImVuZl9wcm9jZWRpbWllbnRvc19pbnZhc2l2b3NfaWRfc3VidGlwb19mb3JlaWduIikKICBocHpfY2FtYV9oaXN0b3JpYWwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHB6X2NhbWFfaGlzdG9yaWFsICAgICAgICAgICAgICAgICAgICAgQHJlbGF0aW9uKGZpZWxkczogW2lkX3ViaWNhY2lvbl0sIHJlZmVyZW5jZXM6IFtpZF0sIG9uVXBkYXRlOiBSZXN0cmljdCwgbWFwOiAiZW5mX3Byb2NlZGltaWVudG9zX2ludmFzaXZvc19pZF91YmljYWNpb25fZm9yZWlnbiIpCiAgdXNlcnNfZW5mX3Byb2NlZGltaWVudG9zX2ludmFzaXZvc19pZF91c2VyVG91c2VycyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJzPyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEByZWxhdGlvbigiZW5mX3Byb2NlZGltaWVudG9zX2ludmFzaXZvc19pZF91c2VyVG91c2VycyIsIGZpZWxkczogW2lkX3VzZXJdLCByZWZlcmVuY2VzOiBbaWRdLCBvbkRlbGV0ZTogUmVzdHJpY3QsIG9uVXBkYXRlOiBSZXN0cmljdCwgbWFwOiAiZW5mX3Byb2NlZGltaWVudG9zX2ludmFzaXZvc19pZF91c2VyX2ZvcmVpZ24iKQogIGVuZl9wcm9jZWRpbWllbnRvc19pbnZhc2l2b3NfZGV0YWxsZSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbmZfcHJvY2VkaW1pZW50b3NfaW52YXNpdm9zX2RldGFsbGVbXQoKICBAQGluZGV4KFtpZF9hdXRvcml6b10sIG1hcDogImVuZl9wcm9jZWRpbWllbnRvc19pbnZhc2l2b3NfaWRfYXV0b3Jpem9fZm9yZWlnbiIpCiAgQEBpbmRleChbaWRfY2FuY2Vsb10sIG1hcDogImVuZl9wcm9jZWRpbWllbnRvc19pbnZhc2l2b3NfaWRfY2FuY2Vsb19mb3JlaWduIikKICBAQGluZGV4KFtpZF9mbGViaXRpc10sIG1hcDogImVuZl9wcm9jZWRpbWllbnRvc19pbnZhc2l2b3NfaWRfZmxlYml0aXNfZm9yZWlnbiIpCiAgQEBpbmRleChbaWRfaW5ncmVzb10sIG1hcDogImVuZl9wcm9jZWRpbWllbnRvc19pbnZhc2l2b3NfaWRfaW5ncmVzb19mb3JlaWduIikKICBAQGluZGV4KFtpZF9pbnN0YWxvXSwgbWFwOiAiZW5mX3Byb2NlZGltaWVudG9zX2ludmFzaXZvc19pZF9pbnN0YWxvX2ZvcmVpZ24iKQogIEBAaW5kZXgoW2lkX3JldGlyb10sIG1hcDogImVuZl9wcm9jZWRpbWllbnRvc19pbnZhc2l2b3NfaWRfcmV0aXJvX2ZvcmVpZ24iKQogIEBAaW5kZXgoW2lkX3NpdGlvXSwgbWFwOiAiZW5mX3Byb2NlZGltaWVudG9zX2ludmFzaXZvc19pZF9zaXRpb19mb3JlaWduIikKICBAQGluZGV4KFtpZF9zdWJ0aXBvXSwgbWFwOiAiZW5mX3Byb2NlZGltaWVudG9zX2ludmFzaXZvc19pZF9zdWJ0aXBvX2ZvcmVpZ24iKQogIEBAaW5kZXgoW2lkX3ViaWNhY2lvbl0sIG1hcDogImVuZl9wcm9jZWRpbWllbnRvc19pbnZhc2l2b3NfaWRfdWJpY2FjaW9uX2ZvcmVpZ24iKQogIEBAaW5kZXgoW2lkX3VzZXJdLCBtYXA6ICJlbmZfcHJvY2VkaW1pZW50b3NfaW52YXNpdm9zX2lkX3VzZXJfZm9yZWlnbiIpCn0KCm1vZGVsIGVuZl9wcm9jZWRpbWllbnRvc19pbnZhc2l2b3NfZGV0YWxsZSB7CiAgaWQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBCaWdJbnQgICAgICAgICAgICAgICAgICAgICAgICBAaWQgQGRlZmF1bHQoYXV0b2luY3JlbWVudCgpKSBAZGIuVW5zaWduZWRCaWdJbnQKICB0aXBvICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFN0cmluZyAgICAgICAgICAgICAgICAgICAgICAgIEBkYi5WYXJDaGFyKDUwKQogIGZlY2hhICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRGF0ZVRpbWUgICAgICAgICAgICAgICAgICAgICAgQGRiLkRhdGVUaW1lKDApCiAgb2JzZXJ2YWNpb25lcyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTdHJpbmcgICAgICAgICAgICAgICAgICAgICAgICBAZGIuVGV4dAogIGlkX3JldGlybyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQmlnSW50PyAgICAgICAgICAgICAgICAgICAgICAgQGRiLlVuc2lnbmVkQmlnSW50CiAgaWRfcHJvY2VkaW1pZW50byAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBCaWdJbnQ/ICAgICAgICAgICAgICAgICAgICAgICBAZGIuVW5zaWduZWRCaWdJbnQKICBpZF91YmljYWNpb24gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEludCAgICAgICAgICAgICAgICAgICAgICAgICAgIEBkYi5VbnNpZ25lZEludAogIGlkX3VzZXIgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSW50PyAgICAgICAgICAgICAgICAgICAgICAgICAgQGRiLlVuc2lnbmVkSW50CiAgaWRfYXV0b3Jpem8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBJbnQ/ICAgICAgICAgICAgICAgICAgICAgICAgICBAZGIuVW5zaWduZWRJbnQKICBpZF9jYW5jZWxvICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEludD8gICAgICAgICAgICAgICAgICAgICAgICAgIEBkYi5VbnNpZ25lZEludAogIGNyZWF0ZWRfYXQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRGF0ZVRpbWU/ICAgICAgICAgICAgICAgICAgICAgQGRiLlRpbWVzdGFtcCgwKQogIHVwZGF0ZWRfYXQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRGF0ZVRpbWU/ICAgICAgICAgICAgICAgICAgICAgQGRiLlRpbWVzdGFtcCgwKQogIGRlbGV0ZWRfYXQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRGF0ZVRpbWU/ICAgICAgICAgICAgICAgICAgICAgQGRiLlRpbWVzdGFtcCgwKQogIHVzZXJzX2VuZl9wcm9jZWRpbWllbnRvc19pbnZhc2l2b3NfZGV0YWxsZV9pZF9hdXRvcml6b1RvdXNlcnMgdXNlcnM/ICAgICAgICAgICAgICAgICAgICAgICAgQHJlbGF0aW9uKCJlbmZfcHJvY2VkaW1pZW50b3NfaW52YXNpdm9zX2RldGFsbGVfaWRfYXV0b3Jpem9Ub3VzZXJzIiwgZmllbGRzOiBbaWRfYXV0b3Jpem9dLCByZWZlcmVuY2VzOiBbaWRdLCBvbkRlbGV0ZTogUmVzdHJpY3QsIG9uVXBkYXRlOiBSZXN0cmljdCwgbWFwOiAiZW5mX3Byb2NlZGltaWVudG9zX2ludmFzaXZvc19kZXRhbGxlX2lkX2F1dG9yaXpvX2ZvcmVpZ24iKQogIHVzZXJzX2VuZl9wcm9jZWRpbWllbnRvc19pbnZhc2l2b3NfZGV0YWxsZV9pZF9jYW5jZWxvVG91c2VycyAgdXNlcnM/ICAgICAgICAgICAgICAgICAgICAgICAgQHJlbGF0aW9uKCJlbmZfcHJvY2VkaW1pZW50b3NfaW52YXNpdm9zX2RldGFsbGVfaWRfY2FuY2Vsb1RvdXNlcnMiLCBmaWVsZHM6IFtpZF9jYW5jZWxvXSwgcmVmZXJlbmNlczogW2lkXSwgb25EZWxldGU6IFJlc3RyaWN0LCBvblVwZGF0ZTogUmVzdHJpY3QsIG1hcDogImVuZl9wcm9jZWRpbWllbnRvc19pbnZhc2l2b3NfZGV0YWxsZV9pZF9jYW5jZWxvX2ZvcmVpZ24iKQogIGVuZl9wcm9jZWRpbWllbnRvc19pbnZhc2l2b3MgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZW5mX3Byb2NlZGltaWVudG9zX2ludmFzaXZvcz8gQHJlbGF0aW9uKGZpZWxkczogW2lkX3Byb2NlZGltaWVudG9dLCByZWZlcmVuY2VzOiBbaWRdLCBvbkRlbGV0ZTogUmVzdHJpY3QsIG9uVXBkYXRlOiBSZXN0cmljdCwgbWFwOiAiZW5mX3Byb2NlZGltaWVudG9zX2ludmFzaXZvc19kZXRhbGxlX2lkX3Byb2NlZGltaWVudG9fZm9yZWlnbiIpCiAgY2F0X3Byb2NlZGltaWVudG9zX2ludmFzaXZvcyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXRfcHJvY2VkaW1pZW50b3NfaW52YXNpdm9zPyBAcmVsYXRpb24oZmllbGRzOiBbaWRfcmV0aXJvXSwgcmVmZXJlbmNlczogW2lkXSwgb25EZWxldGU6IFJlc3RyaWN0LCBvblVwZGF0ZTogUmVzdHJpY3QsIG1hcDogImVuZl9wcm9jZWRpbWllbnRvc19pbnZhc2l2b3NfZGV0YWxsZV9pZF9yZXRpcm9fZm9yZWlnbiIpCiAgaHB6X2NhbWFfaGlzdG9yaWFsICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBocHpfY2FtYV9oaXN0b3JpYWwgICAgICAgICAgICBAcmVsYXRpb24oZmllbGRzOiBbaWRfdWJpY2FjaW9uXSwgcmVmZXJlbmNlczogW2lkXSwgb25VcGRhdGU6IFJlc3RyaWN0LCBtYXA6ICJlbmZfcHJvY2VkaW1pZW50b3NfaW52YXNpdm9zX2RldGFsbGVfaWRfdWJpY2FjaW9uX2ZvcmVpZ24iKQogIHVzZXJzX2VuZl9wcm9jZWRpbWllbnRvc19pbnZhc2l2b3NfZGV0YWxsZV9pZF91c2VyVG91c2VycyAgICAgdXNlcnM/ICAgICAgICAgICAgICAgICAgICAgICAgQHJlbGF0aW9uKCJlbmZfcHJvY2VkaW1pZW50b3NfaW52YXNpdm9zX2RldGFsbGVfaWRfdXNlclRvdXNlcnMiLCBmaWVsZHM6IFtpZF91c2VyXSwgcmVmZXJlbmNlczogW2lkXSwgb25EZWxldGU6IFJlc3RyaWN0LCBvblVwZGF0ZTogUmVzdHJpY3QsIG1hcDogImVuZl9wcm9jZWRpbWllbnRvc19pbnZhc2l2b3NfZGV0YWxsZV9pZF91c2VyX2ZvcmVpZ24iKQoKICBAQGluZGV4KFtpZF9hdXRvcml6b10sIG1hcDogImVuZl9wcm9jZWRpbWllbnRvc19pbnZhc2l2b3NfZGV0YWxsZV9pZF9hdXRvcml6b19mb3JlaWduIikKICBAQGluZGV4KFtpZF9jYW5jZWxvXSwgbWFwOiAiZW5mX3Byb2NlZGltaWVudG9zX2ludmFzaXZvc19kZXRhbGxlX2lkX2NhbmNlbG9fZm9yZWlnbiIpCiAgQEBpbmRleChbaWRfcHJvY2VkaW1pZW50b10sIG1hcDogImVuZl9wcm9jZWRpbWllbnRvc19pbnZhc2l2b3NfZGV0YWxsZV9pZF9wcm9jZWRpbWllbnRvX2ZvcmVpZ24iKQogIEBAaW5kZXgoW2lkX3JldGlyb10sIG1hcDogImVuZl9wcm9jZWRpbWllbnRvc19pbnZhc2l2b3NfZGV0YWxsZV9pZF9yZXRpcm9fZm9yZWlnbiIpCiAgQEBpbmRleChbaWRfdWJpY2FjaW9uXSwgbWFwOiAiZW5mX3Byb2NlZGltaWVudG9zX2ludmFzaXZvc19kZXRhbGxlX2lkX3ViaWNhY2lvbl9mb3JlaWduIikKICBAQGluZGV4KFtpZF91c2VyXSwgbWFwOiAiZW5mX3Byb2NlZGltaWVudG9zX2ludmFzaXZvc19kZXRhbGxlX2lkX3VzZXJfZm9yZWlnbiIpCn0KCm1vZGVsIGVuZl91bGNlcmFzX3ByZXNpb24gewogIGlkICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEJpZ0ludCAgICAgICAgICAgICAgICAgICBAaWQgQGRlZmF1bHQoYXV0b2luY3JlbWVudCgpKSBAZGIuVW5zaWduZWRCaWdJbnQKICBpZF9jdWVycG8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBCaWdJbnQgICAgICAgICAgICAgICAgICAgQGRiLlVuc2lnbmVkQmlnSW50CiAgaWRfbG9uZ2l0dWQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQmlnSW50ICAgICAgICAgICAgICAgICAgIEBkYi5VbnNpZ25lZEJpZ0ludAogIGlkX2V4dWRhZG8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEJpZ0ludCAgICAgICAgICAgICAgICAgICBAZGIuVW5zaWduZWRCaWdJbnQKICBpZF90ZWppZG8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBCaWdJbnQgICAgICAgICAgICAgICAgICAgQGRiLlVuc2lnbmVkQmlnSW50CiAgaWRfaW5ncmVzbyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSW50ICAgICAgICAgICAgICAgICAgICAgIEBkYi5VbnNpZ25lZEludAogIGlkX3VzZXIgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEludD8gICAgICAgICAgICAgICAgICAgICBAZGIuVW5zaWduZWRJbnQKICBpZF9hdXRvcml6byAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBJbnQ/ICAgICAgICAgICAgICAgICAgICAgQGRiLlVuc2lnbmVkSW50CiAgaWRfY2FuY2VsbyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSW50PyAgICAgICAgICAgICAgICAgICAgIEBkYi5VbnNpZ25lZEludAogIGNyZWF0ZWRfYXQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIERhdGVUaW1lPyAgICAgICAgICAgICAgICBAZGIuVGltZXN0YW1wKDApCiAgdXBkYXRlZF9hdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRGF0ZVRpbWU/ICAgICAgICAgICAgICAgIEBkYi5UaW1lc3RhbXAoMCkKICBkZWxldGVkX2F0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBEYXRlVGltZT8gICAgICAgICAgICAgICAgQGRiLlRpbWVzdGFtcCgwKQogIHVzZXJzX2VuZl91bGNlcmFzX3ByZXNpb25faWRfYXV0b3Jpem9Ub3VzZXJzICAgICAgICAgICAgICAgICAgIHVzZXJzPyAgICAgICAgICAgICAgICAgICBAcmVsYXRpb24oImVuZl91bGNlcmFzX3ByZXNpb25faWRfYXV0b3Jpem9Ub3VzZXJzIiwgZmllbGRzOiBbaWRfYXV0b3Jpem9dLCByZWZlcmVuY2VzOiBbaWRdLCBvbkRlbGV0ZTogUmVzdHJpY3QsIG9uVXBkYXRlOiBSZXN0cmljdCwgbWFwOiAiZW5mX3VsY2VyYXNfcHJlc2lvbl9pZF9hdXRvcml6b19mb3JlaWduIikKICB1c2Vyc19lbmZfdWxjZXJhc19wcmVzaW9uX2lkX2NhbmNlbG9Ub3VzZXJzICAgICAgICAgICAgICAgICAgICB1c2Vycz8gICAgICAgICAgICAgICAgICAgQHJlbGF0aW9uKCJlbmZfdWxjZXJhc19wcmVzaW9uX2lkX2NhbmNlbG9Ub3VzZXJzIiwgZmllbGRzOiBbaWRfY2FuY2Vsb10sIHJlZmVyZW5jZXM6IFtpZF0sIG9uRGVsZXRlOiBSZXN0cmljdCwgb25VcGRhdGU6IFJlc3RyaWN0LCBtYXA6ICJlbmZfdWxjZXJhc19wcmVzaW9uX2lkX2NhbmNlbG9fZm9yZWlnbiIpCiAgY2F0X2VuZmVybWVyaWFfZW5mX3VsY2VyYXNfcHJlc2lvbl9pZF9jdWVycG9Ub2NhdF9lbmZlcm1lcmlhICAgY2F0X2VuZmVybWVyaWEgICAgICAgICAgIEByZWxhdGlvbigiZW5mX3VsY2VyYXNfcHJlc2lvbl9pZF9jdWVycG9Ub2NhdF9lbmZlcm1lcmlhIiwgZmllbGRzOiBbaWRfY3VlcnBvXSwgcmVmZXJlbmNlczogW2lkXSwgb25VcGRhdGU6IFJlc3RyaWN0LCBtYXA6ICJlbmZfdWxjZXJhc19wcmVzaW9uX2lkX2N1ZXJwb19mb3JlaWduIikKICBjYXRfZW5mZXJtZXJpYV9lbmZfdWxjZXJhc19wcmVzaW9uX2lkX2V4dWRhZG9Ub2NhdF9lbmZlcm1lcmlhICBjYXRfZW5mZXJtZXJpYSAgICAgICAgICAgQHJlbGF0aW9uKCJlbmZfdWxjZXJhc19wcmVzaW9uX2lkX2V4dWRhZG9Ub2NhdF9lbmZlcm1lcmlhIiwgZmllbGRzOiBbaWRfZXh1ZGFkb10sIHJlZmVyZW5jZXM6IFtpZF0sIG9uVXBkYXRlOiBSZXN0cmljdCwgbWFwOiAiZW5mX3VsY2VyYXNfcHJlc2lvbl9pZF9leHVkYWRvX2ZvcmVpZ24iKQogIGhwel9pbmdyZXNvX2hvc3BpdGFsYXJpbyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhwel9pbmdyZXNvX2hvc3BpdGFsYXJpbyBAcmVsYXRpb24oZmllbGRzOiBbaWRfaW5ncmVzb10sIHJlZmVyZW5jZXM6IFtpZF0sIG9uVXBkYXRlOiBSZXN0cmljdCwgbWFwOiAiZW5mX3VsY2VyYXNfcHJlc2lvbl9pZF9pbmdyZXNvX2ZvcmVpZ24iKQogIGNhdF9lbmZlcm1lcmlhX2VuZl91bGNlcmFzX3ByZXNpb25faWRfbG9uZ2l0dWRUb2NhdF9lbmZlcm1lcmlhIGNhdF9lbmZlcm1lcmlhICAgICAgICAgICBAcmVsYXRpb24oImVuZl91bGNlcmFzX3ByZXNpb25faWRfbG9uZ2l0dWRUb2NhdF9lbmZlcm1lcmlhIiwgZmllbGRzOiBbaWRfbG9uZ2l0dWRdLCByZWZlcmVuY2VzOiBbaWRdLCBvblVwZGF0ZTogUmVzdHJpY3QsIG1hcDogImVuZl91bGNlcmFzX3ByZXNpb25faWRfbG9uZ2l0dWRfZm9yZWlnbiIpCiAgY2F0X2VuZmVybWVyaWFfZW5mX3VsY2VyYXNfcHJlc2lvbl9pZF90ZWppZG9Ub2NhdF9lbmZlcm1lcmlhICAgY2F0X2VuZmVybWVyaWEgICAgICAgICAgIEByZWxhdGlvbigiZW5mX3VsY2VyYXNfcHJlc2lvbl9pZF90ZWppZG9Ub2NhdF9lbmZlcm1lcmlhIiwgZmllbGRzOiBbaWRfdGVqaWRvXSwgcmVmZXJlbmNlczogW2lkXSwgb25VcGRhdGU6IFJlc3RyaWN0LCBtYXA6ICJlbmZfdWxjZXJhc19wcmVzaW9uX2lkX3Rlamlkb19mb3JlaWduIikKICB1c2Vyc19lbmZfdWxjZXJhc19wcmVzaW9uX2lkX3VzZXJUb3VzZXJzICAgICAgICAgICAgICAgICAgICAgICB1c2Vycz8gICAgICAgICAgICAgICAgICAgQHJlbGF0aW9uKCJlbmZfdWxjZXJhc19wcmVzaW9uX2lkX3VzZXJUb3VzZXJzIiwgZmllbGRzOiBbaWRfdXNlcl0sIHJlZmVyZW5jZXM6IFtpZF0sIG9uRGVsZXRlOiBSZXN0cmljdCwgb25VcGRhdGU6IFJlc3RyaWN0LCBtYXA6ICJlbmZfdWxjZXJhc19wcmVzaW9uX2lkX3VzZXJfZm9yZWlnbiIpCgogIEBAaW5kZXgoW2lkX2F1dG9yaXpvXSwgbWFwOiAiZW5mX3VsY2VyYXNfcHJlc2lvbl9pZF9hdXRvcml6b19mb3JlaWduIikKICBAQGluZGV4KFtpZF9jYW5jZWxvXSwgbWFwOiAiZW5mX3VsY2VyYXNfcHJlc2lvbl9pZF9jYW5jZWxvX2ZvcmVpZ24iKQogIEBAaW5kZXgoW2lkX2N1ZXJwb10sIG1hcDogImVuZl91bGNlcmFzX3ByZXNpb25faWRfY3VlcnBvX2ZvcmVpZ24iKQogIEBAaW5kZXgoW2lkX2V4dWRhZG9dLCBtYXA6ICJlbmZfdWxjZXJhc19wcmVzaW9uX2lkX2V4dWRhZG9fZm9yZWlnbiIpCiAgQEBpbmRleChbaWRfaW5ncmVzb10sIG1hcDogImVuZl91bGNlcmFzX3ByZXNpb25faWRfaW5ncmVzb19mb3JlaWduIikKICBAQGluZGV4KFtpZF9sb25naXR1ZF0sIG1hcDogImVuZl91bGNlcmFzX3ByZXNpb25faWRfbG9uZ2l0dWRfZm9yZWlnbiIpCiAgQEBpbmRleChbaWRfdGVqaWRvXSwgbWFwOiAiZW5mX3VsY2VyYXNfcHJlc2lvbl9pZF90ZWppZG9fZm9yZWlnbiIpCiAgQEBpbmRleChbaWRfdXNlcl0sIG1hcDogImVuZl91bGNlcmFzX3ByZXNpb25faWRfdXNlcl9mb3JlaWduIikKfQoKbW9kZWwgaGNsX2FudGVjZWRlbnRlc19mYW1pbGlhcmVzIHsKICBpZCAgICAgICAgICAgICAgICAgICBCaWdJbnQgICAgICAgICAgICAgICBAaWQgQGRlZmF1bHQoYXV0b2luY3JlbWVudCgpKSBAZGIuVW5zaWduZWRCaWdJbnQKICBsaW5lYSAgICAgICAgICAgICAgICBTdHJpbmcgICAgICAgICAgICAgICBAZGIuVmFyQ2hhcigyNTApCiAgZW5mZXJtZWRhZCAgICAgICAgICAgU3RyaW5nICAgICAgICAgICAgICAgQGRiLlZhckNoYXIoMjUwKQogIG9ic2VydmFjaW9uZXMgICAgICAgIFN0cmluZz8gICAgICAgICAgICAgIEBkYi5WYXJDaGFyKDI1MCkKICBpZF9oaXN0b3JpYSAgICAgICAgICBCaWdJbnQgICAgICAgICAgICAgICBAZGIuVW5zaWduZWRCaWdJbnQKICBjcmVhdGVkX2F0ICAgICAgICAgICBEYXRlVGltZT8gICAgICAgICAgICBAZGIuVGltZXN0YW1wKDApCiAgdXBkYXRlZF9hdCAgICAgICAgICAgRGF0ZVRpbWU/ICAgICAgICAgICAgQGRiLlRpbWVzdGFtcCgwKQogIGRlbGV0ZWRfYXQgICAgICAgICAgIERhdGVUaW1lPyAgICAgICAgICAgIEBkYi5UaW1lc3RhbXAoMCkKICBoY2xfaGlzdG9yaWFfY2xpbmljYSBoY2xfaGlzdG9yaWFfY2xpbmljYSBAcmVsYXRpb24oZmllbGRzOiBbaWRfaGlzdG9yaWFdLCByZWZlcmVuY2VzOiBbaWRdLCBvblVwZGF0ZTogUmVzdHJpY3QsIG1hcDogImhjbF9hbnRlY2VkZW50ZXNfZmFtaWxpYXJlc19pZF9oaXN0b3JpYV9mb3JlaWduIikKCiAgQEBpbmRleChbaWRfaGlzdG9yaWFdLCBtYXA6ICJoY2xfYW50ZWNlZGVudGVzX2ZhbWlsaWFyZXNfaWRfaGlzdG9yaWFfZm9yZWlnbiIpCn0KCm1vZGVsIGhjbF9oaXN0b3JpYV9jbGluaWNhIHsKICBpZCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQmlnSW50ICAgICAgICAgICAgICAgICAgICAgICAgQGlkIEBkZWZhdWx0KGF1dG9pbmNyZW1lbnQoKSkgQGRiLlVuc2lnbmVkQmlnSW50CiAgYWxpbWVudGFjaW9uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEJvb2xlYW4gICAgICAgICAgICAgICAgICAgICAgIEBkZWZhdWx0KGZhbHNlKQogIGhpZ2llbmUgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBCb29sZWFuICAgICAgICAgICAgICAgICAgICAgICBAZGVmYXVsdChmYWxzZSkKICBoYWJpdGFjaW9uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQm9vbGVhbiAgICAgICAgICAgICAgICAgICAgICAgQGRlZmF1bHQoZmFsc2UpCiAgaGFjaW5hbWllbnRvICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEJvb2xlYW4gICAgICAgICAgICAgICAgICAgICAgIEBkZWZhdWx0KGZhbHNlKQogIHpvb25vc2lzICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBCb29sZWFuICAgICAgICAgICAgICAgICAgICAgICBAZGVmYXVsdChmYWxzZSkKICB0b3hpbWFuaWFzICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQm9vbGVhbiAgICAgICAgICAgICAgICAgICAgICAgQGRlZmF1bHQoZmFsc2UpCiAgdGFiYXF1aXNtbyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEJvb2xlYW4gICAgICAgICAgICAgICAgICAgICAgIEBkZWZhdWx0KGZhbHNlKQogIHRhYmFxdWlzbW9fdGllbXBvICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTdHJpbmcgICAgICAgICAgICAgICAgICAgICAgICBAZGIuVmFyQ2hhcigxMDApCiAgdGFiYXF1aXNtb19jaWdhcnJvcyAgICAgICAgICAgICAgICAgICAgICAgICAgIFN0cmluZz8gICAgICAgICAgICAgICAgICAgICAgIEBkYi5WYXJDaGFyKDEwKQogIGluZ2VzdGFfYmViaWRhc19lbWJyaWFnYW50ZXMgICAgICAgICAgICAgICAgICBCb29sZWFuICAgICAgICAgICAgICAgICAgICAgICBAZGVmYXVsdChmYWxzZSkKICBsbGVnYV9lbWJyaWFnZXogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQm9vbGVhbiAgICAgICAgICAgICAgICAgICAgICAgQGRlZmF1bHQoZmFsc2UpCiAgZnJlY3VlbmNpYV9lbWJyaWFndWV6ICAgICAgICAgICAgICAgICAgICAgICAgIFN0cmluZz8gICAgICAgICAgICAgICAgICAgICAgIEBkYi5WYXJDaGFyKDI1MCkKICBhbGVyZ2lhcyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQm9vbGVhbiAgICAgICAgICAgICAgICAgICAgICAgQGRlZmF1bHQoZmFsc2UpCiAgcXVpcnVyZ2ljb3MgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEJvb2xlYW4gICAgICAgICAgICAgICAgICAgICAgIEBkZWZhdWx0KGZhbHNlKQogIHRyYW5zZnVjaW9uYWxlcyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBCb29sZWFuICAgICAgICAgICAgICAgICAgICAgICBAZGVmYXVsdChmYWxzZSkKICB0cmF1bWF0aWNvcyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQm9vbGVhbiAgICAgICAgICAgICAgICAgICAgICAgQGRlZmF1bHQoZmFsc2UpCiAgZXBpbGVwc2lhICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEJvb2xlYW4gICAgICAgICAgICAgICAgICAgICAgIEBkZWZhdWx0KGZhbHNlKQogIG9iZXNpZGFkICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBCb29sZWFuICAgICAgICAgICAgICAgICAgICAgICBAZGVmYXVsdChmYWxzZSkKICByZXNwaXJhdG9yaW9zICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQm9vbGVhbiAgICAgICAgICAgICAgICAgICAgICAgQGRlZmF1bHQoZmFsc2UpCiAgY2FyZGlvcGF0aWFzICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEJvb2xlYW4gICAgICAgICAgICAgICAgICAgICAgIEBkZWZhdWx0KGZhbHNlKQogIGluZmVjY2lvbmVzICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBCb29sZWFuICAgICAgICAgICAgICAgICAgICAgICBAZGVmYXVsdChmYWxzZSkKICBmaWVicmVfcmV1bWF0aWNhICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQm9vbGVhbiAgICAgICAgICAgICAgICAgICAgICAgQGRlZmF1bHQoZmFsc2UpCiAgaG9zcGl0YWxpemFjaW9uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEJvb2xlYW4gICAgICAgICAgICAgICAgICAgICAgIEBkZWZhdWx0KGZhbHNlKQogIGFudGVjZWRlbnRlc19wYXRvbG9naWNvc19vdHJvcyAgICAgICAgICAgICAgICBTdHJpbmc/ICAgICAgICAgICAgICAgICAgICAgICBAZGIuVGV4dAogIG1lbmFyY2EgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTdHJpbmc/ICAgICAgICAgICAgICAgICAgICAgICBAZGIuVmFyQ2hhcigyNTApCiAgcml0bW8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFN0cmluZz8gICAgICAgICAgICAgICAgICAgICAgIEBkYi5WYXJDaGFyKDI1MCkKICB2aWRhX3NleHVhbCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU3RyaW5nPyAgICAgICAgICAgICAgICAgICAgICAgQGRiLlZhckNoYXIoMjUwKQogIHVsdGltYV9tZXN0cnVhY2lvbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBTdHJpbmc/ICAgICAgICAgICAgICAgICAgICAgICBAZGIuVmFyQ2hhcigyNTApCiAgY29udHJvbF9wcmVuYXRhbCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFN0cmluZz8gICAgICAgICAgICAgICAgICAgICAgIEBkYi5WYXJDaGFyKDI1MCkKICBnZXN0YSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQm9vbGVhbiAgICAgICAgICAgICAgICAgICAgICAgQGRlZmF1bHQoZmFsc2UpCiAgcGFydG9zICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFN0cmluZz8gICAgICAgICAgICAgICAgICAgICAgIEBkYi5WYXJDaGFyKDI1MCkKICBhYm9ydG9zICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU3RyaW5nPyAgICAgICAgICAgICAgICAgICAgICAgQGRiLlZhckNoYXIoMjUwKQogIGNlc2FyZWFzICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTdHJpbmc/ICAgICAgICAgICAgICAgICAgICAgICBAZGIuVmFyQ2hhcigyNTApCiAgb2JpdG9zICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFN0cmluZz8gICAgICAgICAgICAgICAgICAgICAgIEBkYi5WYXJDaGFyKDI1MCkKICBwbGFuaWZpY2FjaW9uX2ZhbWlsaWFyICAgICAgICAgICAgICAgICAgICAgICAgQm9vbGVhbiAgICAgICAgICAgICAgICAgICAgICAgQGRlZmF1bHQoZmFsc2UpCiAgcGxhbmlmaWNhY2lvbl90aXBvICAgICAgICAgICAgICAgICAgICAgICAgICAgIFN0cmluZz8gICAgICAgICAgICAgICAgICAgICAgIEBkYi5WYXJDaGFyKDI1MCkKICBlbmZlcm1lZGFkX2VtYmFyYXpvICAgICAgICAgICAgICAgICAgICAgICAgICAgQm9vbGVhbiAgICAgICAgICAgICAgICAgICAgICAgQGRlZmF1bHQoZmFsc2UpCiAgY2xpbWF0ZXJpbyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEJvb2xlYW4gICAgICAgICAgICAgICAgICAgICAgIEBkZWZhdWx0KGZhbHNlKQogIGNsaW1hdGVyaW9faW5pY2lvICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTdHJpbmc/ICAgICAgICAgICAgICAgICAgICAgICBAZGIuVmFyQ2hhcigyNTApCiAgYXBhcmF0b19kaWdlc3Rpdm8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIEJvb2xlYW4gICAgICAgICAgICAgICAgICAgICAgIEBkZWZhdWx0KGZhbHNlKQogIGFwYXJhdG9fZGlnZXN0aXZvX29ic2VydmFjaW9uZXMgICAgICAgICAgICAgICBTdHJpbmc/ICAgICAgICAgICAgICAgICAgICAgICBAZGIuVGV4dAogIGFwYXJhdG9fcmVzcGlyYXRvcmlvICAgICAgICAgICAgICAgICAgICAgICAgICBCb29sZWFuICAgICAgICAgICAgICAgICAgICAgICBAZGVmYXVsdChmYWxzZSkKICBhcGFyYXRvX3Jlc3BpcmF0b3Jpb19vYnNlcnZhY2lvbmVzICAgICAgICAgICAgU3RyaW5nPyAgICAgICAgICAgICAgICAgICAgICAgQGRiLlRleHQKICBhcGFyYXRvX2NhcmRpb3Zhc2N1bGFyICAgICAgICAgICAgICAgICAgICAgICAgQm9vbGVhbiAgICAgICAgICAgICAgICAgICAgICAgQGRlZmF1bHQoZmFsc2UpCiAgYXBhcmF0b19jYXJkaW92YXNjdWxhcl9vYnNlcnZhY2lvbmVzICAgICAgICAgIFN0cmluZz8gICAgICAgICAgICAgICAgICAgICAgIEBkYi5UZXh0CiAgc2lzdGVtYV9tdXNjdWxvX2VzcXVlbGV0aWNvICAgICAgICAgICAgICAgICAgIEJvb2xlYW4gICAgICAgICAgICAgICAgICAgICAgIEBkZWZhdWx0KGZhbHNlKQogIHNpc3RlbWFfbXVzY3Vsb19lc3F1ZWxldGljb19vYnNlcnZhY2lvbmVzICAgICBTdHJpbmc/ICAgICAgICAgICAgICAgICAgICAgICBAZGIuVGV4dAogIGFwYXJhdG9fZ2VuaXRvX3VyaW5hcmlvICAgICAgICAgICAgICAgICAgICAgICBCb29sZWFuICAgICAgICAgICAgICAgICAgICAgICBAZGVmYXVsdChmYWxzZSkKICBhcGFyYXRvX2dlbml0b191cmluYXJpb19vYnNlcnZhY2lvbmVzICAgICAgICAgU3RyaW5nPyAgICAgICAgICAgICAgICAgICAgICAgQGRiLlRleHQKICBzaXN0ZW1hX2VuZG9jcmlubyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQm9vbGVhbiAgICAgICAgICAgICAgICAgICAgICAgQGRlZmF1bHQoZmFsc2UpCiAgc2lzdGVtYV9lbmRvY3Jpbm9fb2JzZXJ2YWNpb25lcyAgICAgICAgICAgICAgIFN0cmluZz8gICAgICAgICAgICAgICAgICAgICAgIEBkYi5UZXh0CiAgc2lzdGVtYV9uZXJ2aW9zb19jZW50cmFsICAgICAgICAgICAgICAgICAgICAgIEJvb2xlYW4gICAgICAgICAgICAgICAgICAgICAgIEBkZWZhdWx0KGZhbHNlKQogIHNpc3RlbWFfbmVydmlvc29fY2VudHJhbF9vYnNlcnZhY2lvbmVzICAgICAgICBTdHJpbmc/ICAgICAgICAgICAgICAgICAgICAgICBAZGIuVGV4dAogIHNpc3RlbWFfdGVndW1lbnRhcmlvICAgICAgICAgICAgICAgICAgICAgICAgICBCb29sZWFuPyAgICAgICAgICAgICAgICAgICAgICBAZGVmYXVsdChmYWxzZSkKICBzaXN0ZW1hX3RlZ3VtZW50YXJpb19vYnNlcnZhY2lvbmVzICAgICAgICAgICAgU3RyaW5nPyAgICAgICAgICAgICAgICAgICAgICAgQGRiLlRleHQKICBvcmdhbm9zX3NlbnRpZG9zICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQm9vbGVhbiAgICAgICAgICAgICAgICAgICAgICAgQGRlZmF1bHQoZmFsc2UpCiAgb3JnYW5vc19zZW50aWRvc19vYnNlcnZhY2lvbmVzICAgICAgICAgICAgICAgIFN0cmluZz8gICAgICAgICAgICAgICAgICAgICAgIEBkYi5UZXh0CiAgcHJvY2VkaW1pZW50b19hY3R1YWwgICAgICAgICAgICAgICAgICAgICAgICAgIFN0cmluZz8gICAgICAgICAgICAgICAgICAgICAgIEBkYi5UZXh0CiAgZXhwbG9yYWNpb25fZmlzaWNhICAgICAgICAgICAgICAgICAgICAgICAgICAgIFN0cmluZz8gICAgICAgICAgICAgICAgICAgICAgIEBkYi5UZXh0CiAgcmFkaW9ncmFmaWEgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEJvb2xlYW4gICAgICAgICAgICAgICAgICAgICAgIEBkZWZhdWx0KGZhbHNlKQogIHJhZGlvZ3JhZmlhX29ic2VydmFjaW9uZXMgICAgICAgICAgICAgICAgICAgICBTdHJpbmc/ICAgICAgICAgICAgICAgICAgICAgICBAZGIuVGV4dAogIGVsZWN0cm9jYXJkaW9ncmFtYSAgICAgICAgICAgICAgICAgICAgICAgICAgICBCb29sZWFuICAgICAgICAgICAgICAgICAgICAgICBAZGVmYXVsdChmYWxzZSkKICBlbGVjdHJvY2FyZGlvZ3JhbWFfb2JzZXJ2YWNpb25lcyAgICAgICAgICAgICAgU3RyaW5nPyAgICAgICAgICAgICAgICAgICAgICAgQGRiLlRleHQKICB0b21vZ3JhZmlhICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQm9vbGVhbj8gICAgICAgICAgICAgICAgICAgICAgQGRlZmF1bHQoZmFsc2UpCiAgdG9tb2dyYWZpYV9vYnNlcnZhY2lvbmVzICAgICAgICAgICAgICAgICAgICAgIFN0cmluZz8gICAgICAgICAgICAgICAgICAgICAgIEBkYi5UZXh0CiAgbGFib3JhdG9yaW8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEJvb2xlYW4gICAgICAgICAgICAgICAgICAgICAgIEBkZWZhdWx0KGZhbHNlKQogIGxhYm9yYXRvcmlvX29ic2VydmFjaW9uZXMgICAgICAgICAgICAgICAgICAgICBTdHJpbmc/ICAgICAgICAgICAgICAgICAgICAgICBAZGIuVGV4dAogIGdhc2VzX2FydGVyaWFsZXMgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBCb29sZWFuICAgICAgICAgICAgICAgICAgICAgICBAZGVmYXVsdChmYWxzZSkKICBnYXNlc19hcnRlcmlhbGVzX29ic2VydmFjaW9uZXMgICAgICAgICAgICAgICAgU3RyaW5nPyAgICAgICAgICAgICAgICAgICAgICAgQGRiLlRleHQKICBjaXJ1Z2lhX21heW9yICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU3RyaW5nPwogIGNhYmV6YSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTdHJpbmc/CiAgY3VlbGxvICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFN0cmluZz8KICB0b3JheCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU3RyaW5nPwogIGFiZG9tZW4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTdHJpbmc/CiAgZXh0cmVtaWRhZGVzICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFN0cmluZz8KICBnZW5pdGFsZXMgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU3RyaW5nPwogIHJlc3VsdGFkb3NfcHJldmlvcyAgICAgICAgICAgICAgICAgICAgICAgICAgICBTdHJpbmc/ICAgICAgICAgICAgICAgICAgICAgICBAZGIuVGV4dAogIHRlcmFwaWFfZW1wbGVhZGEgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTdHJpbmc/ICAgICAgICAgICAgICAgICAgICAgICBAZGIuVGV4dAogIGRpYWdub3N0aWNvcyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTdHJpbmc/ICAgICAgICAgICAgICAgICAgICAgICBAZGIuVGV4dAogIHBsYW4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTdHJpbmc/ICAgICAgICAgICAgICAgICAgICAgICBAZGIuVGV4dAogIGlkX3BhY2llbnRlICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBJbnQ/ICAgICAgICAgICAgICAgICAgICAgICAgICBAZGIuVW5zaWduZWRJbnQKICBpZF9pbmdyZXNvICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSW50PyAgICAgICAgICAgICAgICAgICAgICAgICAgQGRiLlVuc2lnbmVkSW50CiAgaWRfdXNlciAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEludCAgICAgICAgICAgICAgICAgICAgICAgICAgIEBkYi5VbnNpZ25lZEludAogIGlkX2F1dG9yaXpvICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBJbnQgICAgICAgICAgICAgICAgICAgICAgICAgICBAZGIuVW5zaWduZWRJbnQKICBjcmVhdGVkX2F0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRGF0ZVRpbWU/ICAgICAgICAgICAgICAgICAgICAgQGRiLlRpbWVzdGFtcCgwKQogIHVwZGF0ZWRfYXQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBEYXRlVGltZT8gICAgICAgICAgICAgICAgICAgICBAZGIuVGltZXN0YW1wKDApCiAgZGVsZXRlZF9hdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIERhdGVUaW1lPyAgICAgICAgICAgICAgICAgICAgIEBkYi5UaW1lc3RhbXAoMCkKICBoY2xfYW50ZWNlZGVudGVzX2ZhbWlsaWFyZXMgICAgICAgICAgICAgICAgICAgaGNsX2FudGVjZWRlbnRlc19mYW1pbGlhcmVzW10KICB1c2Vyc19oY2xfaGlzdG9yaWFfY2xpbmljYV9pZF9hdXRvcml6b1RvdXNlcnMgdXNlcnMgICAgICAgICAgICAgICAgICAgICAgICAgQHJlbGF0aW9uKCJoY2xfaGlzdG9yaWFfY2xpbmljYV9pZF9hdXRvcml6b1RvdXNlcnMiLCBmaWVsZHM6IFtpZF9hdXRvcml6b10sIHJlZmVyZW5jZXM6IFtpZF0sIG9uVXBkYXRlOiBSZXN0cmljdCwgbWFwOiAiaGNsX2hpc3RvcmlhX2NsaW5pY2FfaWRfYXV0b3Jpem9fZm9yZWlnbiIpCiAgaHB6X2luZ3Jlc29faG9zcGl0YWxhcmlvICAgICAgICAgICAgICAgICAgICAgIGhwel9pbmdyZXNvX2hvc3BpdGFsYXJpbz8gICAgIEByZWxhdGlvbihmaWVsZHM6IFtpZF9pbmdyZXNvXSwgcmVmZXJlbmNlczogW2lkXSwgb25EZWxldGU6IFJlc3RyaWN0LCBvblVwZGF0ZTogUmVzdHJpY3QsIG1hcDogImhjbF9oaXN0b3JpYV9jbGluaWNhX2lkX2luZ3Jlc29fZm9yZWlnbiIpCiAgaHB6X3BhY2llbnRlICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhwel9wYWNpZW50ZT8gICAgICAgICAgICAgICAgIEByZWxhdGlvbihmaWVsZHM6IFtpZF9wYWNpZW50ZV0sIHJlZmVyZW5jZXM6IFtpZF0sIG9uRGVsZXRlOiBSZXN0cmljdCwgb25VcGRhdGU6IFJlc3RyaWN0LCBtYXA6ICJoY2xfaGlzdG9yaWFfY2xpbmljYV9pZF9wYWNpZW50ZV9mb3JlaWduIikKICB1c2Vyc19oY2xfaGlzdG9yaWFfY2xpbmljYV9pZF91c2VyVG91c2VycyAgICAgdXNlcnMgICAgICAgICAgICAgICAgICAgICAgICAgQHJlbGF0aW9uKCJoY2xfaGlzdG9yaWFfY2xpbmljYV9pZF91c2VyVG91c2VycyIsIGZpZWxkczogW2lkX3VzZXJdLCByZWZlcmVuY2VzOiBbaWRdLCBvblVwZGF0ZTogUmVzdHJpY3QsIG1hcDogImhjbF9oaXN0b3JpYV9jbGluaWNhX2lkX3VzZXJfZm9yZWlnbiIpCgogIEBAaW5kZXgoW2lkX2F1dG9yaXpvXSwgbWFwOiAiaGNsX2hpc3RvcmlhX2NsaW5pY2FfaWRfYXV0b3Jpem9fZm9yZWlnbiIpCiAgQEBpbmRleChbaWRfaW5ncmVzb10sIG1hcDogImhjbF9oaXN0b3JpYV9jbGluaWNhX2lkX2luZ3Jlc29fZm9yZWlnbiIpCiAgQEBpbmRleChbaWRfcGFjaWVudGVdLCBtYXA6ICJoY2xfaGlzdG9yaWFfY2xpbmljYV9pZF9wYWNpZW50ZV9mb3JlaWduIikKICBAQGluZGV4KFtpZF91c2VyXSwgbWFwOiAiaGNsX2hpc3RvcmlhX2NsaW5pY2FfaWRfdXNlcl9mb3JlaWduIikKfQoKbW9kZWwgaHB6X2F1eGlsaWFyZXNfZHhfY29tZW50YXJpb3MgewogIGlkICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBCaWdJbnQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQGlkIEBkZWZhdWx0KGF1dG9pbmNyZW1lbnQoKSkgQGRiLlVuc2lnbmVkQmlnSW50CiAgY29tZW50YXJpbyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFN0cmluZz8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBAZGIuVGV4dAogIGlkX2F1eGlsaWFyICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBCaWdJbnQ/ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQGRiLlVuc2lnbmVkQmlnSW50CiAgaWRfdXNlciAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEludCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBAZGIuVW5zaWduZWRJbnQKICBpZF9hdXRvcml6byAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSW50ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBkYi5VbnNpZ25lZEludAogIGNyZWF0ZWRfYXQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBEYXRlVGltZT8gICAgICAgICAgICAgICAgICAgICAgICAgICAgQGRiLlRpbWVzdGFtcCgwKQogIHVwZGF0ZWRfYXQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBEYXRlVGltZT8gICAgICAgICAgICAgICAgICAgICAgICAgICAgQGRiLlRpbWVzdGFtcCgwKQogIGRlbGV0ZWRfYXQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBEYXRlVGltZT8gICAgICAgICAgICAgICAgICAgICAgICAgICAgQGRiLlRpbWVzdGFtcCgwKQogIHVzZXJzX2hwel9hdXhpbGlhcmVzX2R4X2NvbWVudGFyaW9zX2lkX2F1dG9yaXpvVG91c2VycyB1c2VycyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQHJlbGF0aW9uKCJocHpfYXV4aWxpYXJlc19keF9jb21lbnRhcmlvc19pZF9hdXRvcml6b1RvdXNlcnMiLCBmaWVsZHM6IFtpZF9hdXRvcml6b10sIHJlZmVyZW5jZXM6IFtpZF0sIG9uVXBkYXRlOiBSZXN0cmljdCwgbWFwOiAiaHB6X2F1eGlsaWFyZXNfZHhfY29tZW50YXJpb3NfaWRfYXV0b3Jpem9fZm9yZWlnbiIpCiAgaHB6X3BhY2llbnRlX2F1eGlsaWFyZXNfZGlhZ25vc3RpY28gICAgICAgICAgICAgICAgICAgIGhwel9wYWNpZW50ZV9hdXhpbGlhcmVzX2RpYWdub3N0aWNvPyBAcmVsYXRpb24oZmllbGRzOiBbaWRfYXV4aWxpYXJdLCByZWZlcmVuY2VzOiBbaWRdLCBvbkRlbGV0ZTogUmVzdHJpY3QsIG9uVXBkYXRlOiBSZXN0cmljdCwgbWFwOiAiaHB6X2F1eGlsaWFyZXNfZHhfY29tZW50YXJpb3NfaWRfYXV4aWxpYXJfZm9yZWlnbiIpCiAgdXNlcnNfaHB6X2F1eGlsaWFyZXNfZHhfY29tZW50YXJpb3NfaWRfdXNlclRvdXNlcnMgICAgIHVzZXJzICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBAcmVsYXRpb24oImhwel9hdXhpbGlhcmVzX2R4X2NvbWVudGFyaW9zX2lkX3VzZXJUb3VzZXJzIiwgZmllbGRzOiBbaWRfdXNlcl0sIHJlZmVyZW5jZXM6IFtpZF0sIG9uVXBkYXRlOiBSZXN0cmljdCwgbWFwOiAiaHB6X2F1eGlsaWFyZXNfZHhfY29tZW50YXJpb3NfaWRfdXNlcl9mb3JlaWduIikKCiAgQEBpbmRleChbaWRfYXV0b3Jpem9dLCBtYXA6ICJocHpfYXV4aWxpYXJlc19keF9jb21lbnRhcmlvc19pZF9hdXRvcml6b19mb3JlaWduIikKICBAQGluZGV4KFtpZF9hdXhpbGlhcl0sIG1hcDogImhwel9hdXhpbGlhcmVzX2R4X2NvbWVudGFyaW9zX2lkX2F1eGlsaWFyX2ZvcmVpZ24iKQogIEBAaW5kZXgoW2lkX3VzZXJdLCBtYXA6ICJocHpfYXV4aWxpYXJlc19keF9jb21lbnRhcmlvc19pZF91c2VyX2ZvcmVpZ24iKQp9Cgptb2RlbCBocHpfY2FtYV9oaXN0b3JpYWwgewogIGlkICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBJbnQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBAaWQgQGRlZmF1bHQoYXV0b2luY3JlbWVudCgpKSBAZGIuVW5zaWduZWRJbnQKICBpZF9zZXJ2aWNpbyAgICAgICAgICAgICAgICAgICAgICAgICAgSW50PyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQGRiLlVuc2lnbmVkSW50CiAgaWRfZXNwZWNpYWxpZGFkICAgICAgICAgICAgICAgICAgICAgIEludD8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBkYi5VbnNpZ25lZEludAogIGlkX2FyZWEgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBJbnQ/ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBAZGIuVW5zaWduZWRJbnQKICBpZF9jYW1hICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSW50PyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQGRiLlVuc2lnbmVkSW50CiAgaWRfaW5ncmVzbyAgICAgICAgICAgICAgICAgICAgICAgICAgIEludCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBkYi5VbnNpZ25lZEludAogIGlkX21lZGljbyAgICAgICAgICAgICAgICAgICAgICAgICAgICBJbnQ/ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBAZGIuVW5zaWduZWRJbnQKICBpZF9kaWFnbm9zdGljbyAgICAgICAgICAgICAgICAgICAgICAgSW50PyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQGRiLlVuc2lnbmVkSW50CiAgY3JlYXRlZF9hdCAgICAgICAgICAgICAgICAgICAgICAgICAgIERhdGVUaW1lPyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBkYi5UaW1lc3RhbXAoMCkKICB1cGRhdGVkX2F0ICAgICAgICAgICAgICAgICAgICAgICAgICAgRGF0ZVRpbWU/ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQGRiLlRpbWVzdGFtcCgwKQogIGVuZl9wcm9jZWRpbWllbnRvc19pbnZhc2l2b3MgICAgICAgICBlbmZfcHJvY2VkaW1pZW50b3NfaW52YXNpdm9zW10KICBlbmZfcHJvY2VkaW1pZW50b3NfaW52YXNpdm9zX2RldGFsbGUgZW5mX3Byb2NlZGltaWVudG9zX2ludmFzaXZvc19kZXRhbGxlW10KICBjYXRfY2FtYXMgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2F0X2NhbWFzPyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQHJlbGF0aW9uKGZpZWxkczogW2lkX2NhbWFdLCByZWZlcmVuY2VzOiBbaWRdLCBvbkRlbGV0ZTogUmVzdHJpY3QsIG9uVXBkYXRlOiBSZXN0cmljdCwgbWFwOiAiaHB6X2NhbWFfaGlzdG9yaWFsX2lkX2NhbWFfZm9yZWlnbiIpCiAgY2F0X2NpZTEwICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhdF9jaWUxMD8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIEByZWxhdGlvbihmaWVsZHM6IFtpZF9kaWFnbm9zdGljb10sIHJlZmVyZW5jZXM6IFtpZF0sIG9uRGVsZXRlOiBSZXN0cmljdCwgb25VcGRhdGU6IFJlc3RyaWN0LCBtYXA6ICJocHpfY2FtYV9oaXN0b3JpYWxfaWRfZGlhZ25vc3RpY29fZm9yZWlnbiIpCiAgY2F0X2VzcGVjaWFsaWRhZGVzICAgICAgICAgICAgICAgICAgIGNhdF9lc3BlY2lhbGlkYWRlcz8gICAgICAgICAgICAgICAgICAgIEByZWxhdGlvbihmaWVsZHM6IFtpZF9lc3BlY2lhbGlkYWRdLCByZWZlcmVuY2VzOiBbaWRdLCBvbkRlbGV0ZTogUmVzdHJpY3QsIG9uVXBkYXRlOiBSZXN0cmljdCwgbWFwOiAiaHB6X2NhbWFfaGlzdG9yaWFsX2lkX2VzcGVjaWFsaWRhZF9mb3JlaWduIikKICBocHpfaW5ncmVzb19ob3NwaXRhbGFyaW8gICAgICAgICAgICAgaHB6X2luZ3Jlc29faG9zcGl0YWxhcmlvICAgICAgICAgICAgICAgQHJlbGF0aW9uKGZpZWxkczogW2lkX2luZ3Jlc29dLCByZWZlcmVuY2VzOiBbaWRdLCBvblVwZGF0ZTogUmVzdHJpY3QsIG1hcDogImhwel9jYW1hX2hpc3RvcmlhbF9pZF9pbmdyZXNvX2ZvcmVpZ24iKQogIHJjaF9lbXBsZWFkb3MgICAgICAgICAgICAgICAgICAgICAgICByY2hfZW1wbGVhZG9zPyAgICAgICAgICAgICAgICAgICAgICAgICBAcmVsYXRpb24oZmllbGRzOiBbaWRfbWVkaWNvXSwgcmVmZXJlbmNlczogW2lkXSwgb25EZWxldGU6IFJlc3RyaWN0LCBvblVwZGF0ZTogUmVzdHJpY3QsIG1hcDogImhwel9jYW1hX2hpc3RvcmlhbF9pZF9tZWRpY29fZm9yZWlnbiIpCiAgaHB6X2NhdGV0ZXJfaW5zdGFsYWNpb24gICAgICAgICAgICAgIGhwel9jYXRldGVyX2luc3RhbGFjaW9uW10KICBocHpfZHhfaGlzdG9yaWFsICAgICAgICAgICAgICAgICAgICAgaHB6X2R4X2hpc3RvcmlhbFtdCiAgaHB6X2luZ3Jlc29fZXBpZGVtaW9faWFhcyAgICAgICAgICAgIGhwel9pbmdyZXNvX2VwaWRlbWlvX2lhYXNbXQogIGhwel9wYWNpZW50ZV9hdXhpbGlhcmVzX2RpYWdub3N0aWNvICBocHpfcGFjaWVudGVfYXV4aWxpYXJlc19kaWFnbm9zdGljb1tdCiAgaHB6X3BhY2llbnRlX25vdGFfbWVkaWNhICAgICAgICAgICAgIGhwel9wYWNpZW50ZV9ub3RhX21lZGljYVtdCgogIEBAaW5kZXgoW2lkX2NhbWFdLCBtYXA6ICJocHpfY2FtYV9oaXN0b3JpYWxfaWRfY2FtYV9mb3JlaWduIikKICBAQGluZGV4KFtpZF9kaWFnbm9zdGljb10sIG1hcDogImhwel9jYW1hX2hpc3RvcmlhbF9pZF9kaWFnbm9zdGljb19mb3JlaWduIikKICBAQGluZGV4KFtpZF9lc3BlY2lhbGlkYWRdLCBtYXA6ICJocHpfY2FtYV9oaXN0b3JpYWxfaWRfZXNwZWNpYWxpZGFkX2ZvcmVpZ24iKQogIEBAaW5kZXgoW2lkX2luZ3Jlc29dLCBtYXA6ICJocHpfY2FtYV9oaXN0b3JpYWxfaWRfaW5ncmVzb19mb3JlaWduIikKICBAQGluZGV4KFtpZF9tZWRpY29dLCBtYXA6ICJocHpfY2FtYV9oaXN0b3JpYWxfaWRfbWVkaWNvX2ZvcmVpZ24iKQp9Cgptb2RlbCBocHpfY2F0ZXRlcl9jb21wbGljYWNpb25lc19pbnN0YWxhY2lvbiB7CiAgaWQgICAgICAgICBCaWdJbnQgICAgQGlkIEBkZWZhdWx0KGF1dG9pbmNyZW1lbnQoKSkgQGRiLlVuc2lnbmVkQmlnSW50CiAgbm9tYnJlICAgICBTdHJpbmcKICBhY3Rpdm8gICAgIEJvb2xlYW4KICBjcmVhdGVkX2F0IERhdGVUaW1lPyBAZGIuVGltZXN0YW1wKDApCiAgdXBkYXRlZF9hdCBEYXRlVGltZT8gQGRiLlRpbWVzdGFtcCgwKQp9Cgptb2RlbCBocHpfY2F0ZXRlcl9pbnN0YWxhY2lvbiB7CiAgaWQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEludCAgICAgICAgICAgICAgICAgICAgICAgICBAaWQgQGRlZmF1bHQoYXV0b2luY3JlbWVudCgpKSBAZGIuVW5zaWduZWRJbnQKICBmZWNoYV9pbnN0YWxhY2lvbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRGF0ZVRpbWUgICAgICAgICAgICAgICAgICAgIEBkYi5EYXRlCiAgZmVjaGFfcmV0aXJvICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIERhdGVUaW1lPyAgICAgICAgICAgICAgICAgICBAZGIuRGF0ZQogIGlkX3RpcG8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBJbnQgICAgICAgICAgICAgICAgICAgICAgICAgQGRiLlVuc2lnbmVkSW50CiAgaWRfc2l0aW8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEludCAgICAgICAgICAgICAgICAgICAgICAgICBAZGIuVW5zaWduZWRJbnQKICBpZF9pbnN0YWxvICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSW50PyAgICAgICAgICAgICAgICAgICAgICAgIEBkYi5VbnNpZ25lZEludAogIGlkX2luZ3Jlc28gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBJbnQgICAgICAgICAgICAgICAgICAgICAgICAgQGRiLlVuc2lnbmVkSW50CiAgaWRfdWJpY2FjaW9uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEludCAgICAgICAgICAgICAgICAgICAgICAgICBAZGIuVW5zaWduZWRJbnQKICBpZF9yZXRpcm8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSW50PyAgICAgICAgICAgICAgICAgICAgICAgIEBkYi5VbnNpZ25lZEludAogIGNyZWF0ZWRfYXQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBEYXRlVGltZT8gICAgICAgICAgICAgICAgICAgQGRiLlRpbWVzdGFtcCgwKQogIHVwZGF0ZWRfYXQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBEYXRlVGltZT8gICAgICAgICAgICAgICAgICAgQGRiLlRpbWVzdGFtcCgwKQogIGRlbGV0ZWRfYXQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBEYXRlVGltZT8gICAgICAgICAgICAgICAgICAgQGRiLlRpbWVzdGFtcCgwKQogIGhwel9pbmdyZXNvX2hvc3BpdGFsYXJpbyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBocHpfaW5ncmVzb19ob3NwaXRhbGFyaW8gICAgQHJlbGF0aW9uKGZpZWxkczogW2lkX2luZ3Jlc29dLCByZWZlcmVuY2VzOiBbaWRdLCBvblVwZGF0ZTogUmVzdHJpY3QsIG1hcDogImhwel9jYXRldGVyX2luc3RhbGFjaW9uX2lkX2luZ3Jlc29fZm9yZWlnbiIpCiAgcmNoX2VtcGxlYWRvc19ocHpfY2F0ZXRlcl9pbnN0YWxhY2lvbl9pZF9pbnN0YWxvVG9yY2hfZW1wbGVhZG9zIHJjaF9lbXBsZWFkb3M/ICAgICAgICAgICAgICBAcmVsYXRpb24oImhwel9jYXRldGVyX2luc3RhbGFjaW9uX2lkX2luc3RhbG9Ub3JjaF9lbXBsZWFkb3MiLCBmaWVsZHM6IFtpZF9pbnN0YWxvXSwgcmVmZXJlbmNlczogW2lkXSwgb25EZWxldGU6IFJlc3RyaWN0LCBvblVwZGF0ZTogUmVzdHJpY3QsIG1hcDogImhwel9jYXRldGVyX2luc3RhbGFjaW9uX2lkX2luc3RhbG9fZm9yZWlnbiIpCiAgcmNoX2VtcGxlYWRvc19ocHpfY2F0ZXRlcl9pbnN0YWxhY2lvbl9pZF9yZXRpcm9Ub3JjaF9lbXBsZWFkb3MgIHJjaF9lbXBsZWFkb3M/ICAgICAgICAgICAgICBAcmVsYXRpb24oImhwel9jYXRldGVyX2luc3RhbGFjaW9uX2lkX3JldGlyb1RvcmNoX2VtcGxlYWRvcyIsIGZpZWxkczogW2lkX3JldGlyb10sIHJlZmVyZW5jZXM6IFtpZF0sIG9uRGVsZXRlOiBSZXN0cmljdCwgb25VcGRhdGU6IFJlc3RyaWN0LCBtYXA6ICJocHpfY2F0ZXRlcl9pbnN0YWxhY2lvbl9pZF9yZXRpcm9fZm9yZWlnbiIpCiAgY2F0X2NhdGV0ZXJfc2l0aW9fYW5hdG9taWNvICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhdF9jYXRldGVyX3NpdGlvX2FuYXRvbWljbyBAcmVsYXRpb24oZmllbGRzOiBbaWRfc2l0aW9dLCByZWZlcmVuY2VzOiBbaWRdLCBvblVwZGF0ZTogUmVzdHJpY3QsIG1hcDogImhwel9jYXRldGVyX2luc3RhbGFjaW9uX2lkX3NpdGlvX2ZvcmVpZ24iKQogIGNhdF9jYXRldGVyX3RpcG8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXRfY2F0ZXRlcl90aXBvICAgICAgICAgICAgQHJlbGF0aW9uKGZpZWxkczogW2lkX3RpcG9dLCByZWZlcmVuY2VzOiBbaWRdLCBvblVwZGF0ZTogUmVzdHJpY3QsIG1hcDogImhwel9jYXRldGVyX2luc3RhbGFjaW9uX2lkX3RpcG9fZm9yZWlnbiIpCiAgaHB6X2NhbWFfaGlzdG9yaWFsICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhwel9jYW1hX2hpc3RvcmlhbCAgICAgICAgICBAcmVsYXRpb24oZmllbGRzOiBbaWRfdWJpY2FjaW9uXSwgcmVmZXJlbmNlczogW2lkXSwgb25VcGRhdGU6IFJlc3RyaWN0LCBtYXA6ICJocHpfY2F0ZXRlcl9pbnN0YWxhY2lvbl9pZF91YmljYWNpb25fZm9yZWlnbiIpCgogIEBAaW5kZXgoW2lkX2luZ3Jlc29dLCBtYXA6ICJocHpfY2F0ZXRlcl9pbnN0YWxhY2lvbl9pZF9pbmdyZXNvX2ZvcmVpZ24iKQogIEBAaW5kZXgoW2lkX2luc3RhbG9dLCBtYXA6ICJocHpfY2F0ZXRlcl9pbnN0YWxhY2lvbl9pZF9pbnN0YWxvX2ZvcmVpZ24iKQogIEBAaW5kZXgoW2lkX3JldGlyb10sIG1hcDogImhwel9jYXRldGVyX2luc3RhbGFjaW9uX2lkX3JldGlyb19mb3JlaWduIikKICBAQGluZGV4KFtpZF9zaXRpb10sIG1hcDogImhwel9jYXRldGVyX2luc3RhbGFjaW9uX2lkX3NpdGlvX2ZvcmVpZ24iKQogIEBAaW5kZXgoW2lkX3RpcG9dLCBtYXA6ICJocHpfY2F0ZXRlcl9pbnN0YWxhY2lvbl9pZF90aXBvX2ZvcmVpZ24iKQogIEBAaW5kZXgoW2lkX3ViaWNhY2lvbl0sIG1hcDogImhwel9jYXRldGVyX2luc3RhbGFjaW9uX2lkX3ViaWNhY2lvbl9mb3JlaWduIikKfQoKbW9kZWwgaHB6X2NhdGV0ZXJfcHJvYmxlbWFzX21hbmVqbyB7CiAgaWQgICAgICAgICBCaWdJbnQgICAgQGlkIEBkZWZhdWx0KGF1dG9pbmNyZW1lbnQoKSkgQGRiLlVuc2lnbmVkQmlnSW50CiAgbm9tYnJlICAgICBTdHJpbmcKICBhY3Rpdm8gICAgIEJvb2xlYW4KICBjcmVhdGVkX2F0IERhdGVUaW1lPyBAZGIuVGltZXN0YW1wKDApCiAgdXBkYXRlZF9hdCBEYXRlVGltZT8gQGRiLlRpbWVzdGFtcCgwKQp9Cgptb2RlbCBocHpfY2F0ZXRlcl90aXBvc19pbnNlcmNpb24gewogIGlkICAgICAgICAgQmlnSW50ICAgIEBpZCBAZGVmYXVsdChhdXRvaW5jcmVtZW50KCkpIEBkYi5VbnNpZ25lZEJpZ0ludAogIG5vbWJyZSAgICAgU3RyaW5nCiAgYWN0aXZvICAgICBCb29sZWFuCiAgY3JlYXRlZF9hdCBEYXRlVGltZT8gQGRiLlRpbWVzdGFtcCgwKQogIHVwZGF0ZWRfYXQgRGF0ZVRpbWU/IEBkYi5UaW1lc3RhbXAoMCkKfQoKLy8vIFRoZSB1bmRlcmx5aW5nIHRhYmxlIGRvZXMgbm90IGNvbnRhaW4gYSB2YWxpZCB1bmlxdWUgaWRlbnRpZmllciBhbmQgY2FuIHRoZXJlZm9yZSBjdXJyZW50bHkgbm90IGJlIGhhbmRsZWQgYnkgUHJpc21hIENsaWVudC4KbW9kZWwgaHB6X2NpdGFzX2hpc3RvcmlhbCB7CiAgdGlwb19jaXRhICAgICAgICAgICAgU3RyaW5nICAgICAgICAgICAgICAgQGRiLlZhckNoYXIoMTAwKQogIGVzdGF0dXMgICAgICAgICAgICAgIFN0cmluZwogIGZlY2hhX2NpdGFfaW5pY2lvICAgIERhdGVUaW1lPyAgICAgICAgICAgIEBkYi5EYXRlVGltZSgwKQogIGlkX2NpdGEgICAgICAgICAgICAgIEludCAgICAgICAgICAgICAgICAgIEBkYi5VbnNpZ25lZEludAogIGlkX2VzcGVjaWFsaWRhZCAgICAgIEludD8gICAgICAgICAgICAgICAgIEBkYi5VbnNpZ25lZEludAogIGlkX21lZGljbyAgICAgICAgICAgIEludD8gICAgICAgICAgICAgICAgIEBkYi5VbnNpZ25lZEludAogIHVzZXIgICAgICAgICAgICAgICAgIFN0cmluZz8KICBpZF91c2VyICAgICAgICAgICAgICBTdHJpbmc/CiAgYXV0b3Jpem8gICAgICAgICAgICAgU3RyaW5nPwogIGlkX2F1dG9yaXpvICAgICAgICAgIFN0cmluZz8KICBjcmVhdGVkX2F0ICAgICAgICAgICBEYXRlVGltZT8gICAgICAgICAgICBAZGIuVGltZXN0YW1wKDApCiAgdXBkYXRlZF9hdCAgICAgICAgICAgRGF0ZVRpbWU/ICAgICAgICAgICAgQGRiLlRpbWVzdGFtcCgwKQogIGRlbGV0ZWRfYXQgICAgICAgICAgIERhdGVUaW1lPyAgICAgICAgICAgIEBkYi5UaW1lc3RhbXAoMCkKICBocHpfaW5ncmVzb19jb25zdWx0YSBocHpfaW5ncmVzb19jb25zdWx0YSBAcmVsYXRpb24oZmllbGRzOiBbaWRfY2l0YV0sIHJlZmVyZW5jZXM6IFtpZF0sIG9uVXBkYXRlOiBSZXN0cmljdCwgbWFwOiAiaHB6X2NpdGFzX2hpc3RvcmlhbF9pZF9jaXRhX2ZvcmVpZ24iKQogIGNhdF9lc3BlY2lhbGlkYWRlcyAgIGNhdF9lc3BlY2lhbGlkYWRlcz8gIEByZWxhdGlvbihmaWVsZHM6IFtpZF9lc3BlY2lhbGlkYWRdLCByZWZlcmVuY2VzOiBbaWRdLCBvbkRlbGV0ZTogUmVzdHJpY3QsIG9uVXBkYXRlOiBSZXN0cmljdCwgbWFwOiAiaHB6X2NpdGFzX2hpc3RvcmlhbF9pZF9lc3BlY2lhbGlkYWRfZm9yZWlnbiIpCiAgcmNoX2VtcGxlYWRvcyAgICAgICAgcmNoX2VtcGxlYWRvcz8gICAgICAgQHJlbGF0aW9uKGZpZWxkczogW2lkX21lZGljb10sIHJlZmVyZW5jZXM6IFtpZF0sIG9uRGVsZXRlOiBSZXN0cmljdCwgb25VcGRhdGU6IFJlc3RyaWN0LCBtYXA6ICJocHpfY2l0YXNfaGlzdG9yaWFsX2lkX21lZGljb19mb3JlaWduIikKCiAgQEBpbmRleChbaWRfY2l0YV0sIG1hcDogImhwel9jaXRhc19oaXN0b3JpYWxfaWRfY2l0YV9mb3JlaWduIikKICBAQGluZGV4KFtpZF9lc3BlY2lhbGlkYWRdLCBtYXA6ICJocHpfY2l0YXNfaGlzdG9yaWFsX2lkX2VzcGVjaWFsaWRhZF9mb3JlaWduIikKICBAQGluZGV4KFtpZF9tZWRpY29dLCBtYXA6ICJocHpfY2l0YXNfaGlzdG9yaWFsX2lkX21lZGljb19mb3JlaWduIikKICBAQGlnbm9yZQp9Cgptb2RlbCBocHpfY2x1ZV9oaXN0b3JpYWwgewogIGlkICAgICAgICAgICAgICAgICAgICAgICBJbnQgICAgICAgICAgICAgICAgICAgICAgQGlkIEBkZWZhdWx0KGF1dG9pbmNyZW1lbnQoKSkgQGRiLlVuc2lnbmVkSW50CiAgaWRfaW5ncmVzbyAgICAgICAgICAgICAgIEludCAgICAgICAgICAgICAgICAgICAgICBAZGIuVW5zaWduZWRJbnQKICBpZF9jbHVlICAgICAgICAgICAgICAgICAgSW50ICAgICAgICAgICAgICAgICAgICAgIEBkYi5VbnNpZ25lZEludAogIGNyZWF0ZWRfYXQgICAgICAgICAgICAgICBEYXRlVGltZT8gICAgICAgICAgICAgICAgQGRiLlRpbWVzdGFtcCgwKQogIHVwZGF0ZWRfYXQgICAgICAgICAgICAgICBEYXRlVGltZT8gICAgICAgICAgICAgICAgQGRiLlRpbWVzdGFtcCgwKQogIGNhdF9jbHVlcyAgICAgICAgICAgICAgICBjYXRfY2x1ZXMgICAgICAgICAgICAgICAgQHJlbGF0aW9uKGZpZWxkczogW2lkX2NsdWVdLCByZWZlcmVuY2VzOiBbaWRdLCBvblVwZGF0ZTogUmVzdHJpY3QsIG1hcDogImhwel9jbHVlX2hpc3RvcmlhbF9pZF9jbHVlX2ZvcmVpZ24iKQogIGhwel9pbmdyZXNvX2hvc3BpdGFsYXJpbyBocHpfaW5ncmVzb19ob3NwaXRhbGFyaW8gQHJlbGF0aW9uKGZpZWxkczogW2lkX2luZ3Jlc29dLCByZWZlcmVuY2VzOiBbaWRdLCBvblVwZGF0ZTogUmVzdHJpY3QsIG1hcDogImhwel9jbHVlX2hpc3RvcmlhbF9pZF9pbmdyZXNvX2ZvcmVpZ24iKQoKICBAQGluZGV4KFtpZF9jbHVlXSwgbWFwOiAiaHB6X2NsdWVfaGlzdG9yaWFsX2lkX2NsdWVfZm9yZWlnbiIpCiAgQEBpbmRleChbaWRfaW5ncmVzb10sIG1hcDogImhwel9jbHVlX2hpc3RvcmlhbF9pZF9pbmdyZXNvX2ZvcmVpZ24iKQp9Cgptb2RlbCBocHpfZHhfaGlzdG9yaWFsIHsKICBpZCAgICAgICAgICAgICAgICAgICAgICAgSW50ICAgICAgICAgICAgICAgICAgICAgIEBpZCBAZGVmYXVsdChhdXRvaW5jcmVtZW50KCkpIEBkYi5VbnNpZ25lZEludAogIGR4X2luZm9ybWFsICAgICAgICAgICAgICBTdHJpbmcgICAgICAgICAgICAgICAgICAgQGRiLlRleHQKICBhY3Rpdm8gICAgICAgICAgICAgICAgICAgQm9vbGVhbiAgICAgICAgICAgICAgICAgIEBkZWZhdWx0KHRydWUpCiAgaW5ncmVzbyAgICAgICAgICAgICAgICAgIEJvb2xlYW4gICAgICAgICAgICAgICAgICBAZGVmYXVsdChmYWxzZSkKICBlZ3Jlc28gICAgICAgICAgICAgICAgICAgQm9vbGVhbiAgICAgICAgICAgICAgICAgIEBkZWZhdWx0KGZhbHNlKQogIGlkX2RpYWdub3N0aWNvICAgICAgICAgICBJbnQ/ICAgICAgICAgICAgICAgICAgICAgQGRiLlVuc2lnbmVkSW50CiAgaWRfaW5ncmVzbyAgICAgICAgICAgICAgIEludCAgICAgICAgICAgICAgICAgICAgICBAZGIuVW5zaWduZWRJbnQKICBpZF9tZWRpY28gICAgICAgICAgICAgICAgSW50PyAgICAgICAgICAgICAgICAgICAgIEBkYi5VbnNpZ25lZEludAogIGlkX3ViaWNhY2lvbiAgICAgICAgICAgICBJbnQgICAgICAgICAgICAgICAgICAgICAgQGRiLlVuc2lnbmVkSW50CiAgY3JlYXRlZF9hdCAgICAgICAgICAgICAgIERhdGVUaW1lPyAgICAgICAgICAgICAgICBAZGIuVGltZXN0YW1wKDApCiAgdXBkYXRlZF9hdCAgICAgICAgICAgICAgIERhdGVUaW1lPyAgICAgICAgICAgICAgICBAZGIuVGltZXN0YW1wKDApCiAgY2F0X2NpZTEwICAgICAgICAgICAgICAgIGNhdF9jaWUxMD8gICAgICAgICAgICAgICBAcmVsYXRpb24oZmllbGRzOiBbaWRfZGlhZ25vc3RpY29dLCByZWZlcmVuY2VzOiBbaWRdLCBvbkRlbGV0ZTogUmVzdHJpY3QsIG9uVXBkYXRlOiBSZXN0cmljdCwgbWFwOiAiaHB6X2R4X2hpc3RvcmlhbF9pZF9kaWFnbm9zdGljb19mb3JlaWduIikKICBocHpfaW5ncmVzb19ob3NwaXRhbGFyaW8gaHB6X2luZ3Jlc29faG9zcGl0YWxhcmlvIEByZWxhdGlvbihmaWVsZHM6IFtpZF9pbmdyZXNvXSwgcmVmZXJlbmNlczogW2lkXSwgb25VcGRhdGU6IFJlc3RyaWN0LCBtYXA6ICJocHpfZHhfaGlzdG9yaWFsX2lkX2luZ3Jlc29fZm9yZWlnbiIpCiAgcmNoX2VtcGxlYWRvcyAgICAgICAgICAgIHJjaF9lbXBsZWFkb3M/ICAgICAgICAgICBAcmVsYXRpb24oZmllbGRzOiBbaWRfbWVkaWNvXSwgcmVmZXJlbmNlczogW2lkXSwgb25EZWxldGU6IFJlc3RyaWN0LCBvblVwZGF0ZTogUmVzdHJpY3QsIG1hcDogImhwel9keF9oaXN0b3JpYWxfaWRfbWVkaWNvX2ZvcmVpZ24iKQogIGhwel9jYW1hX2hpc3RvcmlhbCAgICAgICBocHpfY2FtYV9oaXN0b3JpYWwgICAgICAgQHJlbGF0aW9uKGZpZWxkczogW2lkX3ViaWNhY2lvbl0sIHJlZmVyZW5jZXM6IFtpZF0sIG9uVXBkYXRlOiBSZXN0cmljdCwgbWFwOiAiaHB6X2R4X2hpc3RvcmlhbF9pZF91YmljYWNpb25fZm9yZWlnbiIpCiAgaHB6X25vdGFzX2RpYWdub3N0aWNvcyAgIGhwel9ub3Rhc19kaWFnbm9zdGljb3NbXQoKICBAQGluZGV4KFtpZF9kaWFnbm9zdGljb10sIG1hcDogImhwel9keF9oaXN0b3JpYWxfaWRfZGlhZ25vc3RpY29fZm9yZWlnbiIpCiAgQEBpbmRleChbaWRfaW5ncmVzb10sIG1hcDogImhwel9keF9oaXN0b3JpYWxfaWRfaW5ncmVzb19mb3JlaWduIikKICBAQGluZGV4KFtpZF9tZWRpY29dLCBtYXA6ICJocHpfZHhfaGlzdG9yaWFsX2lkX21lZGljb19mb3JlaWduIikKICBAQGluZGV4KFtpZF91YmljYWNpb25dLCBtYXA6ICJocHpfZHhfaGlzdG9yaWFsX2lkX3ViaWNhY2lvbl9mb3JlaWduIikKfQoKbW9kZWwgaHB6X2VuZl9pbnRlcnZlbmNpb25lcyB7CiAgaWQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEJpZ0ludCAgICAgICAgICAgICAgICAgICBAaWQgQGRlZmF1bHQoYXV0b2luY3JlbWVudCgpKSBAZGIuVW5zaWduZWRCaWdJbnQKICBjb2RpZ29fbmFuZGEgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU3RyaW5nICAgICAgICAgICAgICAgICAgIEBkYi5WYXJDaGFyKDUpCiAgaW50ZXJ2ZW5jaW9uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFN0cmluZz8gICAgICAgICAgICAgICAgICBAZGIuVGV4dAogIG1vdGl2b19jYW5jZWxhY2lvbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTdHJpbmc/ICAgICAgICAgICAgICAgICAgQGRiLlRleHQKICBmZWNoYV9lbGFib3JhY2lvbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRGF0ZVRpbWUgICAgICAgICAgICAgICAgIEBkYi5EYXRlVGltZSgwKQogIGlkX2ZhY3RvciAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBCaWdJbnQ/ICAgICAgICAgICAgICAgICAgQGRiLlVuc2lnbmVkQmlnSW50CiAgaWRfc2ludG9tYSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEJpZ0ludD8gICAgICAgICAgICAgICAgICBAZGIuVW5zaWduZWRCaWdJbnQKICBpZF9pbmdyZXNvICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSW50ICAgICAgICAgICAgICAgICAgICAgIEBkYi5VbnNpZ25lZEludAogIGlkX3VzZXIgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBJbnQgICAgICAgICAgICAgICAgICAgICAgQGRiLlVuc2lnbmVkSW50CiAgaWRfYXV0b3Jpem8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEludCAgICAgICAgICAgICAgICAgICAgICBAZGIuVW5zaWduZWRJbnQKICBpZF9jYW5jZWxvICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSW50PyAgICAgICAgICAgICAgICAgICAgIEBkYi5VbnNpZ25lZEludAogIGNyZWF0ZWRfYXQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBEYXRlVGltZT8gICAgICAgICAgICAgICAgQGRiLlRpbWVzdGFtcCgwKQogIHVwZGF0ZWRfYXQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBEYXRlVGltZT8gICAgICAgICAgICAgICAgQGRiLlRpbWVzdGFtcCgwKQogIGRlbGV0ZWRfYXQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBEYXRlVGltZT8gICAgICAgICAgICAgICAgQGRiLlRpbWVzdGFtcCgwKQogIHVzZXJzX2hwel9lbmZfaW50ZXJ2ZW5jaW9uZXNfaWRfYXV0b3Jpem9Ub3VzZXJzICAgICAgICB1c2VycyAgICAgICAgICAgICAgICAgICAgQHJlbGF0aW9uKCJocHpfZW5mX2ludGVydmVuY2lvbmVzX2lkX2F1dG9yaXpvVG91c2VycyIsIGZpZWxkczogW2lkX2F1dG9yaXpvXSwgcmVmZXJlbmNlczogW2lkXSwgb25VcGRhdGU6IFJlc3RyaWN0LCBtYXA6ICJocHpfZW5mX2ludGVydmVuY2lvbmVzX2lkX2F1dG9yaXpvX2ZvcmVpZ24iKQogIHVzZXJzX2hwel9lbmZfaW50ZXJ2ZW5jaW9uZXNfaWRfY2FuY2Vsb1RvdXNlcnMgICAgICAgICB1c2Vycz8gICAgICAgICAgICAgICAgICAgQHJlbGF0aW9uKCJocHpfZW5mX2ludGVydmVuY2lvbmVzX2lkX2NhbmNlbG9Ub3VzZXJzIiwgZmllbGRzOiBbaWRfY2FuY2Vsb10sIHJlZmVyZW5jZXM6IFtpZF0sIG9uRGVsZXRlOiBSZXN0cmljdCwgb25VcGRhdGU6IFJlc3RyaWN0LCBtYXA6ICJocHpfZW5mX2ludGVydmVuY2lvbmVzX2lkX2NhbmNlbG9fZm9yZWlnbiIpCiAgY2F0X25hbmRhX2hwel9lbmZfaW50ZXJ2ZW5jaW9uZXNfaWRfZmFjdG9yVG9jYXRfbmFuZGEgIGNhdF9uYW5kYT8gICAgICAgICAgICAgICBAcmVsYXRpb24oImhwel9lbmZfaW50ZXJ2ZW5jaW9uZXNfaWRfZmFjdG9yVG9jYXRfbmFuZGEiLCBmaWVsZHM6IFtpZF9mYWN0b3JdLCByZWZlcmVuY2VzOiBbaWRdLCBvbkRlbGV0ZTogUmVzdHJpY3QsIG9uVXBkYXRlOiBSZXN0cmljdCwgbWFwOiAiaHB6X2VuZl9pbnRlcnZlbmNpb25lc19pZF9mYWN0b3JfZm9yZWlnbiIpCiAgaHB6X2luZ3Jlc29faG9zcGl0YWxhcmlvICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhwel9pbmdyZXNvX2hvc3BpdGFsYXJpbyBAcmVsYXRpb24oZmllbGRzOiBbaWRfaW5ncmVzb10sIHJlZmVyZW5jZXM6IFtpZF0sIG9uVXBkYXRlOiBSZXN0cmljdCwgbWFwOiAiaHB6X2VuZl9pbnRlcnZlbmNpb25lc19pZF9pbmdyZXNvX2ZvcmVpZ24iKQogIGNhdF9uYW5kYV9ocHpfZW5mX2ludGVydmVuY2lvbmVzX2lkX3NpbnRvbWFUb2NhdF9uYW5kYSBjYXRfbmFuZGE/ICAgICAgICAgICAgICAgQHJlbGF0aW9uKCJocHpfZW5mX2ludGVydmVuY2lvbmVzX2lkX3NpbnRvbWFUb2NhdF9uYW5kYSIsIGZpZWxkczogW2lkX3NpbnRvbWFdLCByZWZlcmVuY2VzOiBbaWRdLCBvbkRlbGV0ZTogUmVzdHJpY3QsIG9uVXBkYXRlOiBSZXN0cmljdCwgbWFwOiAiaHB6X2VuZl9pbnRlcnZlbmNpb25lc19pZF9zaW50b21hX2ZvcmVpZ24iKQogIHVzZXJzX2hwel9lbmZfaW50ZXJ2ZW5jaW9uZXNfaWRfdXNlclRvdXNlcnMgICAgICAgICAgICB1c2VycyAgICAgICAgICAgICAgICAgICAgQHJlbGF0aW9uKCJocHpfZW5mX2ludGVydmVuY2lvbmVzX2lkX3VzZXJUb3VzZXJzIiwgZmllbGRzOiBbaWRfdXNlcl0sIHJlZmVyZW5jZXM6IFtpZF0sIG9uVXBkYXRlOiBSZXN0cmljdCwgbWFwOiAiaHB6X2VuZl9pbnRlcnZlbmNpb25lc19pZF91c2VyX2ZvcmVpZ24iKQoKICBAQGluZGV4KFtpZF9hdXRvcml6b10sIG1hcDogImhwel9lbmZfaW50ZXJ2ZW5jaW9uZXNfaWRfYXV0b3Jpem9fZm9yZWlnbiIpCiAgQEBpbmRleChbaWRfY2FuY2Vsb10sIG1hcDogImhwel9lbmZfaW50ZXJ2ZW5jaW9uZXNfaWRfY2FuY2Vsb19mb3JlaWduIikKICBAQGluZGV4KFtpZF9mYWN0b3JdLCBtYXA6ICJocHpfZW5mX2ludGVydmVuY2lvbmVzX2lkX2ZhY3Rvcl9mb3JlaWduIikKICBAQGluZGV4KFtpZF9pbmdyZXNvXSwgbWFwOiAiaHB6X2VuZl9pbnRlcnZlbmNpb25lc19pZF9pbmdyZXNvX2ZvcmVpZ24iKQogIEBAaW5kZXgoW2lkX3NpbnRvbWFdLCBtYXA6ICJocHpfZW5mX2ludGVydmVuY2lvbmVzX2lkX3NpbnRvbWFfZm9yZWlnbiIpCiAgQEBpbmRleChbaWRfdXNlcl0sIG1hcDogImhwel9lbmZfaW50ZXJ2ZW5jaW9uZXNfaWRfdXNlcl9mb3JlaWduIikKfQoKbW9kZWwgaHB6X2Zvcm1hdG9zX21lZGljb3MgewogIGlkICAgICAgICAgICAgICAgICAgICAgQmlnSW50ICAgICAgICAgICAgICAgICAgQGlkIEBkZWZhdWx0KGF1dG9pbmNyZW1lbnQoKSkgQGRiLlVuc2lnbmVkQmlnSW50CiAgaWRfcHJlZ3VudGEgICAgICAgICAgICBCaWdJbnQgICAgICAgICAgICAgICAgICBAZGIuVW5zaWduZWRCaWdJbnQKICBpZF9yZXNwdWVzdGEgICAgICAgICAgIEJpZ0ludD8gICAgICAgICAgICAgICAgIEBkYi5VbnNpZ25lZEJpZ0ludAogIGlkX25vdGEgICAgICAgICAgICAgICAgQmlnSW50PyAgICAgICAgICAgICAgICAgQGRiLlVuc2lnbmVkQmlnSW50CiAgb2JzZXJ2YWNpb25lcyAgICAgICAgICBTdHJpbmc/ICAgICAgICAgICAgICAgICBAZGIuVGV4dAogIGlkX3VzZXIgICAgICAgICAgICAgICAgQmlnSW50PyAgICAgICAgICAgICAgICAgQGRiLlVuc2lnbmVkQmlnSW50CiAgaWRfYXV0b3Jpem8gICAgICAgICAgICBCaWdJbnQ/ICAgICAgICAgICAgICAgICBAZGIuVW5zaWduZWRCaWdJbnQKICBjcmVhdGVkX2F0ICAgICAgICAgICAgIERhdGVUaW1lPyAgICAgICAgICAgICAgIEBkYi5UaW1lc3RhbXAoMCkKICB1cGRhdGVkX2F0ICAgICAgICAgICAgIERhdGVUaW1lPyAgICAgICAgICAgICAgIEBkYi5UaW1lc3RhbXAoMCkKICBkZWxldGVkX2F0ICAgICAgICAgICAgIERhdGVUaW1lPyAgICAgICAgICAgICAgIEBkYi5UaW1lc3RhbXAoMCkKICBjYXRfZm9ybWF0b19wcmVndW50YXMgIGNhdF9mb3JtYXRvX3ByZWd1bnRhcyAgIEByZWxhdGlvbihmaWVsZHM6IFtpZF9wcmVndW50YV0sIHJlZmVyZW5jZXM6IFtpZF0sIG9uVXBkYXRlOiBSZXN0cmljdCwgbWFwOiAiaHB6X2Zvcm1hdG9zX21lZGljb3NfaWRfcHJlZ3VudGFfZm9yZWlnbiIpCiAgY2F0X2Zvcm1hdG9fcmVzcHVlc3RhcyBjYXRfZm9ybWF0b19yZXNwdWVzdGFzPyBAcmVsYXRpb24oZmllbGRzOiBbaWRfcmVzcHVlc3RhXSwgcmVmZXJlbmNlczogW2lkXSwgb25EZWxldGU6IFJlc3RyaWN0LCBvblVwZGF0ZTogUmVzdHJpY3QsIG1hcDogImhwel9mb3JtYXRvc19tZWRpY29zX2lkX3Jlc3B1ZXN0YV9mb3JlaWduIikKCiAgQEBpbmRleChbaWRfcHJlZ3VudGFdLCBtYXA6ICJocHpfZm9ybWF0b3NfbWVkaWNvc19pZF9wcmVndW50YV9mb3JlaWduIikKICBAQGluZGV4KFtpZF9yZXNwdWVzdGFdLCBtYXA6ICJocHpfZm9ybWF0b3NfbWVkaWNvc19pZF9yZXNwdWVzdGFfZm9yZWlnbiIpCn0KCm1vZGVsIGhwel9pbmRpY2FjaW9uX21lZGljYW1lbnRvcyB7CiAgaWQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQmlnSW50ICAgICAgICAgICAgICAgICAgICAgICAgICBAaWQgQGRlZmF1bHQoYXV0b2luY3JlbWVudCgpKSBAZGIuVW5zaWduZWRCaWdJbnQKICBjYW50aWRhZCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTdHJpbmcgICAgICAgICAgICAgICAgICAgICAgICAgIEBkYi5WYXJDaGFyKDEwKQogIGVzdGF0dXMgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFN0cmluZyAgICAgICAgICAgICAgICAgICAgICAgICAgQGRiLlZhckNoYXIoMTApCiAgb2JzZXJ2YWNpb25lcyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU3RyaW5nPyAgICAgICAgICAgICAgICAgICAgICAgICBAZGIuVGV4dAogIGlkX2NsYXZlICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEJpZ0ludD8gICAgICAgICAgICAgICAgICAgICAgICAgQGRiLlVuc2lnbmVkQmlnSW50CiAgaWRfZG9zaXMgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQmlnSW50PyAgICAgICAgICAgICAgICAgICAgICAgICBAZGIuVW5zaWduZWRCaWdJbnQKICBpZF92aWEgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBCaWdJbnQ/ICAgICAgICAgICAgICAgICAgICAgICAgIEBkYi5VbnNpZ25lZEJpZ0ludAogIGlkX2ludGVydmFsbyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEJpZ0ludD8gICAgICAgICAgICAgICAgICAgICAgICAgQGRiLlVuc2lnbmVkQmlnSW50CiAgaWRfaG9yYSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQmlnSW50PyAgICAgICAgICAgICAgICAgICAgICAgICBAZGIuVW5zaWduZWRCaWdJbnQKICBpZF9pbmdyZXNvICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBJbnQgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBkYi5VbnNpZ25lZEludAogIGlkX3VzZXIgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEludD8gICAgICAgICAgICAgICAgICAgICAgICAgICAgQGRiLlVuc2lnbmVkSW50CiAgaWRfYXV0b3Jpem8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSW50PyAgICAgICAgICAgICAgICAgICAgICAgICAgICBAZGIuVW5zaWduZWRJbnQKICBpZF9zdXNwZW5kaW8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBJbnQ/ICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBkYi5VbnNpZ25lZEludAogIHN1c3BlbmRlZF9hdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIERhdGVUaW1lPyAgICAgICAgICAgICAgICAgICAgICAgQGRiLkRhdGVUaW1lKDApCiAgY3JlYXRlZF9hdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRGF0ZVRpbWU/ICAgICAgICAgICAgICAgICAgICAgICBAZGIuVGltZXN0YW1wKDApCiAgdXBkYXRlZF9hdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRGF0ZVRpbWU/ICAgICAgICAgICAgICAgICAgICAgICBAZGIuVGltZXN0YW1wKDApCiAgZGVsZXRlZF9hdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRGF0ZVRpbWU/ICAgICAgICAgICAgICAgICAgICAgICBAZGIuVGltZXN0YW1wKDApCiAgdXNlcnNfaHB6X2luZGljYWNpb25fbWVkaWNhbWVudG9zX2lkX2F1dG9yaXpvVG91c2VycyAgdXNlcnM/ICAgICAgICAgICAgICAgICAgICAgICAgICBAcmVsYXRpb24oImhwel9pbmRpY2FjaW9uX21lZGljYW1lbnRvc19pZF9hdXRvcml6b1RvdXNlcnMiLCBmaWVsZHM6IFtpZF9hdXRvcml6b10sIHJlZmVyZW5jZXM6IFtpZF0sIG9uRGVsZXRlOiBSZXN0cmljdCwgb25VcGRhdGU6IFJlc3RyaWN0LCBtYXA6ICJocHpfaW5kaWNhY2lvbl9tZWRpY2FtZW50b3NfaWRfYXV0b3Jpem9fZm9yZWlnbiIpCiAgY2F0X3Byb2R1Y3RvcyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2F0X3Byb2R1Y3Rvcz8gICAgICAgICAgICAgICAgICBAcmVsYXRpb24oZmllbGRzOiBbaWRfY2xhdmVdLCByZWZlcmVuY2VzOiBbaWRdLCBvbkRlbGV0ZTogUmVzdHJpY3QsIG9uVXBkYXRlOiBSZXN0cmljdCwgbWFwOiAiaHB6X2luZGljYWNpb25fbWVkaWNhbWVudG9zX2lkX2NsYXZlX2ZvcmVpZ24iKQogIGNhdF9tZWRpY2FtZW50b19kb3NpcyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhdF9tZWRpY2FtZW50b19kb3Npcz8gICAgICAgICAgQHJlbGF0aW9uKGZpZWxkczogW2lkX2Rvc2lzXSwgcmVmZXJlbmNlczogW2lkXSwgb25EZWxldGU6IFJlc3RyaWN0LCBvblVwZGF0ZTogUmVzdHJpY3QsIG1hcDogImhwel9pbmRpY2FjaW9uX21lZGljYW1lbnRvc19pZF9kb3Npc19mb3JlaWduIikKICBjYXRfbWVkaWNhbWVudG9faG9yYXJpb3MgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXRfbWVkaWNhbWVudG9faG9yYXJpb3M/ICAgICAgIEByZWxhdGlvbihmaWVsZHM6IFtpZF9ob3JhXSwgcmVmZXJlbmNlczogW2lkXSwgb25EZWxldGU6IFJlc3RyaWN0LCBvblVwZGF0ZTogUmVzdHJpY3QsIG1hcDogImhwel9pbmRpY2FjaW9uX21lZGljYW1lbnRvc19pZF9ob3JhX2ZvcmVpZ24iKQogIGhwel9pbmdyZXNvX2hvc3BpdGFsYXJpbyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhwel9pbmdyZXNvX2hvc3BpdGFsYXJpbyAgICAgICAgQHJlbGF0aW9uKGZpZWxkczogW2lkX2luZ3Jlc29dLCByZWZlcmVuY2VzOiBbaWRdLCBvblVwZGF0ZTogUmVzdHJpY3QsIG1hcDogImhwel9pbmRpY2FjaW9uX21lZGljYW1lbnRvc19pZF9pbmdyZXNvX2ZvcmVpZ24iKQogIGNhdF9tZWRpY2FtZW50b19pbnRlcnZhbG9zICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhdF9tZWRpY2FtZW50b19pbnRlcnZhbG9zPyAgICAgQHJlbGF0aW9uKGZpZWxkczogW2lkX2ludGVydmFsb10sIHJlZmVyZW5jZXM6IFtpZF0sIG9uRGVsZXRlOiBSZXN0cmljdCwgb25VcGRhdGU6IFJlc3RyaWN0LCBtYXA6ICJocHpfaW5kaWNhY2lvbl9tZWRpY2FtZW50b3NfaWRfaW50ZXJ2YWxvX2ZvcmVpZ24iKQogIHVzZXJzX2hwel9pbmRpY2FjaW9uX21lZGljYW1lbnRvc19pZF9zdXNwZW5kaW9Ub3VzZXJzIHVzZXJzPyAgICAgICAgICAgICAgICAgICAgICAgICAgQHJlbGF0aW9uKCJocHpfaW5kaWNhY2lvbl9tZWRpY2FtZW50b3NfaWRfc3VzcGVuZGlvVG91c2VycyIsIGZpZWxkczogW2lkX3N1c3BlbmRpb10sIHJlZmVyZW5jZXM6IFtpZF0sIG9uRGVsZXRlOiBSZXN0cmljdCwgb25VcGRhdGU6IFJlc3RyaWN0LCBtYXA6ICJocHpfaW5kaWNhY2lvbl9tZWRpY2FtZW50b3NfaWRfc3VzcGVuZGlvX2ZvcmVpZ24iKQogIHVzZXJzX2hwel9pbmRpY2FjaW9uX21lZGljYW1lbnRvc19pZF91c2VyVG91c2VycyAgICAgIHVzZXJzPyAgICAgICAgICAgICAgICAgICAgICAgICAgQHJlbGF0aW9uKCJocHpfaW5kaWNhY2lvbl9tZWRpY2FtZW50b3NfaWRfdXNlclRvdXNlcnMiLCBmaWVsZHM6IFtpZF91c2VyXSwgcmVmZXJlbmNlczogW2lkXSwgb25EZWxldGU6IFJlc3RyaWN0LCBvblVwZGF0ZTogUmVzdHJpY3QsIG1hcDogImhwel9pbmRpY2FjaW9uX21lZGljYW1lbnRvc19pZF91c2VyX2ZvcmVpZ24iKQogIGNhdF9tZWRpY2FtZW50b192aWFzICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhdF9tZWRpY2FtZW50b192aWFzPyAgICAgICAgICAgQHJlbGF0aW9uKGZpZWxkczogW2lkX3ZpYV0sIHJlZmVyZW5jZXM6IFtpZF0sIG9uRGVsZXRlOiBSZXN0cmljdCwgb25VcGRhdGU6IFJlc3RyaWN0LCBtYXA6ICJocHpfaW5kaWNhY2lvbl9tZWRpY2FtZW50b3NfaWRfdmlhX2ZvcmVpZ24iKQogIGhwel9pbmRpY2FjaW9uZXNfbWVkaWNhbWVudG9zICAgICAgICAgICAgICAgICAgICAgICAgIGhwel9pbmRpY2FjaW9uZXNfbWVkaWNhbWVudG9zW10gQGlnbm9yZQogIGhwel9tZWRpY2FtZW50b19taW5pc3RyYWNpb24gICAgICAgICAgICAgICAgICAgICAgICAgIGhwel9tZWRpY2FtZW50b19taW5pc3RyYWNpb25bXQoKICBAQGluZGV4KFtpZF9hdXRvcml6b10sIG1hcDogImhwel9pbmRpY2FjaW9uX21lZGljYW1lbnRvc19pZF9hdXRvcml6b19mb3JlaWduIikKICBAQGluZGV4KFtpZF9jbGF2ZV0sIG1hcDogImhwel9pbmRpY2FjaW9uX21lZGljYW1lbnRvc19pZF9jbGF2ZV9mb3JlaWduIikKICBAQGluZGV4KFtpZF9kb3Npc10sIG1hcDogImhwel9pbmRpY2FjaW9uX21lZGljYW1lbnRvc19pZF9kb3Npc19mb3JlaWduIikKICBAQGluZGV4KFtpZF9ob3JhXSwgbWFwOiAiaHB6X2luZGljYWNpb25fbWVkaWNhbWVudG9zX2lkX2hvcmFfZm9yZWlnbiIpCiAgQEBpbmRleChbaWRfaW5ncmVzb10sIG1hcDogImhwel9pbmRpY2FjaW9uX21lZGljYW1lbnRvc19pZF9pbmdyZXNvX2ZvcmVpZ24iKQogIEBAaW5kZXgoW2lkX2ludGVydmFsb10sIG1hcDogImhwel9pbmRpY2FjaW9uX21lZGljYW1lbnRvc19pZF9pbnRlcnZhbG9fZm9yZWlnbiIpCiAgQEBpbmRleChbaWRfc3VzcGVuZGlvXSwgbWFwOiAiaHB6X2luZGljYWNpb25fbWVkaWNhbWVudG9zX2lkX3N1c3BlbmRpb19mb3JlaWduIikKICBAQGluZGV4KFtpZF91c2VyXSwgbWFwOiAiaHB6X2luZGljYWNpb25fbWVkaWNhbWVudG9zX2lkX3VzZXJfZm9yZWlnbiIpCiAgQEBpbmRleChbaWRfdmlhXSwgbWFwOiAiaHB6X2luZGljYWNpb25fbWVkaWNhbWVudG9zX2lkX3ZpYV9mb3JlaWduIikKfQoKLy8vIFRoZSB1bmRlcmx5aW5nIHRhYmxlIGRvZXMgbm90IGNvbnRhaW4gYSB2YWxpZCB1bmlxdWUgaWRlbnRpZmllciBhbmQgY2FuIHRoZXJlZm9yZSBjdXJyZW50bHkgbm90IGJlIGhhbmRsZWQgYnkgUHJpc21hIENsaWVudC4KbW9kZWwgaHB6X2luZGljYWNpb25lc19tZWRpY2FtZW50b3MgewogIGlkX2luZGljYWNpb24gICAgICAgICAgICAgICBCaWdJbnQ/ICAgICAgICAgICAgICAgICAgICAgIEBkYi5VbnNpZ25lZEJpZ0ludAogIGlkX21lZGljYW1lbnRvICAgICAgICAgICAgICBCaWdJbnQ/ICAgICAgICAgICAgICAgICAgICAgIEBkYi5VbnNpZ25lZEJpZ0ludAogIGlkX3ZpYSAgICAgICAgICAgICAgICAgICAgICBCaWdJbnQ/ICAgICAgICAgICAgICAgICAgICAgIEBkYi5VbnNpZ25lZEJpZ0ludAogIGlkX2ludGVydmFsbyAgICAgICAgICAgICAgICBCaWdJbnQ/ICAgICAgICAgICAgICAgICAgICAgIEBkYi5VbnNpZ25lZEJpZ0ludAogIGNhbnRpZGFkICAgICAgICAgICAgICAgICAgICBTdHJpbmcgICAgICAgICAgICAgICAgICAgICAgIEBkYi5WYXJDaGFyKDEwKQogIGlkX2Rvc2lzICAgICAgICAgICAgICAgICAgICBCaWdJbnQ/ICAgICAgICAgICAgICAgICAgICAgIEBkYi5VbnNpZ25lZEJpZ0ludAogIGlkX2hvcmEgICAgICAgICAgICAgICAgICAgICBCaWdJbnQ/ICAgICAgICAgICAgICAgICAgICAgIEBkYi5VbnNpZ25lZEJpZ0ludAogIG9ic2VydmFjaW9uZXMgICAgICAgICAgICAgICBTdHJpbmc/ICAgICAgICAgICAgICAgICAgICAgIEBkYi5UZXh0CiAgY3JlYXRlZF9hdCAgICAgICAgICAgICAgICAgIERhdGVUaW1lPyAgICAgICAgICAgICAgICAgICAgQGRiLlRpbWVzdGFtcCgwKQogIHVwZGF0ZWRfYXQgICAgICAgICAgICAgICAgICBEYXRlVGltZT8gICAgICAgICAgICAgICAgICAgIEBkYi5UaW1lc3RhbXAoMCkKICBkZWxldGVkX2F0ICAgICAgICAgICAgICAgICAgRGF0ZVRpbWU/ICAgICAgICAgICAgICAgICAgICBAZGIuVGltZXN0YW1wKDApCiAgY2F0X21lZGljYW1lbnRvX2Rvc2lzICAgICAgIGNhdF9tZWRpY2FtZW50b19kb3Npcz8gICAgICAgQHJlbGF0aW9uKGZpZWxkczogW2lkX2Rvc2lzXSwgcmVmZXJlbmNlczogW2lkXSwgb25EZWxldGU6IFJlc3RyaWN0LCBvblVwZGF0ZTogUmVzdHJpY3QsIG1hcDogImhwel9pbmRpY2FjaW9uZXNfbWVkaWNhbWVudG9zX2lkX2Rvc2lzX2ZvcmVpZ24iKQogIGNhdF9tZWRpY2FtZW50b19ob3JhcmlvcyAgICBjYXRfbWVkaWNhbWVudG9faG9yYXJpb3M/ICAgIEByZWxhdGlvbihmaWVsZHM6IFtpZF9ob3JhXSwgcmVmZXJlbmNlczogW2lkXSwgb25EZWxldGU6IFJlc3RyaWN0LCBvblVwZGF0ZTogUmVzdHJpY3QsIG1hcDogImhwel9pbmRpY2FjaW9uZXNfbWVkaWNhbWVudG9zX2lkX2hvcmFfZm9yZWlnbiIpCiAgaHB6X2luZGljYWNpb25lc19tZWRpY2FzICAgIGhwel9pbmRpY2FjaW9uZXNfbWVkaWNhcz8gICAgQHJlbGF0aW9uKGZpZWxkczogW2lkX2luZGljYWNpb25dLCByZWZlcmVuY2VzOiBbaWRdLCBvbkRlbGV0ZTogUmVzdHJpY3QsIG9uVXBkYXRlOiBSZXN0cmljdCwgbWFwOiAiaHB6X2luZGljYWNpb25lc19tZWRpY2FtZW50b3NfaWRfaW5kaWNhY2lvbl9mb3JlaWduIikKICBjYXRfbWVkaWNhbWVudG9faW50ZXJ2YWxvcyAgY2F0X21lZGljYW1lbnRvX2ludGVydmFsb3M/ICBAcmVsYXRpb24oZmllbGRzOiBbaWRfaW50ZXJ2YWxvXSwgcmVmZXJlbmNlczogW2lkXSwgb25EZWxldGU6IFJlc3RyaWN0LCBvblVwZGF0ZTogUmVzdHJpY3QsIG1hcDogImhwel9pbmRpY2FjaW9uZXNfbWVkaWNhbWVudG9zX2lkX2ludGVydmFsb19mb3JlaWduIikKICBocHpfaW5kaWNhY2lvbl9tZWRpY2FtZW50b3MgaHB6X2luZGljYWNpb25fbWVkaWNhbWVudG9zPyBAcmVsYXRpb24oZmllbGRzOiBbaWRfbWVkaWNhbWVudG9dLCByZWZlcmVuY2VzOiBbaWRdLCBvbkRlbGV0ZTogUmVzdHJpY3QsIG9uVXBkYXRlOiBSZXN0cmljdCwgbWFwOiAiaHB6X2luZGljYWNpb25lc19tZWRpY2FtZW50b3NfaWRfbWVkaWNhbWVudG9fZm9yZWlnbiIpCiAgY2F0X21lZGljYW1lbnRvX3ZpYXMgICAgICAgIGNhdF9tZWRpY2FtZW50b192aWFzPyAgICAgICAgQHJlbGF0aW9uKGZpZWxkczogW2lkX3ZpYV0sIHJlZmVyZW5jZXM6IFtpZF0sIG9uRGVsZXRlOiBSZXN0cmljdCwgb25VcGRhdGU6IFJlc3RyaWN0LCBtYXA6ICJocHpfaW5kaWNhY2lvbmVzX21lZGljYW1lbnRvc19pZF92aWFfZm9yZWlnbiIpCgogIEBAaW5kZXgoW2lkX2Rvc2lzXSwgbWFwOiAiaHB6X2luZGljYWNpb25lc19tZWRpY2FtZW50b3NfaWRfZG9zaXNfZm9yZWlnbiIpCiAgQEBpbmRleChbaWRfaG9yYV0sIG1hcDogImhwel9pbmRpY2FjaW9uZXNfbWVkaWNhbWVudG9zX2lkX2hvcmFfZm9yZWlnbiIpCiAgQEBpbmRleChbaWRfaW5kaWNhY2lvbl0sIG1hcDogImhwel9pbmRpY2FjaW9uZXNfbWVkaWNhbWVudG9zX2lkX2luZGljYWNpb25fZm9yZWlnbiIpCiAgQEBpbmRleChbaWRfaW50ZXJ2YWxvXSwgbWFwOiAiaHB6X2luZGljYWNpb25lc19tZWRpY2FtZW50b3NfaWRfaW50ZXJ2YWxvX2ZvcmVpZ24iKQogIEBAaW5kZXgoW2lkX21lZGljYW1lbnRvXSwgbWFwOiAiaHB6X2luZGljYWNpb25lc19tZWRpY2FtZW50b3NfaWRfbWVkaWNhbWVudG9fZm9yZWlnbiIpCiAgQEBpbmRleChbaWRfdmlhXSwgbWFwOiAiaHB6X2luZGljYWNpb25lc19tZWRpY2FtZW50b3NfaWRfdmlhX2ZvcmVpZ24iKQogIEBAaWdub3JlCn0KCm1vZGVsIGhwel9pbmRpY2FjaW9uZXNfbWVkaWNhcyB7CiAgaWQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEJpZ0ludCAgICAgICAgICAgICAgICAgICAgICAgICAgQGlkIEBkZWZhdWx0KGF1dG9pbmNyZW1lbnQoKSkgQGRiLlVuc2lnbmVkQmlnSW50CiAgZGlldGEgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFN0cmluZz8gICAgICAgICAgICAgICAgICAgICAgICAgQGRiLlRleHQKICBwb3NpY2lvbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU3RyaW5nPwogIGRlYW1idWxhY2lvbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTdHJpbmc/CiAgYmFubyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFN0cmluZz8KICBjdXJhY2lvbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU3RyaW5nPwogIHNpZ25vc192aXRhbGVzICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTdHJpbmc/CiAgbWVkaWRhc19hbnRpdHJvbWJvdGljYXMgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFN0cmluZz8KICBmaXNpb19wdWxtb25hciAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU3RyaW5nPwogIHVsY2VyYXNfcHJlc2lvbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTdHJpbmc/CiAgcHJvdGVjY2lvbl9jYWlkYXMgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFN0cmluZz8KICBvdHJhc19tZWRpZGFzICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU3RyaW5nPyAgICAgICAgICAgICAgICAgICAgICAgICBAZGIuVGV4dAogIGFwb3lvX3ZlbnRpbGF0b3JpbyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTdHJpbmc/ICAgICAgICAgICAgICAgICAgICAgICAgIEBkYi5UZXh0CiAgc29sdWNpb25lcyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFN0cmluZz8gICAgICAgICAgICAgICAgICAgICAgICAgQGRiLlRleHQKICBzYXR1cm9tZXRyaWEgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU3RyaW5nPwogIHB2YyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTdHJpbmc/CiAgZGl1cmVzaXMgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFN0cmluZz8KICBiYWxhbmNlX2hpZHJpY28gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU3RyaW5nPwogIGdsdWNvbWV0cmlhICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTdHJpbmc/ICAgICAgICAgICAgICAgICAgICAgICAgIEBkYi5WYXJDaGFyKDUwMCkKICBldmEgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU3RyaW5nPwogIGdsYXNnbG93ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTdHJpbmc/CiAgcGVyaW1ldHJvX2FiZG9taW5hbCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFN0cmluZz8KICBleGFtZW5lc19sYWJvcmF0b3JpbyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU3RyaW5nPyAgICAgICAgICAgICAgICAgICAgICAgICBAZGIuVGV4dAogIGludGVyY29uc3VsdGFzICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTdHJpbmc/ICAgICAgICAgICAgICAgICAgICAgICAgIEBkYi5UZXh0CiAgaW5mdXNpb25lcyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFN0cmluZz8gICAgICAgICAgICAgICAgICAgICAgICAgQGRiLlRleHQKICBpZF9pbmdyZXNvICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSW50ICAgICAgICAgICAgICAgICAgICAgICAgICAgICBAZGIuVW5zaWduZWRJbnQKICBpZF9hZHNjcml0byAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSW50PyAgICAgICAgICAgICAgICAgICAgICAgICAgICBAZGIuVW5zaWduZWRJbnQKICBpZF9yZXNpZGVudGUgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSW50PyAgICAgICAgICAgICAgICAgICAgICAgICAgICBAZGIuVW5zaWduZWRJbnQKICBpZF91c2VyICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSW50PyAgICAgICAgICAgICAgICAgICAgICAgICAgICBAZGIuVW5zaWduZWRJbnQKICBpZF9hdXRvcml6byAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSW50PyAgICAgICAgICAgICAgICAgICAgICAgICAgICBAZGIuVW5zaWduZWRJbnQKICBpZF9jYW5jZWxvICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSW50PyAgICAgICAgICAgICAgICAgICAgICAgICAgICBAZGIuVW5zaWduZWRJbnQKICBjcmVhdGVkX2F0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRGF0ZVRpbWU/ICAgICAgICAgICAgICAgICAgICAgICBAZGIuVGltZXN0YW1wKDApCiAgdXBkYXRlZF9hdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIERhdGVUaW1lPyAgICAgICAgICAgICAgICAgICAgICAgQGRiLlRpbWVzdGFtcCgwKQogIGRlbGV0ZWRfYXQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBEYXRlVGltZT8gICAgICAgICAgICAgICAgICAgICAgIEBkYi5UaW1lc3RhbXAoMCkKICBocHpfaW5kaWNhY2lvbmVzX21lZGljYW1lbnRvcyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHB6X2luZGljYWNpb25lc19tZWRpY2FtZW50b3NbXSBAaWdub3JlCiAgcmNoX2VtcGxlYWRvc19ocHpfaW5kaWNhY2lvbmVzX21lZGljYXNfaWRfYWRzY3JpdG9Ub3JjaF9lbXBsZWFkb3MgIHJjaF9lbXBsZWFkb3M/ICAgICAgICAgICAgICAgICAgQHJlbGF0aW9uKCJocHpfaW5kaWNhY2lvbmVzX21lZGljYXNfaWRfYWRzY3JpdG9Ub3JjaF9lbXBsZWFkb3MiLCBmaWVsZHM6IFtpZF9hZHNjcml0b10sIHJlZmVyZW5jZXM6IFtpZF0sIG9uRGVsZXRlOiBSZXN0cmljdCwgb25VcGRhdGU6IFJlc3RyaWN0LCBtYXA6ICJocHpfaW5kaWNhY2lvbmVzX21lZGljYXNfaWRfYWRzY3JpdG9fZm9yZWlnbiIpCiAgdXNlcnNfaHB6X2luZGljYWNpb25lc19tZWRpY2FzX2lkX2F1dG9yaXpvVG91c2VycyAgICAgICAgICAgICAgICAgIHVzZXJzPyAgICAgICAgICAgICAgICAgICAgICAgICAgQHJlbGF0aW9uKCJocHpfaW5kaWNhY2lvbmVzX21lZGljYXNfaWRfYXV0b3Jpem9Ub3VzZXJzIiwgZmllbGRzOiBbaWRfYXV0b3Jpem9dLCByZWZlcmVuY2VzOiBbaWRdLCBvbkRlbGV0ZTogUmVzdHJpY3QsIG9uVXBkYXRlOiBSZXN0cmljdCwgbWFwOiAiaHB6X2luZGljYWNpb25lc19tZWRpY2FzX2lkX2F1dG9yaXpvX2ZvcmVpZ24iKQogIHVzZXJzX2hwel9pbmRpY2FjaW9uZXNfbWVkaWNhc19pZF9jYW5jZWxvVG91c2VycyAgICAgICAgICAgICAgICAgICB1c2Vycz8gICAgICAgICAgICAgICAgICAgICAgICAgIEByZWxhdGlvbigiaHB6X2luZGljYWNpb25lc19tZWRpY2FzX2lkX2NhbmNlbG9Ub3VzZXJzIiwgZmllbGRzOiBbaWRfY2FuY2Vsb10sIHJlZmVyZW5jZXM6IFtpZF0sIG9uRGVsZXRlOiBSZXN0cmljdCwgb25VcGRhdGU6IFJlc3RyaWN0LCBtYXA6ICJocHpfaW5kaWNhY2lvbmVzX21lZGljYXNfaWRfY2FuY2Vsb19mb3JlaWduIikKICBocHpfaW5ncmVzb19ob3NwaXRhbGFyaW8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHB6X2luZ3Jlc29faG9zcGl0YWxhcmlvICAgICAgICBAcmVsYXRpb24oZmllbGRzOiBbaWRfaW5ncmVzb10sIHJlZmVyZW5jZXM6IFtpZF0sIG9uVXBkYXRlOiBSZXN0cmljdCwgbWFwOiAiaHB6X2luZGljYWNpb25lc19tZWRpY2FzX2lkX2luZ3Jlc29fZm9yZWlnbiIpCiAgcmNoX2VtcGxlYWRvc19ocHpfaW5kaWNhY2lvbmVzX21lZGljYXNfaWRfcmVzaWRlbnRlVG9yY2hfZW1wbGVhZG9zIHJjaF9lbXBsZWFkb3M/ICAgICAgICAgICAgICAgICAgQHJlbGF0aW9uKCJocHpfaW5kaWNhY2lvbmVzX21lZGljYXNfaWRfcmVzaWRlbnRlVG9yY2hfZW1wbGVhZG9zIiwgZmllbGRzOiBbaWRfcmVzaWRlbnRlXSwgcmVmZXJlbmNlczogW2lkXSwgb25EZWxldGU6IFJlc3RyaWN0LCBvblVwZGF0ZTogUmVzdHJpY3QsIG1hcDogImhwel9pbmRpY2FjaW9uZXNfbWVkaWNhc19pZF9yZXNpZGVudGVfZm9yZWlnbiIpCiAgdXNlcnNfaHB6X2luZGljYWNpb25lc19tZWRpY2FzX2lkX3VzZXJUb3VzZXJzICAgICAgICAgICAgICAgICAgICAgIHVzZXJzPyAgICAgICAgICAgICAgICAgICAgICAgICAgQHJlbGF0aW9uKCJocHpfaW5kaWNhY2lvbmVzX21lZGljYXNfaWRfdXNlclRvdXNlcnMiLCBmaWVsZHM6IFtpZF91c2VyXSwgcmVmZXJlbmNlczogW2lkXSwgb25EZWxldGU6IFJlc3RyaWN0LCBvblVwZGF0ZTogUmVzdHJpY3QsIG1hcDogImhwel9pbmRpY2FjaW9uZXNfbWVkaWNhc19pZF91c2VyX2ZvcmVpZ24iKQoKICBAQGluZGV4KFtpZF9hZHNjcml0b10sIG1hcDogImhwel9pbmRpY2FjaW9uZXNfbWVkaWNhc19pZF9hZHNjcml0b19mb3JlaWduIikKICBAQGluZGV4KFtpZF9hdXRvcml6b10sIG1hcDogImhwel9pbmRpY2FjaW9uZXNfbWVkaWNhc19pZF9hdXRvcml6b19mb3JlaWduIikKICBAQGluZGV4KFtpZF9jYW5jZWxvXSwgbWFwOiAiaHB6X2luZGljYWNpb25lc19tZWRpY2FzX2lkX2NhbmNlbG9fZm9yZWlnbiIpCiAgQEBpbmRleChbaWRfaW5ncmVzb10sIG1hcDogImhwel9pbmRpY2FjaW9uZXNfbWVkaWNhc19pZF9pbmdyZXNvX2ZvcmVpZ24iKQogIEBAaW5kZXgoW2lkX3Jlc2lkZW50ZV0sIG1hcDogImhwel9pbmRpY2FjaW9uZXNfbWVkaWNhc19pZF9yZXNpZGVudGVfZm9yZWlnbiIpCiAgQEBpbmRleChbaWRfdXNlcl0sIG1hcDogImhwel9pbmRpY2FjaW9uZXNfbWVkaWNhc19pZF91c2VyX2ZvcmVpZ24iKQp9Cgptb2RlbCBocHpfaW5ncmVzb19jb25zdWx0YSB7CiAgaWQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEludCAgICAgICAgICAgICAgICAgICAgICAgQGlkIEBkZWZhdWx0KGF1dG9pbmNyZW1lbnQoKSkgQGRiLlVuc2lnbmVkSW50CiAgZmVjaGFfY2l0YSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIERhdGVUaW1lPyAgICAgICAgICAgICAgICAgQGRiLkRhdGVUaW1lKDApCiAgZmVjaGFfaW5ncmVzbyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIERhdGVUaW1lPyAgICAgICAgICAgICAgICAgQGRiLkRhdGVUaW1lKDApCiAgdmlhX2luZ3Jlc28gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFN0cmluZyAgICAgICAgICAgICAgICAgICAgQGRiLlZhckNoYXIoMTAwKQogIGR4X2luZm9ybWFsICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTdHJpbmcgICAgICAgICAgICAgICAgICAgIEBkYi5UZXh0CiAgb2JzZXJ2YWNpb25lcyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFN0cmluZz8gICAgICAgICAgICAgICAgICAgQGRiLlRleHQKICBjYXNvX21lZGljb19sZWdhbCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQm9vbGVhbiAgICAgICAgICAgICAgICAgICBAZGVmYXVsdChmYWxzZSkKICBmZWNoYV9lZ3Jlc28gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRGF0ZVRpbWU/ICAgICAgICAgICAgICAgICBAZGIuRGF0ZVRpbWUoMCkKICB0aXBvX2NpdGEgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU3RyaW5nICAgICAgICAgICAgICAgICAgICBAZGIuVmFyQ2hhcigxMDApCiAgZmVjaGFfY2l0YV9pbmljaW8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIERhdGVUaW1lPyAgICAgICAgICAgICAgICAgQGRiLkRhdGVUaW1lKDApCiAgZmVjaGFfY2l0YV9maW4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIERhdGVUaW1lPyAgICAgICAgICAgICAgICAgQGRiLkRhdGVUaW1lKDApCiAgZXN0YXR1cyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFN0cmluZyAgICAgICAgICAgICAgICAgICAgQGRiLlRleHQKICBpZF9zZXJ2aWNpbyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSW50PyAgICAgICAgICAgICAgICAgICAgICBAZGIuVW5zaWduZWRJbnQKICBpZF9lc3BlY2lhbGlkYWQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSW50ICAgICAgICAgICAgICAgICAgICAgICBAZGIuVW5zaWduZWRJbnQKICBpZF9jbHVlX3JlZmVyZW5jaWEgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSW50ICAgICAgICAgICAgICAgICAgICAgICBAZGIuVW5zaWduZWRJbnQKICBpZF9jbHVlX2NvbnRyYXJlZmVyZW5jaWEgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSW50PyAgICAgICAgICAgICAgICAgICAgICBAZGIuVW5zaWduZWRJbnQKICBpZF9jbHVlX2F0ZW5jaW9uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSW50PyAgICAgICAgICAgICAgICAgICAgICBAZGIuVW5zaWduZWRJbnQKICBpZF9tZWRpY28gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSW50PyAgICAgICAgICAgICAgICAgICAgICBAZGIuVW5zaWduZWRJbnQKICBpZF9kaWFnbm9zdGljbyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSW50PyAgICAgICAgICAgICAgICAgICAgICBAZGIuVW5zaWduZWRJbnQKICBpZF9wYWNpZW50ZSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSW50ICAgICAgICAgICAgICAgICAgICAgICBAZGIuVW5zaWduZWRJbnQKICBpZF91c2VyICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU3RyaW5nPwogIGNyZWF0ZWRfdXNlciAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTdHJpbmc/CiAgaWRfY29uc3VsdG9yaW8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEludD8gICAgICAgICAgICAgICAgICAgICAgQGRiLlVuc2lnbmVkSW50CiAgaWRfaW5ncmVzbyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEludD8gICAgICAgICAgICAgICAgICAgICAgQGRiLlVuc2lnbmVkSW50CiAgY3JlYXRlZF9hdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIERhdGVUaW1lPyAgICAgICAgICAgICAgICAgQGRiLlRpbWVzdGFtcCgwKQogIHVwZGF0ZWRfYXQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBEYXRlVGltZT8gICAgICAgICAgICAgICAgIEBkYi5UaW1lc3RhbXAoMCkKICBkZWxldGVkX2F0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRGF0ZVRpbWU/ICAgICAgICAgICAgICAgICBAZGIuVGltZXN0YW1wKDApCiAgaHB6X2NpdGFzX2hpc3RvcmlhbCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhwel9jaXRhc19oaXN0b3JpYWxbXSAgICAgQGlnbm9yZQogIGNhdF9jbHVlc19ocHpfaW5ncmVzb19jb25zdWx0YV9pZF9jbHVlX2F0ZW5jaW9uVG9jYXRfY2x1ZXMgICAgICAgICBjYXRfY2x1ZXM/ICAgICAgICAgICAgICAgIEByZWxhdGlvbigiaHB6X2luZ3Jlc29fY29uc3VsdGFfaWRfY2x1ZV9hdGVuY2lvblRvY2F0X2NsdWVzIiwgZmllbGRzOiBbaWRfY2x1ZV9hdGVuY2lvbl0sIHJlZmVyZW5jZXM6IFtpZF0sIG9uRGVsZXRlOiBSZXN0cmljdCwgb25VcGRhdGU6IFJlc3RyaWN0LCBtYXA6ICJocHpfaW5ncmVzb19jb25zdWx0YV9pZF9jbHVlX2F0ZW5jaW9uX2ZvcmVpZ24iKQogIGNhdF9jbHVlc19ocHpfaW5ncmVzb19jb25zdWx0YV9pZF9jbHVlX2NvbnRyYXJlZmVyZW5jaWFUb2NhdF9jbHVlcyBjYXRfY2x1ZXM/ICAgICAgICAgICAgICAgIEByZWxhdGlvbigiaHB6X2luZ3Jlc29fY29uc3VsdGFfaWRfY2x1ZV9jb250cmFyZWZlcmVuY2lhVG9jYXRfY2x1ZXMiLCBmaWVsZHM6IFtpZF9jbHVlX2NvbnRyYXJlZmVyZW5jaWFdLCByZWZlcmVuY2VzOiBbaWRdLCBvbkRlbGV0ZTogUmVzdHJpY3QsIG9uVXBkYXRlOiBSZXN0cmljdCwgbWFwOiAiaHB6X2luZ3Jlc29fY29uc3VsdGFfaWRfY2x1ZV9jb250cmFyZWZlcmVuY2lhX2ZvcmVpZ24iKQogIGNhdF9jbHVlc19ocHpfaW5ncmVzb19jb25zdWx0YV9pZF9jbHVlX3JlZmVyZW5jaWFUb2NhdF9jbHVlcyAgICAgICBjYXRfY2x1ZXMgICAgICAgICAgICAgICAgIEByZWxhdGlvbigiaHB6X2luZ3Jlc29fY29uc3VsdGFfaWRfY2x1ZV9yZWZlcmVuY2lhVG9jYXRfY2x1ZXMiLCBmaWVsZHM6IFtpZF9jbHVlX3JlZmVyZW5jaWFdLCByZWZlcmVuY2VzOiBbaWRdLCBvblVwZGF0ZTogUmVzdHJpY3QsIG1hcDogImhwel9pbmdyZXNvX2NvbnN1bHRhX2lkX2NsdWVfcmVmZXJlbmNpYV9mb3JlaWduIikKICBjYXRfY2FtYXMgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2F0X2NhbWFzPyAgICAgICAgICAgICAgICBAcmVsYXRpb24oZmllbGRzOiBbaWRfY29uc3VsdG9yaW9dLCByZWZlcmVuY2VzOiBbaWRdLCBvbkRlbGV0ZTogUmVzdHJpY3QsIG9uVXBkYXRlOiBSZXN0cmljdCwgbWFwOiAiaHB6X2luZ3Jlc29fY29uc3VsdGFfaWRfY29uc3VsdG9yaW9fZm9yZWlnbiIpCiAgY2F0X2NpZTEwICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhdF9jaWUxMD8gICAgICAgICAgICAgICAgQHJlbGF0aW9uKGZpZWxkczogW2lkX2RpYWdub3N0aWNvXSwgcmVmZXJlbmNlczogW2lkXSwgb25EZWxldGU6IFJlc3RyaWN0LCBvblVwZGF0ZTogUmVzdHJpY3QsIG1hcDogImhwel9pbmdyZXNvX2NvbnN1bHRhX2lkX2RpYWdub3N0aWNvX2ZvcmVpZ24iKQogIGNhdF9lc3BlY2lhbGlkYWRlcyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXRfZXNwZWNpYWxpZGFkZXMgICAgICAgIEByZWxhdGlvbihmaWVsZHM6IFtpZF9lc3BlY2lhbGlkYWRdLCByZWZlcmVuY2VzOiBbaWRdLCBvblVwZGF0ZTogUmVzdHJpY3QsIG1hcDogImhwel9pbmdyZXNvX2NvbnN1bHRhX2lkX2VzcGVjaWFsaWRhZF9mb3JlaWduIikKICBocHpfaW5ncmVzb19ob3NwaXRhbGFyaW8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHB6X2luZ3Jlc29faG9zcGl0YWxhcmlvPyBAcmVsYXRpb24oZmllbGRzOiBbaWRfaW5ncmVzb10sIHJlZmVyZW5jZXM6IFtpZF0sIG9uRGVsZXRlOiBSZXN0cmljdCwgb25VcGRhdGU6IFJlc3RyaWN0LCBtYXA6ICJocHpfaW5ncmVzb19jb25zdWx0YV9pZF9pbmdyZXNvX2ZvcmVpZ24iKQogIHJjaF9lbXBsZWFkb3MgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByY2hfZW1wbGVhZG9zPyAgICAgICAgICAgIEByZWxhdGlvbihmaWVsZHM6IFtpZF9tZWRpY29dLCByZWZlcmVuY2VzOiBbaWRdLCBvbkRlbGV0ZTogUmVzdHJpY3QsIG9uVXBkYXRlOiBSZXN0cmljdCwgbWFwOiAiaHB6X2luZ3Jlc29fY29uc3VsdGFfaWRfbWVkaWNvX2ZvcmVpZ24iKQogIGhwel9wYWNpZW50ZSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBocHpfcGFjaWVudGUgICAgICAgICAgICAgIEByZWxhdGlvbihmaWVsZHM6IFtpZF9wYWNpZW50ZV0sIHJlZmVyZW5jZXM6IFtpZF0sIG9uVXBkYXRlOiBSZXN0cmljdCwgbWFwOiAiaHB6X2luZ3Jlc29fY29uc3VsdGFfaWRfcGFjaWVudGVfZm9yZWlnbiIpCgogIEBAaW5kZXgoW2lkX2NsdWVfYXRlbmNpb25dLCBtYXA6ICJocHpfaW5ncmVzb19jb25zdWx0YV9pZF9jbHVlX2F0ZW5jaW9uX2ZvcmVpZ24iKQogIEBAaW5kZXgoW2lkX2NsdWVfY29udHJhcmVmZXJlbmNpYV0sIG1hcDogImhwel9pbmdyZXNvX2NvbnN1bHRhX2lkX2NsdWVfY29udHJhcmVmZXJlbmNpYV9mb3JlaWduIikKICBAQGluZGV4KFtpZF9jbHVlX3JlZmVyZW5jaWFdLCBtYXA6ICJocHpfaW5ncmVzb19jb25zdWx0YV9pZF9jbHVlX3JlZmVyZW5jaWFfZm9yZWlnbiIpCiAgQEBpbmRleChbaWRfY29uc3VsdG9yaW9dLCBtYXA6ICJocHpfaW5ncmVzb19jb25zdWx0YV9pZF9jb25zdWx0b3Jpb19mb3JlaWduIikKICBAQGluZGV4KFtpZF9kaWFnbm9zdGljb10sIG1hcDogImhwel9pbmdyZXNvX2NvbnN1bHRhX2lkX2RpYWdub3N0aWNvX2ZvcmVpZ24iKQogIEBAaW5kZXgoW2lkX2VzcGVjaWFsaWRhZF0sIG1hcDogImhwel9pbmdyZXNvX2NvbnN1bHRhX2lkX2VzcGVjaWFsaWRhZF9mb3JlaWduIikKICBAQGluZGV4KFtpZF9pbmdyZXNvXSwgbWFwOiAiaHB6X2luZ3Jlc29fY29uc3VsdGFfaWRfaW5ncmVzb19mb3JlaWduIikKICBAQGluZGV4KFtpZF9tZWRpY29dLCBtYXA6ICJocHpfaW5ncmVzb19jb25zdWx0YV9pZF9tZWRpY29fZm9yZWlnbiIpCiAgQEBpbmRleChbaWRfcGFjaWVudGVdLCBtYXA6ICJocHpfaW5ncmVzb19jb25zdWx0YV9pZF9wYWNpZW50ZV9mb3JlaWduIikKfQoKbW9kZWwgaHB6X2luZ3Jlc29fZXBpZGVtaW9faWFhcyB7CiAgaWQgICAgICAgICAgICAgICAgICAgICAgICBCaWdJbnQgICAgICAgICAgICAgICAgICAgICBAaWQgQGRlZmF1bHQoYXV0b2luY3JlbWVudCgpKSBAZGIuVW5zaWduZWRCaWdJbnQKICBmZWNoYV9kZXRlY2Npb24gICAgICAgICAgIERhdGVUaW1lICAgICAgICAgICAgICAgICAgIEBkYi5EYXRlCiAgZmVjaGFfcmVzb2x1Y2lvbiAgICAgICAgICBEYXRlVGltZT8gICAgICAgICAgICAgICAgICBAZGIuRGF0ZQogIG9ic2VydmFjaW9uZXMgICAgICAgICAgICAgU3RyaW5nPwogIGlkX2luZ3Jlc28gICAgICAgICAgICAgICAgSW50ICAgICAgICAgICAgICAgICAgICAgICAgQGRiLlVuc2lnbmVkSW50CiAgaWRfZ2VybWVuICAgICAgICAgICAgICAgICBJbnQ/ICAgICAgICAgICAgICAgICAgICAgICBAZGIuVW5zaWduZWRJbnQKICBpZF9zaXRpbyAgICAgICAgICAgICAgICAgIEludD8gICAgICAgICAgICAgICAgICAgICAgIEBkYi5VbnNpZ25lZEludAogIGlkX3ViaWNhY2lvbiAgICAgICAgICAgICAgSW50ICAgICAgICAgICAgICAgICAgICAgICAgQGRiLlVuc2lnbmVkSW50CiAgY3JlYXRlZF9hdCAgICAgICAgICAgICAgICBEYXRlVGltZT8gICAgICAgICAgICAgICAgICBAZGIuVGltZXN0YW1wKDApCiAgdXBkYXRlZF9hdCAgICAgICAgICAgICAgICBEYXRlVGltZT8gICAgICAgICAgICAgICAgICBAZGIuVGltZXN0YW1wKDApCiAgZGVsZXRlZF9hdCAgICAgICAgICAgICAgICBEYXRlVGltZT8gICAgICAgICAgICAgICAgICBAZGIuVGltZXN0YW1wKDApCiAgY2F0X2lhYXNfZ2VybWVuZXMgICAgICAgICBjYXRfaWFhc19nZXJtZW5lcz8gICAgICAgICBAcmVsYXRpb24oZmllbGRzOiBbaWRfZ2VybWVuXSwgcmVmZXJlbmNlczogW2lkXSwgb25EZWxldGU6IFJlc3RyaWN0LCBvblVwZGF0ZTogUmVzdHJpY3QsIG1hcDogImhwel9pbmdyZXNvX2VwaWRlbWlvX2lhYXNfaWRfZ2VybWVuX2ZvcmVpZ24iKQogIGhwel9pbmdyZXNvX2hvc3BpdGFsYXJpbyAgaHB6X2luZ3Jlc29faG9zcGl0YWxhcmlvICAgQHJlbGF0aW9uKGZpZWxkczogW2lkX2luZ3Jlc29dLCByZWZlcmVuY2VzOiBbaWRdLCBvblVwZGF0ZTogUmVzdHJpY3QsIG1hcDogImhwel9pbmdyZXNvX2VwaWRlbWlvX2lhYXNfaWRfaW5ncmVzb19mb3JlaWduIikKICBjYXRfaWFhc19zaXRpb3NfaW5mZWNjaW9uIGNhdF9pYWFzX3NpdGlvc19pbmZlY2Npb24/IEByZWxhdGlvbihmaWVsZHM6IFtpZF9zaXRpb10sIHJlZmVyZW5jZXM6IFtpZF0sIG9uRGVsZXRlOiBSZXN0cmljdCwgb25VcGRhdGU6IFJlc3RyaWN0LCBtYXA6ICJocHpfaW5ncmVzb19lcGlkZW1pb19pYWFzX2lkX3NpdGlvX2ZvcmVpZ24iKQogIGhwel9jYW1hX2hpc3RvcmlhbCAgICAgICAgaHB6X2NhbWFfaGlzdG9yaWFsICAgICAgICAgQHJlbGF0aW9uKGZpZWxkczogW2lkX3ViaWNhY2lvbl0sIHJlZmVyZW5jZXM6IFtpZF0sIG9uVXBkYXRlOiBSZXN0cmljdCwgbWFwOiAiaHB6X2luZ3Jlc29fZXBpZGVtaW9faWFhc19pZF91YmljYWNpb25fZm9yZWlnbiIpCgogIEBAaW5kZXgoW2lkX2dlcm1lbl0sIG1hcDogImhwel9pbmdyZXNvX2VwaWRlbWlvX2lhYXNfaWRfZ2VybWVuX2ZvcmVpZ24iKQogIEBAaW5kZXgoW2lkX2luZ3Jlc29dLCBtYXA6ICJocHpfaW5ncmVzb19lcGlkZW1pb19pYWFzX2lkX2luZ3Jlc29fZm9yZWlnbiIpCiAgQEBpbmRleChbaWRfc2l0aW9dLCBtYXA6ICJocHpfaW5ncmVzb19lcGlkZW1pb19pYWFzX2lkX3NpdGlvX2ZvcmVpZ24iKQogIEBAaW5kZXgoW2lkX3ViaWNhY2lvbl0sIG1hcDogImhwel9pbmdyZXNvX2VwaWRlbWlvX2lhYXNfaWRfdWJpY2FjaW9uX2ZvcmVpZ24iKQp9Cgptb2RlbCBocHpfaW5ncmVzb19ob3NwaXRhbGFyaW8gewogIGlkICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEludCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBAaWQgQGRlZmF1bHQoYXV0b2luY3JlbWVudCgpKSBAZGIuVW5zaWduZWRJbnQKICB0aXBvICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTdHJpbmc/ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQGRiLlZhckNoYXIoMTUpCiAgZmVjaGFfaW5ncmVzbyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRGF0ZVRpbWUgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBkYi5EYXRlVGltZSgwKQogIG1lZGljb19yZWZlcmVuY2lhICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFN0cmluZz8KICBmb2xpb19yZWZlcmVuY2lhICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTdHJpbmc/CiAgZXN0YWRvX3NhbHVkICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHB6X2luZ3Jlc29faG9zcGl0YWxhcmlvX2VzdGFkb19zYWx1ZAogIGVzdGFkb19pbmdyZXNvICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhwel9pbmdyZXNvX2hvc3BpdGFsYXJpb19lc3RhZG9faW5ncmVzbwogIGNvZGlnb19hdGVuY2lvbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFN0cmluZz8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBAZGIuVGV4dAogIG9ic2VydmFjaW9uZXMgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFN0cmluZz8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBAZGIuVGV4dAogIGNvbnRpZ2VuY2lhICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFN0cmluZz8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBAZGIuVGV4dAogIGNhc29fbWVkaWNvX2xlZ2FsICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEJvb2xlYW4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBAZGVmYXVsdChmYWxzZSkKICBkeF9pbmdyZXNvICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTdHJpbmc/ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQGRiLlRleHQKICBkeF9pbmZvcm1hbCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTdHJpbmc/ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQGRiLlRleHQKICBhbHRhX21lZGljYV9tb3Rpdm8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTdHJpbmc/ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQGRiLlZhckNoYXIoMTAwKQogIGFsdGFfbWVkaWNhX290cm9fbW90aXZvICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFN0cmluZz8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBAZGIuVGV4dAogIGFsdGFfbWVkaWNhX2ZlY2hhICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIERhdGVUaW1lPyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBAZGIuRGF0ZVRpbWUoMCkKICBmZWNoYV9lZ3Jlc28gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBEYXRlVGltZT8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQGRiLkRhdGVUaW1lKDApCiAgcmVtaXNpb24gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU3RyaW5nPwogIGRlZnVuY2lvbl9mZWNoYSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIERhdGVUaW1lPyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBAZGIuRGF0ZQogIGlkX3ZpYV9pbmdyZXNvICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEludD8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBAZGIuVW5zaWduZWRJbnQKICBpZF9wcm9ncmFtYSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBJbnQ/ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQGRiLlVuc2lnbmVkSW50CiAgaWRfY2x1ZV9yZWZlcmVuY2lhICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSW50ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBkYi5VbnNpZ25lZEludAogIGlkX21lZGljb19jb250cmFyZWZpZXJlICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEludD8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBAZGIuVW5zaWduZWRJbnQKICBpZF9jbHVlX2NvbnRyYXJlZmVyZW5jaWEgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBJbnQ/ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQGRiLlVuc2lnbmVkSW50CiAgaWRfbWVkaWNvICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSW50PyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBkYi5VbnNpZ25lZEludAogIGlkX25pdmVsICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEludD8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBAZGIuVW5zaWduZWRJbnQKICBpZF9kaWFnbm9zdGljbyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBJbnQ/ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQGRiLlVuc2lnbmVkSW50CiAgaWRfc2VydmljaW8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSW50PyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBkYi5VbnNpZ25lZEludAogIGlkX2VzcGVjaWFsaWRhZCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEludD8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBAZGIuVW5zaWduZWRJbnQKICBpZF9hcmVhICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBJbnQ/ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQGRiLlVuc2lnbmVkSW50CiAgaWRfY2FtYSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSW50PyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBkYi5VbnNpZ25lZEludAogIGlkX3BhY2llbnRlICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEludCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBAZGIuVW5zaWduZWRJbnQKICBpZF9jbHVlX2F0ZW5jaW9uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBJbnQ/ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQGRiLlVuc2lnbmVkSW50CiAgaWRfY29kaWdvX3VyZ2VuY2lhICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSW50PyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBkYi5VbnNpZ25lZEludAogIGlkX3VzZXIgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEludD8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBAZGIuVW5zaWduZWRJbnQKICBpZF91c2VyX2NvbmZpcm1hY2lvbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBJbnQ/ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQGRiLlVuc2lnbmVkSW50CiAgY3JlYXRlZF91c2VyICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU3RyaW5nPwogIGNyZWF0ZWRfYXQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIERhdGVUaW1lPyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBAZGIuVGltZXN0YW1wKDApCiAgdXBkYXRlZF9hdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRGF0ZVRpbWU/ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBkYi5UaW1lc3RhbXAoMCkKICBkZWxldGVkX2F0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBEYXRlVGltZT8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQGRiLlRpbWVzdGFtcCgwKQogIGVuZl9lc2NhbGFfdmFsb3JhY2lvbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVuZl9lc2NhbGFfdmFsb3JhY2lvbltdCiAgZW5mX21lZGlkYXNfYW50cm9wb21ldHJpY2FzICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZW5mX21lZGlkYXNfYW50cm9wb21ldHJpY2FzW10KICBlbmZfb3hpZ2Vub3RlcmFwaWEgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbmZfb3hpZ2Vub3RlcmFwaWFbXQogIGVuZl9wcm9jZWRpbWllbnRvc19pbnZhc2l2b3MgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVuZl9wcm9jZWRpbWllbnRvc19pbnZhc2l2b3NbXQogIGVuZl91bGNlcmFzX3ByZXNpb24gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVuZl91bGNlcmFzX3ByZXNpb25bXQogIGhjbF9oaXN0b3JpYV9jbGluaWNhICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhjbF9oaXN0b3JpYV9jbGluaWNhW10KICBocHpfY2FtYV9oaXN0b3JpYWwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBocHpfY2FtYV9oaXN0b3JpYWxbXQogIGhwel9jYXRldGVyX2luc3RhbGFjaW9uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhwel9jYXRldGVyX2luc3RhbGFjaW9uW10KICBocHpfY2x1ZV9oaXN0b3JpYWwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBocHpfY2x1ZV9oaXN0b3JpYWxbXQogIGhwel9keF9oaXN0b3JpYWwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhwel9keF9oaXN0b3JpYWxbXQogIGhwel9lbmZfaW50ZXJ2ZW5jaW9uZXMgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhwel9lbmZfaW50ZXJ2ZW5jaW9uZXNbXQogIGhwel9pbmRpY2FjaW9uX21lZGljYW1lbnRvcyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhwel9pbmRpY2FjaW9uX21lZGljYW1lbnRvc1tdCiAgaHB6X2luZGljYWNpb25lc19tZWRpY2FzICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHB6X2luZGljYWNpb25lc19tZWRpY2FzW10KICBocHpfaW5ncmVzb19jb25zdWx0YSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBocHpfaW5ncmVzb19jb25zdWx0YVtdCiAgaHB6X2luZ3Jlc29fZXBpZGVtaW9faWFhcyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHB6X2luZ3Jlc29fZXBpZGVtaW9faWFhc1tdCiAgY2F0X2NhbWFzICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2F0X2NhbWFzPyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEByZWxhdGlvbihmaWVsZHM6IFtpZF9jYW1hXSwgcmVmZXJlbmNlczogW2lkXSwgb25EZWxldGU6IFJlc3RyaWN0LCBvblVwZGF0ZTogUmVzdHJpY3QsIG1hcDogImhwel9pbmdyZXNvX2hvc3BpdGFsYXJpb19pZF9jYW1hX2ZvcmVpZ24iKQogIGNhdF9jbHVlc19ocHpfaW5ncmVzb19ob3NwaXRhbGFyaW9faWRfY2x1ZV9hdGVuY2lvblRvY2F0X2NsdWVzICAgICAgICAgICAgICAgIGNhdF9jbHVlcz8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBAcmVsYXRpb24oImhwel9pbmdyZXNvX2hvc3BpdGFsYXJpb19pZF9jbHVlX2F0ZW5jaW9uVG9jYXRfY2x1ZXMiLCBmaWVsZHM6IFtpZF9jbHVlX2F0ZW5jaW9uXSwgcmVmZXJlbmNlczogW2lkXSwgb25EZWxldGU6IFJlc3RyaWN0LCBvblVwZGF0ZTogUmVzdHJpY3QsIG1hcDogImhwel9pbmdyZXNvX2hvc3BpdGFsYXJpb19pZF9jbHVlX2F0ZW5jaW9uX2ZvcmVpZ24iKQogIGNhdF9jbHVlc19ocHpfaW5ncmVzb19ob3NwaXRhbGFyaW9faWRfY2x1ZV9jb250cmFyZWZlcmVuY2lhVG9jYXRfY2x1ZXMgICAgICAgIGNhdF9jbHVlcz8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBAcmVsYXRpb24oImhwel9pbmdyZXNvX2hvc3BpdGFsYXJpb19pZF9jbHVlX2NvbnRyYXJlZmVyZW5jaWFUb2NhdF9jbHVlcyIsIGZpZWxkczogW2lkX2NsdWVfY29udHJhcmVmZXJlbmNpYV0sIHJlZmVyZW5jZXM6IFtpZF0sIG9uRGVsZXRlOiBSZXN0cmljdCwgb25VcGRhdGU6IFJlc3RyaWN0LCBtYXA6ICJocHpfaW5ncmVzb19ob3NwaXRhbGFyaW9faWRfY2x1ZV9jb250cmFyZWZlcmVuY2lhX2ZvcmVpZ24iKQogIGNhdF9jbHVlc19ocHpfaW5ncmVzb19ob3NwaXRhbGFyaW9faWRfY2x1ZV9yZWZlcmVuY2lhVG9jYXRfY2x1ZXMgICAgICAgICAgICAgIGNhdF9jbHVlcyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBAcmVsYXRpb24oImhwel9pbmdyZXNvX2hvc3BpdGFsYXJpb19pZF9jbHVlX3JlZmVyZW5jaWFUb2NhdF9jbHVlcyIsIGZpZWxkczogW2lkX2NsdWVfcmVmZXJlbmNpYV0sIHJlZmVyZW5jZXM6IFtpZF0sIG9uVXBkYXRlOiBSZXN0cmljdCwgbWFwOiAiaHB6X2luZ3Jlc29faG9zcGl0YWxhcmlvX2lkX2NsdWVfcmVmZXJlbmNpYV9mb3JlaWduIikKICBjYXRfY29kaWdvc191cmdlbmNpYXMgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXRfY29kaWdvc191cmdlbmNpYXM/ICAgICAgICAgICAgICAgICAgQHJlbGF0aW9uKGZpZWxkczogW2lkX2NvZGlnb191cmdlbmNpYV0sIHJlZmVyZW5jZXM6IFtpZF0sIG9uRGVsZXRlOiBSZXN0cmljdCwgb25VcGRhdGU6IFJlc3RyaWN0LCBtYXA6ICJocHpfaW5ncmVzb19ob3NwaXRhbGFyaW9faWRfY29kaWdvX3VyZ2VuY2lhX2ZvcmVpZ24iKQogIGNhdF9jaWUxMCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhdF9jaWUxMD8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBAcmVsYXRpb24oZmllbGRzOiBbaWRfZGlhZ25vc3RpY29dLCByZWZlcmVuY2VzOiBbaWRdLCBvbkRlbGV0ZTogUmVzdHJpY3QsIG9uVXBkYXRlOiBSZXN0cmljdCwgbWFwOiAiaHB6X2luZ3Jlc29faG9zcGl0YWxhcmlvX2lkX2RpYWdub3N0aWNvX2ZvcmVpZ24iKQogIGNhdF9lc3BlY2lhbGlkYWRlcyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhdF9lc3BlY2lhbGlkYWRlcz8gICAgICAgICAgICAgICAgICAgICBAcmVsYXRpb24oZmllbGRzOiBbaWRfZXNwZWNpYWxpZGFkXSwgcmVmZXJlbmNlczogW2lkXSwgb25EZWxldGU6IFJlc3RyaWN0LCBvblVwZGF0ZTogUmVzdHJpY3QsIG1hcDogImhwel9pbmdyZXNvX2hvc3BpdGFsYXJpb19pZF9lc3BlY2lhbGlkYWRfZm9yZWlnbiIpCiAgcmNoX2VtcGxlYWRvc19ocHpfaW5ncmVzb19ob3NwaXRhbGFyaW9faWRfbWVkaWNvX2NvbnRyYXJlZmllcmVUb3JjaF9lbXBsZWFkb3MgcmNoX2VtcGxlYWRvcz8gICAgICAgICAgICAgICAgICAgICAgICAgIEByZWxhdGlvbigiaHB6X2luZ3Jlc29faG9zcGl0YWxhcmlvX2lkX21lZGljb19jb250cmFyZWZpZXJlVG9yY2hfZW1wbGVhZG9zIiwgZmllbGRzOiBbaWRfbWVkaWNvX2NvbnRyYXJlZmllcmVdLCByZWZlcmVuY2VzOiBbaWRdLCBvbkRlbGV0ZTogUmVzdHJpY3QsIG9uVXBkYXRlOiBSZXN0cmljdCwgbWFwOiAiaHB6X2luZ3Jlc29faG9zcGl0YWxhcmlvX2lkX21lZGljb19jb250cmFyZWZpZXJlX2ZvcmVpZ24iKQogIHJjaF9lbXBsZWFkb3NfaHB6X2luZ3Jlc29faG9zcGl0YWxhcmlvX2lkX21lZGljb1RvcmNoX2VtcGxlYWRvcyAgICAgICAgICAgICAgIHJjaF9lbXBsZWFkb3M/ICAgICAgICAgICAgICAgICAgICAgICAgICBAcmVsYXRpb24oImhwel9pbmdyZXNvX2hvc3BpdGFsYXJpb19pZF9tZWRpY29Ub3JjaF9lbXBsZWFkb3MiLCBmaWVsZHM6IFtpZF9tZWRpY29dLCByZWZlcmVuY2VzOiBbaWRdLCBvbkRlbGV0ZTogUmVzdHJpY3QsIG9uVXBkYXRlOiBSZXN0cmljdCwgbWFwOiAiaHB6X2luZ3Jlc29faG9zcGl0YWxhcmlvX2lkX21lZGljb19mb3JlaWduIikKICBjYXRfbml2ZWxlcyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXRfbml2ZWxlcz8gICAgICAgICAgICAgICAgICAgICAgICAgICAgQHJlbGF0aW9uKGZpZWxkczogW2lkX25pdmVsXSwgcmVmZXJlbmNlczogW2lkXSwgb25EZWxldGU6IFJlc3RyaWN0LCBvblVwZGF0ZTogUmVzdHJpY3QsIG1hcDogImhwel9pbmdyZXNvX2hvc3BpdGFsYXJpb19pZF9uaXZlbF9mb3JlaWduIikKICBocHpfcGFjaWVudGUgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBocHpfcGFjaWVudGUgICAgICAgICAgICAgICAgICAgICAgICAgICAgQHJlbGF0aW9uKGZpZWxkczogW2lkX3BhY2llbnRlXSwgcmVmZXJlbmNlczogW2lkXSwgb25VcGRhdGU6IFJlc3RyaWN0LCBtYXA6ICJocHpfaW5ncmVzb19ob3NwaXRhbGFyaW9faWRfcGFjaWVudGVfZm9yZWlnbiIpCiAgY2F0X3ZpYXNfaW5ncmVzb19ocHpfaW5ncmVzb19ob3NwaXRhbGFyaW9faWRfcHJvZ3JhbWFUb2NhdF92aWFzX2luZ3Jlc28gICAgICAgY2F0X3ZpYXNfaW5ncmVzbz8gICAgICAgICAgICAgICAgICAgICAgIEByZWxhdGlvbigiaHB6X2luZ3Jlc29faG9zcGl0YWxhcmlvX2lkX3Byb2dyYW1hVG9jYXRfdmlhc19pbmdyZXNvIiwgZmllbGRzOiBbaWRfcHJvZ3JhbWFdLCByZWZlcmVuY2VzOiBbaWRdLCBvbkRlbGV0ZTogUmVzdHJpY3QsIG9uVXBkYXRlOiBSZXN0cmljdCwgbWFwOiAiaHB6X2luZ3Jlc29faG9zcGl0YWxhcmlvX2lkX3Byb2dyYW1hX2ZvcmVpZ24iKQogIHVzZXJzX2hwel9pbmdyZXNvX2hvc3BpdGFsYXJpb19pZF91c2VyX2NvbmZpcm1hY2lvblRvdXNlcnMgICAgICAgICAgICAgICAgICAgIHVzZXJzPyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBAcmVsYXRpb24oImhwel9pbmdyZXNvX2hvc3BpdGFsYXJpb19pZF91c2VyX2NvbmZpcm1hY2lvblRvdXNlcnMiLCBmaWVsZHM6IFtpZF91c2VyX2NvbmZpcm1hY2lvbl0sIHJlZmVyZW5jZXM6IFtpZF0sIG9uRGVsZXRlOiBSZXN0cmljdCwgb25VcGRhdGU6IFJlc3RyaWN0LCBtYXA6ICJocHpfaW5ncmVzb19ob3NwaXRhbGFyaW9faWRfdXNlcl9jb25maXJtYWNpb25fZm9yZWlnbiIpCiAgdXNlcnNfaHB6X2luZ3Jlc29faG9zcGl0YWxhcmlvX2lkX3VzZXJUb3VzZXJzICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXNlcnM/ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEByZWxhdGlvbigiaHB6X2luZ3Jlc29faG9zcGl0YWxhcmlvX2lkX3VzZXJUb3VzZXJzIiwgZmllbGRzOiBbaWRfdXNlcl0sIHJlZmVyZW5jZXM6IFtpZF0sIG9uRGVsZXRlOiBSZXN0cmljdCwgb25VcGRhdGU6IFJlc3RyaWN0LCBtYXA6ICJocHpfaW5ncmVzb19ob3NwaXRhbGFyaW9faWRfdXNlcl9mb3JlaWduIikKICBjYXRfdmlhc19pbmdyZXNvX2hwel9pbmdyZXNvX2hvc3BpdGFsYXJpb19pZF92aWFfaW5ncmVzb1RvY2F0X3ZpYXNfaW5ncmVzbyAgICBjYXRfdmlhc19pbmdyZXNvPyAgICAgICAgICAgICAgICAgICAgICAgQHJlbGF0aW9uKCJocHpfaW5ncmVzb19ob3NwaXRhbGFyaW9faWRfdmlhX2luZ3Jlc29Ub2NhdF92aWFzX2luZ3Jlc28iLCBmaWVsZHM6IFtpZF92aWFfaW5ncmVzb10sIHJlZmVyZW5jZXM6IFtpZF0sIG9uRGVsZXRlOiBSZXN0cmljdCwgb25VcGRhdGU6IFJlc3RyaWN0LCBtYXA6ICJocHpfaW5ncmVzb19ob3NwaXRhbGFyaW9faWRfdmlhX2luZ3Jlc29fZm9yZWlnbiIpCiAgaHB6X2luZ3Jlc29fbm9tMDQ2ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHB6X2luZ3Jlc29fbm9tMDQ2W10KICBocHpfaW5ncmVzb19zaWdub3Nfdml0YWxlcyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBocHpfaW5ncmVzb19zaWdub3Nfdml0YWxlc1tdCiAgaHB6X3BhY2llbnRlX2F1eGlsaWFyZXNfZGlhZ25vc3RpY28gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHB6X3BhY2llbnRlX2F1eGlsaWFyZXNfZGlhZ25vc3RpY29bXQogIGhwel9wYWNpZW50ZV9ub3RhX21lZGljYSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhwel9wYWNpZW50ZV9ub3RhX21lZGljYVtdCiAgaHB6X3BhY2llbnRlX25vdGFfdHJhYmFqb19zb2NpYWwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHB6X3BhY2llbnRlX25vdGFfdHJhYmFqb19zb2NpYWxbXQogIGhwel9wYXRvbG9naWFfZXN0dWRpb3MgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhwel9wYXRvbG9naWFfZXN0dWRpb3NbXQoKICBAQGluZGV4KFtpZF9jYW1hXSwgbWFwOiAiaHB6X2luZ3Jlc29faG9zcGl0YWxhcmlvX2lkX2NhbWFfZm9yZWlnbiIpCiAgQEBpbmRleChbaWRfY2x1ZV9hdGVuY2lvbl0sIG1hcDogImhwel9pbmdyZXNvX2hvc3BpdGFsYXJpb19pZF9jbHVlX2F0ZW5jaW9uX2ZvcmVpZ24iKQogIEBAaW5kZXgoW2lkX2NsdWVfY29udHJhcmVmZXJlbmNpYV0sIG1hcDogImhwel9pbmdyZXNvX2hvc3BpdGFsYXJpb19pZF9jbHVlX2NvbnRyYXJlZmVyZW5jaWFfZm9yZWlnbiIpCiAgQEBpbmRleChbaWRfY2x1ZV9yZWZlcmVuY2lhXSwgbWFwOiAiaHB6X2luZ3Jlc29faG9zcGl0YWxhcmlvX2lkX2NsdWVfcmVmZXJlbmNpYV9mb3JlaWduIikKICBAQGluZGV4KFtpZF9jb2RpZ29fdXJnZW5jaWFdLCBtYXA6ICJocHpfaW5ncmVzb19ob3NwaXRhbGFyaW9faWRfY29kaWdvX3VyZ2VuY2lhX2ZvcmVpZ24iKQogIEBAaW5kZXgoW2lkX2RpYWdub3N0aWNvXSwgbWFwOiAiaHB6X2luZ3Jlc29faG9zcGl0YWxhcmlvX2lkX2RpYWdub3N0aWNvX2ZvcmVpZ24iKQogIEBAaW5kZXgoW2lkX2VzcGVjaWFsaWRhZF0sIG1hcDogImhwel9pbmdyZXNvX2hvc3BpdGFsYXJpb19pZF9lc3BlY2lhbGlkYWRfZm9yZWlnbiIpCiAgQEBpbmRleChbaWRfbWVkaWNvX2NvbnRyYXJlZmllcmVdLCBtYXA6ICJocHpfaW5ncmVzb19ob3NwaXRhbGFyaW9faWRfbWVkaWNvX2NvbnRyYXJlZmllcmVfZm9yZWlnbiIpCiAgQEBpbmRleChbaWRfbWVkaWNvXSwgbWFwOiAiaHB6X2luZ3Jlc29faG9zcGl0YWxhcmlvX2lkX21lZGljb19mb3JlaWduIikKICBAQGluZGV4KFtpZF9uaXZlbF0sIG1hcDogImhwel9pbmdyZXNvX2hvc3BpdGFsYXJpb19pZF9uaXZlbF9mb3JlaWduIikKICBAQGluZGV4KFtpZF9wYWNpZW50ZV0sIG1hcDogImhwel9pbmdyZXNvX2hvc3BpdGFsYXJpb19pZF9wYWNpZW50ZV9mb3JlaWduIikKICBAQGluZGV4KFtpZF9wcm9ncmFtYV0sIG1hcDogImhwel9pbmdyZXNvX2hvc3BpdGFsYXJpb19pZF9wcm9ncmFtYV9mb3JlaWduIikKICBAQGluZGV4KFtpZF91c2VyX2NvbmZpcm1hY2lvbl0sIG1hcDogImhwel9pbmdyZXNvX2hvc3BpdGFsYXJpb19pZF91c2VyX2NvbmZpcm1hY2lvbl9mb3JlaWduIikKICBAQGluZGV4KFtpZF91c2VyXSwgbWFwOiAiaHB6X2luZ3Jlc29faG9zcGl0YWxhcmlvX2lkX3VzZXJfZm9yZWlnbiIpCiAgQEBpbmRleChbaWRfdmlhX2luZ3Jlc29dLCBtYXA6ICJocHpfaW5ncmVzb19ob3NwaXRhbGFyaW9faWRfdmlhX2luZ3Jlc29fZm9yZWlnbiIpCn0KCm1vZGVsIGhwel9pbmdyZXNvX25vbTA0NiB7CiAgaWQgICAgICAgICAgICAgICAgICAgICAgIEludCAgICAgICAgICAgICAgICAgICAgICBAaWQgQGRlZmF1bHQoYXV0b2luY3JlbWVudCgpKSBAZGIuVW5zaWduZWRJbnQKICBmb2xpb19vZmljaW8gICAgICAgICAgICAgU3RyaW5nPwogIG51bWVyb19jYXJwZXRhICAgICAgICAgICBTdHJpbmc/CiAgb2JzZXJ2YWNpb25lcyAgICAgICAgICAgIFN0cmluZz8gICAgICAgICAgICAgICAgICBAZGIuVGV4dAogIGlkX2luZ3Jlc28gICAgICAgICAgICAgICBJbnQgICAgICAgICAgICAgICAgICAgICAgQGRiLlVuc2lnbmVkSW50CiAgY3JlYXRlZF9hdCAgICAgICAgICAgICAgIERhdGVUaW1lPyAgICAgICAgICAgICAgICBAZGIuVGltZXN0YW1wKDApCiAgdXBkYXRlZF9hdCAgICAgICAgICAgICAgIERhdGVUaW1lPyAgICAgICAgICAgICAgICBAZGIuVGltZXN0YW1wKDApCiAgZGVsZXRlZF9hdCAgICAgICAgICAgICAgIERhdGVUaW1lPyAgICAgICAgICAgICAgICBAZGIuVGltZXN0YW1wKDApCiAgaHB6X2luZ3Jlc29faG9zcGl0YWxhcmlvIGhwel9pbmdyZXNvX2hvc3BpdGFsYXJpbyBAcmVsYXRpb24oZmllbGRzOiBbaWRfaW5ncmVzb10sIHJlZmVyZW5jZXM6IFtpZF0sIG9uVXBkYXRlOiBSZXN0cmljdCwgbWFwOiAiaHB6X2luZ3Jlc29fbm9tMDQ2X2lkX2luZ3Jlc29fZm9yZWlnbiIpCgogIEBAaW5kZXgoW2lkX2luZ3Jlc29dLCBtYXA6ICJocHpfaW5ncmVzb19ub20wNDZfaWRfaW5ncmVzb19mb3JlaWduIikKfQoKbW9kZWwgaHB6X2luZ3Jlc29fc2lnbm9zX3ZpdGFsZXMgewogIGlkICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBCaWdJbnQgICAgICAgICAgICAgICAgICAgICBAaWQgQGRlZmF1bHQoYXV0b2luY3JlbWVudCgpKSBAZGIuVW5zaWduZWRCaWdJbnQKICB0ZW5zaW9uX2FydGVyaWFsX3Npc3RvbGljYSAgICAgICAgICAgICAgICAgICAgICAgICAgSW50PwogIHRlbnNpb25fYXJ0ZXJpYWxfZGlhc3RvbGljYSAgICAgICAgICAgICAgICAgICAgICAgICBJbnQ/CiAgZnJlY3VlbmNpYV9jYXJkaWFjYSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEludD8KICBmcmVjdWVuY2lhX3Jlc3BpcmF0b3JpYSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSW50PwogIHBlc28gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBJbnQ/CiAgdGFsbGEgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEludD8KICB0ZW1wZXJhdHVyYSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRGVjaW1hbD8gICAgICAgICAgICAgICAgICAgQGRiLkRlY2ltYWwoMTAsIDIpCiAgdXJlc2lzICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIERlY2ltYWw/ICAgICAgICAgICAgICAgICAgIEBkYi5EZWNpbWFsKDEwLCAyKQogIGdsdWNlbWlhX2NhcGlsYXIgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBJbnQ/CiAgc2F0dXJhY2lvbl9wYXJjaWFsX294aWdlbm8gICAgICAgICAgICAgICAgICAgICAgICAgIEludD8KICBjYW5jZWxhY2lvbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU3RyaW5nPyAgICAgICAgICAgICAgICAgICAgQGRiLlRleHQKICBpZF9pbmdyZXNvICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSW50ICAgICAgICAgICAgICAgICAgICAgICAgQGRiLlVuc2lnbmVkSW50CiAgaWRfdXNlciAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEludD8gICAgICAgICAgICAgICAgICAgICAgIEBkYi5VbnNpZ25lZEludAogIGlkX2F1dG9yaXpvICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBJbnQ/ICAgICAgICAgICAgICAgICAgICAgICBAZGIuVW5zaWduZWRJbnQKICBpZF9jYW5jZWxvICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSW50PyAgICAgICAgICAgICAgICAgICAgICAgQGRiLlVuc2lnbmVkSW50CiAgY3JlYXRlZF9hdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIERhdGVUaW1lPyAgICAgICAgICAgICAgICAgIEBkYi5UaW1lc3RhbXAoMCkKICB1cGRhdGVkX2F0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRGF0ZVRpbWU/ICAgICAgICAgICAgICAgICAgQGRiLlRpbWVzdGFtcCgwKQogIHVzZXJzX2hwel9pbmdyZXNvX3NpZ25vc192aXRhbGVzX2lkX2F1dG9yaXpvVG91c2VycyB1c2Vycz8gICAgICAgICAgICAgICAgICAgICBAcmVsYXRpb24oImhwel9pbmdyZXNvX3NpZ25vc192aXRhbGVzX2lkX2F1dG9yaXpvVG91c2VycyIsIGZpZWxkczogW2lkX2F1dG9yaXpvXSwgcmVmZXJlbmNlczogW2lkXSwgb25EZWxldGU6IFJlc3RyaWN0LCBvblVwZGF0ZTogUmVzdHJpY3QsIG1hcDogImhwel9pbmdyZXNvX3NpZ25vc192aXRhbGVzX2lkX2F1dG9yaXpvX2ZvcmVpZ24iKQogIHVzZXJzX2hwel9pbmdyZXNvX3NpZ25vc192aXRhbGVzX2lkX2NhbmNlbG9Ub3VzZXJzICB1c2Vycz8gICAgICAgICAgICAgICAgICAgICBAcmVsYXRpb24oImhwel9pbmdyZXNvX3NpZ25vc192aXRhbGVzX2lkX2NhbmNlbG9Ub3VzZXJzIiwgZmllbGRzOiBbaWRfY2FuY2Vsb10sIHJlZmVyZW5jZXM6IFtpZF0sIG9uRGVsZXRlOiBSZXN0cmljdCwgb25VcGRhdGU6IFJlc3RyaWN0LCBtYXA6ICJocHpfaW5ncmVzb19zaWdub3Nfdml0YWxlc19pZF9jYW5jZWxvX2ZvcmVpZ24iKQogIGhwel9pbmdyZXNvX2hvc3BpdGFsYXJpbyAgICAgICAgICAgICAgICAgICAgICAgICAgICBocHpfaW5ncmVzb19ob3NwaXRhbGFyaW8gICBAcmVsYXRpb24oZmllbGRzOiBbaWRfaW5ncmVzb10sIHJlZmVyZW5jZXM6IFtpZF0sIG9uVXBkYXRlOiBSZXN0cmljdCwgbWFwOiAiaHB6X2luZ3Jlc29fc2lnbm9zX3ZpdGFsZXNfaWRfaW5ncmVzb19mb3JlaWduIikKICB1c2Vyc19ocHpfaW5ncmVzb19zaWdub3Nfdml0YWxlc19pZF91c2VyVG91c2VycyAgICAgdXNlcnM/ICAgICAgICAgICAgICAgICAgICAgQHJlbGF0aW9uKCJocHpfaW5ncmVzb19zaWdub3Nfdml0YWxlc19pZF91c2VyVG91c2VycyIsIGZpZWxkczogW2lkX3VzZXJdLCByZWZlcmVuY2VzOiBbaWRdLCBvbkRlbGV0ZTogUmVzdHJpY3QsIG9uVXBkYXRlOiBSZXN0cmljdCwgbWFwOiAiaHB6X2luZ3Jlc29fc2lnbm9zX3ZpdGFsZXNfaWRfdXNlcl9mb3JlaWduIikKICBocHpfcGFjaWVudGVfbm90YV9tZWRpY2EgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHB6X3BhY2llbnRlX25vdGFfbWVkaWNhW10KCiAgQEBpbmRleChbaWRfYXV0b3Jpem9dLCBtYXA6ICJocHpfaW5ncmVzb19zaWdub3Nfdml0YWxlc19pZF9hdXRvcml6b19mb3JlaWduIikKICBAQGluZGV4KFtpZF9jYW5jZWxvXSwgbWFwOiAiaHB6X2luZ3Jlc29fc2lnbm9zX3ZpdGFsZXNfaWRfY2FuY2Vsb19mb3JlaWduIikKICBAQGluZGV4KFtpZF9pbmdyZXNvXSwgbWFwOiAiaHB6X2luZ3Jlc29fc2lnbm9zX3ZpdGFsZXNfaWRfaW5ncmVzb19mb3JlaWduIikKICBAQGluZGV4KFtpZF91c2VyXSwgbWFwOiAiaHB6X2luZ3Jlc29fc2lnbm9zX3ZpdGFsZXNfaWRfdXNlcl9mb3JlaWduIikKfQoKbW9kZWwgaHB6X21lZGljYW1lbnRvX21pbmlzdHJhY2lvbiB7CiAgaWQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQmlnSW50ICAgICAgICAgICAgICAgICAgICAgICBAaWQgQGRlZmF1bHQoYXV0b2luY3JlbWVudCgpKSBAZGIuVW5zaWduZWRCaWdJbnQKICBpZF9tZWRpY2FtZW50byAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBCaWdJbnQ/ICAgICAgICAgICAgICAgICAgICAgIEBkYi5VbnNpZ25lZEJpZ0ludAogIGZlY2hhX3N1bWluaXN0cmFjaW9uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIERhdGVUaW1lICAgICAgICAgICAgICAgICAgICAgQGRiLkRhdGVUaW1lKDApCiAgb2JzZXJ2YWNpb25lcyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU3RyaW5nPyAgICAgICAgICAgICAgICAgICAgICBAZGIuVGV4dAogIGlkX3VzZXIgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEludD8gICAgICAgICAgICAgICAgICAgICAgICAgQGRiLlVuc2lnbmVkSW50CiAgaWRfYXV0b3Jpem8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSW50PyAgICAgICAgICAgICAgICAgICAgICAgICBAZGIuVW5zaWduZWRJbnQKICBpZF9jYW5jZWxvICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBJbnQ/ICAgICAgICAgICAgICAgICAgICAgICAgIEBkYi5VbnNpZ25lZEludAogIGNyZWF0ZWRfYXQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIERhdGVUaW1lPyAgICAgICAgICAgICAgICAgICAgQGRiLlRpbWVzdGFtcCgwKQogIHVwZGF0ZWRfYXQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIERhdGVUaW1lPyAgICAgICAgICAgICAgICAgICAgQGRiLlRpbWVzdGFtcCgwKQogIGRlbGV0ZWRfYXQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIERhdGVUaW1lPyAgICAgICAgICAgICAgICAgICAgQGRiLlRpbWVzdGFtcCgwKQogIHVzZXJzX2hwel9tZWRpY2FtZW50b19taW5pc3RyYWNpb25faWRfYXV0b3Jpem9Ub3VzZXJzIHVzZXJzPyAgICAgICAgICAgICAgICAgICAgICAgQHJlbGF0aW9uKCJocHpfbWVkaWNhbWVudG9fbWluaXN0cmFjaW9uX2lkX2F1dG9yaXpvVG91c2VycyIsIGZpZWxkczogW2lkX2F1dG9yaXpvXSwgcmVmZXJlbmNlczogW2lkXSwgb25EZWxldGU6IFJlc3RyaWN0LCBvblVwZGF0ZTogUmVzdHJpY3QsIG1hcDogImhwel9tZWRpY2FtZW50b19taW5pc3RyYWNpb25faWRfYXV0b3Jpem9fZm9yZWlnbiIpCiAgdXNlcnNfaHB6X21lZGljYW1lbnRvX21pbmlzdHJhY2lvbl9pZF9jYW5jZWxvVG91c2VycyAgdXNlcnM/ICAgICAgICAgICAgICAgICAgICAgICBAcmVsYXRpb24oImhwel9tZWRpY2FtZW50b19taW5pc3RyYWNpb25faWRfY2FuY2Vsb1RvdXNlcnMiLCBmaWVsZHM6IFtpZF9jYW5jZWxvXSwgcmVmZXJlbmNlczogW2lkXSwgb25EZWxldGU6IFJlc3RyaWN0LCBvblVwZGF0ZTogUmVzdHJpY3QsIG1hcDogImhwel9tZWRpY2FtZW50b19taW5pc3RyYWNpb25faWRfY2FuY2Vsb19mb3JlaWduIikKICBocHpfaW5kaWNhY2lvbl9tZWRpY2FtZW50b3MgICAgICAgICAgICAgICAgICAgICAgICAgICBocHpfaW5kaWNhY2lvbl9tZWRpY2FtZW50b3M/IEByZWxhdGlvbihmaWVsZHM6IFtpZF9tZWRpY2FtZW50b10sIHJlZmVyZW5jZXM6IFtpZF0sIG9uRGVsZXRlOiBSZXN0cmljdCwgb25VcGRhdGU6IFJlc3RyaWN0LCBtYXA6ICJocHpfbWVkaWNhbWVudG9fbWluaXN0cmFjaW9uX2lkX21lZGljYW1lbnRvX2ZvcmVpZ24iKQogIHVzZXJzX2hwel9tZWRpY2FtZW50b19taW5pc3RyYWNpb25faWRfdXNlclRvdXNlcnMgICAgIHVzZXJzPyAgICAgICAgICAgICAgICAgICAgICAgQHJlbGF0aW9uKCJocHpfbWVkaWNhbWVudG9fbWluaXN0cmFjaW9uX2lkX3VzZXJUb3VzZXJzIiwgZmllbGRzOiBbaWRfdXNlcl0sIHJlZmVyZW5jZXM6IFtpZF0sIG9uRGVsZXRlOiBSZXN0cmljdCwgb25VcGRhdGU6IFJlc3RyaWN0LCBtYXA6ICJocHpfbWVkaWNhbWVudG9fbWluaXN0cmFjaW9uX2lkX3VzZXJfZm9yZWlnbiIpCgogIEBAaW5kZXgoW2lkX2F1dG9yaXpvXSwgbWFwOiAiaHB6X21lZGljYW1lbnRvX21pbmlzdHJhY2lvbl9pZF9hdXRvcml6b19mb3JlaWduIikKICBAQGluZGV4KFtpZF9jYW5jZWxvXSwgbWFwOiAiaHB6X21lZGljYW1lbnRvX21pbmlzdHJhY2lvbl9pZF9jYW5jZWxvX2ZvcmVpZ24iKQogIEBAaW5kZXgoW2lkX21lZGljYW1lbnRvXSwgbWFwOiAiaHB6X21lZGljYW1lbnRvX21pbmlzdHJhY2lvbl9pZF9tZWRpY2FtZW50b19mb3JlaWduIikKICBAQGluZGV4KFtpZF91c2VyXSwgbWFwOiAiaHB6X21lZGljYW1lbnRvX21pbmlzdHJhY2lvbl9pZF91c2VyX2ZvcmVpZ24iKQp9Cgptb2RlbCBocHpfbml2ZWxfaGlzdG9yaWFsIHsKICBpZCAgICAgICAgICAgIEludCAgICAgICAgICBAaWQgQGRlZmF1bHQoYXV0b2luY3JlbWVudCgpKSBAZGIuVW5zaWduZWRJbnQKICBpZF9wYWNpZW50ZSAgIEludCAgICAgICAgICBAZGIuVW5zaWduZWRJbnQKICBpZF9uaXZlbCAgICAgIEludCAgICAgICAgICBAZGIuVW5zaWduZWRJbnQKICBjYXNvICAgICAgICAgIEludCAgICAgICAgICBAZGVmYXVsdCgxKQogIG9ic2VydmFjaW9uZXMgU3RyaW5nPyAgICAgIEBkYi5UZXh0CiAgY3JlYXRlZF9hdCAgICBEYXRlVGltZT8gICAgQGRiLlRpbWVzdGFtcCgwKQogIHVwZGF0ZWRfYXQgICAgRGF0ZVRpbWU/ICAgIEBkYi5UaW1lc3RhbXAoMCkKICBjYXRfbml2ZWxlcyAgIGNhdF9uaXZlbGVzICBAcmVsYXRpb24oZmllbGRzOiBbaWRfbml2ZWxdLCByZWZlcmVuY2VzOiBbaWRdLCBvblVwZGF0ZTogUmVzdHJpY3QsIG1hcDogImhwel9uaXZlbF9oaXN0b3JpYWxfaWRfbml2ZWxfZm9yZWlnbiIpCiAgaHB6X3BhY2llbnRlICBocHpfcGFjaWVudGUgQHJlbGF0aW9uKGZpZWxkczogW2lkX3BhY2llbnRlXSwgcmVmZXJlbmNlczogW2lkXSwgb25VcGRhdGU6IFJlc3RyaWN0LCBtYXA6ICJocHpfbml2ZWxfaGlzdG9yaWFsX2lkX3BhY2llbnRlX2ZvcmVpZ24iKQoKICBAQGluZGV4KFtpZF9uaXZlbF0sIG1hcDogImhwel9uaXZlbF9oaXN0b3JpYWxfaWRfbml2ZWxfZm9yZWlnbiIpCiAgQEBpbmRleChbaWRfcGFjaWVudGVdLCBtYXA6ICJocHpfbml2ZWxfaGlzdG9yaWFsX2lkX3BhY2llbnRlX2ZvcmVpZ24iKQp9Cgptb2RlbCBocHpfbm90YV9hbHRhX21lZGljYSB7CiAgaWQgICAgICAgICAgICAgICAgICAgICAgICAgIEJpZ0ludCAgICAgICAgICAgICAgICAgICBAaWQgQGRlZmF1bHQoYXV0b2luY3JlbWVudCgpKSBAZGIuVW5zaWduZWRCaWdJbnQKICBtb3Rpdm8gICAgICAgICAgICAgICAgICAgICAgU3RyaW5nPyAgICAgICAgICAgICAgICAgIEBkYi5WYXJDaGFyKDEwMCkKICBvdHJvX21vdGl2byAgICAgICAgICAgICAgICAgU3RyaW5nPyAgICAgICAgICAgICAgICAgIEBkYi5UZXh0CiAgY2lydWdpYXMgICAgICAgICAgICAgICAgICAgIFN0cmluZz8gICAgICAgICAgICAgICAgICBAZGIuVGV4dAogIGVzdHVkaW9zX3JlYWxpemFkb3MgICAgICAgICBTdHJpbmc/ICAgICAgICAgICAgICAgICAgQGRiLlRleHQKICB0cmF0YW1pZW50b19nbG9iYWwgICAgICAgICAgU3RyaW5nPyAgICAgICAgICAgICAgICAgIEBkYi5UZXh0CiAgdHJhdGFtaWVudG9fZWdyZXNvICAgICAgICAgIFN0cmluZz8gICAgICAgICAgICAgICAgICBAZGIuVGV4dAogIHByb2JsZW1hc19jbGluaWNvc19yZXNvbHZlciBTdHJpbmc/ICAgICAgICAgICAgICAgICAgQGRiLlRleHQKICBhdGVuY2lvbl9mYWN0b3Jlc19yaWVzZ28gICAgU3RyaW5nPyAgICAgICAgICAgICAgICAgIEBkYi5UZXh0CiAgcHJvbm9zdGljb19lZ3Jlc28gICAgICAgICAgIFN0cmluZz8gICAgICAgICAgICAgICAgICBAZGIuVGV4dAogIHByb3hpbWFzX2NpdGFzICAgICAgICAgICAgICBTdHJpbmc/ICAgICAgICAgICAgICAgICAgQGRiLlRleHQKICBhbHRhX21lZGljYV9mZWNoYSAgICAgICAgICAgRGF0ZVRpbWU/ICAgICAgICAgICAgICAgIEBkYi5EYXRlVGltZSgwKQogIGlkX25vdGEgICAgICAgICAgICAgICAgICAgICBCaWdJbnQgICAgICAgICAgICAgICAgICAgQGRiLlVuc2lnbmVkQmlnSW50CiAgY3JlYXRlZF9hdCAgICAgICAgICAgICAgICAgIERhdGVUaW1lPyAgICAgICAgICAgICAgICBAZGIuVGltZXN0YW1wKDApCiAgdXBkYXRlZF9hdCAgICAgICAgICAgICAgICAgIERhdGVUaW1lPyAgICAgICAgICAgICAgICBAZGIuVGltZXN0YW1wKDApCiAgZGVsZXRlZF9hdCAgICAgICAgICAgICAgICAgIERhdGVUaW1lPyAgICAgICAgICAgICAgICBAZGIuVGltZXN0YW1wKDApCiAgaHB6X3BhY2llbnRlX25vdGFfbWVkaWNhICAgIGhwel9wYWNpZW50ZV9ub3RhX21lZGljYSBAcmVsYXRpb24oZmllbGRzOiBbaWRfbm90YV0sIHJlZmVyZW5jZXM6IFtpZF0sIG9uVXBkYXRlOiBSZXN0cmljdCwgbWFwOiAiaHB6X25vdGFfYWx0YV9tZWRpY2FfaWRfbm90YV9mb3JlaWduIikKCiAgQEBpbmRleChbaWRfbm90YV0sIG1hcDogImhwel9ub3RhX2FsdGFfbWVkaWNhX2lkX25vdGFfZm9yZWlnbiIpCn0KCm1vZGVsIGhwel9ub3Rhc19kaWFnbm9zdGljb3MgewogIGlkICAgICAgICAgICAgICAgICAgICAgICBCaWdJbnQgICAgICAgICAgICAgICAgICAgQGlkIEBkZWZhdWx0KGF1dG9pbmNyZW1lbnQoKSkgQGRiLlVuc2lnbmVkQmlnSW50CiAgaWRfbm90YSAgICAgICAgICAgICAgICAgIEJpZ0ludCAgICAgICAgICAgICAgICAgICBAZGIuVW5zaWduZWRCaWdJbnQKICBpZF9kaWFnbm9zdGljbyAgICAgICAgICAgSW50ICAgICAgICAgICAgICAgICAgICAgIEBkYi5VbnNpZ25lZEludAogIGNyZWF0ZWRfYXQgICAgICAgICAgICAgICBEYXRlVGltZT8gICAgICAgICAgICAgICAgQGRiLlRpbWVzdGFtcCgwKQogIHVwZGF0ZWRfYXQgICAgICAgICAgICAgICBEYXRlVGltZT8gICAgICAgICAgICAgICAgQGRiLlRpbWVzdGFtcCgwKQogIGhwel9keF9oaXN0b3JpYWwgICAgICAgICBocHpfZHhfaGlzdG9yaWFsICAgICAgICAgQHJlbGF0aW9uKGZpZWxkczogW2lkX2RpYWdub3N0aWNvXSwgcmVmZXJlbmNlczogW2lkXSwgb25VcGRhdGU6IFJlc3RyaWN0LCBtYXA6ICJocHpfbm90YXNfZGlhZ25vc3RpY29zX2lkX2RpYWdub3N0aWNvX2ZvcmVpZ24iKQogIGhwel9wYWNpZW50ZV9ub3RhX21lZGljYSBocHpfcGFjaWVudGVfbm90YV9tZWRpY2EgQHJlbGF0aW9uKGZpZWxkczogW2lkX25vdGFdLCByZWZlcmVuY2VzOiBbaWRdLCBvblVwZGF0ZTogUmVzdHJpY3QsIG1hcDogImhwel9ub3Rhc19kaWFnbm9zdGljb3NfaWRfbm90YV9mb3JlaWduIikKCiAgQEBpbmRleChbaWRfZGlhZ25vc3RpY29dLCBtYXA6ICJocHpfbm90YXNfZGlhZ25vc3RpY29zX2lkX2RpYWdub3N0aWNvX2ZvcmVpZ24iKQogIEBAaW5kZXgoW2lkX25vdGFdLCBtYXA6ICJocHpfbm90YXNfZGlhZ25vc3RpY29zX2lkX25vdGFfZm9yZWlnbiIpCn0KCm1vZGVsIGhwel9wYWNpZW50ZSB7CiAgaWQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSW50ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBAaWQgQGRlZmF1bHQoYXV0b2luY3JlbWVudCgpKSBAZGIuVW5zaWduZWRJbnQKICBleHBlZGllbnRlICAgICAgICAgICAgICAgICAgICAgICBTdHJpbmcgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBkYi5DaGFyKDEwKQogIG51bV9zZWd1cmlkYWRfc29jaWFsICAgICAgICAgICAgIFN0cmluZz8KICB0aXBvX3BhY2llbnRlICAgICAgICAgICAgICAgICAgICBCb29sZWFuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBkZWZhdWx0KGZhbHNlKQogIGVzdGF0dXMgICAgICAgICAgICAgICAgICAgICAgICAgIEJvb2xlYW4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQGRlZmF1bHQodHJ1ZSkKICBjYXBhc2l0cyAgICAgICAgICAgICAgICAgICAgICAgICBCb29sZWFuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBkZWZhdWx0KGZhbHNlKQogIGV4cGVkaWVudGVfZmlzaWNvICAgICAgICAgICAgICAgIEJvb2xlYW4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQGRlZmF1bHQoZmFsc2UpCiAgZXhwZWRpZW50ZV9maXNpY29fZWxhYm9ybyAgICAgICAgU3RyaW5nPwogIGV4cGVkaWVudGVfZmlzaWNvX2ZlY2hhICAgICAgICAgIERhdGVUaW1lPyAgICAgICAgICAgICAgICAgICAgICAgICAgQGRiLkRhdGVUaW1lKDApCiAgYXRlbmNpb25fcHJpb3JpdGFyaWEgICAgICAgICAgICAgaHB6X3BhY2llbnRlX2F0ZW5jaW9uX3ByaW9yaXRhcmlhCiAgbWlncmFkbyAgICAgICAgICAgICAgICAgICAgICAgICAgQm9vbGVhbj8KICBpZF9uaXZlbCAgICAgICAgICAgICAgICAgICAgICAgICBJbnQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBkYi5VbnNpZ25lZEludAogIGlkX3BlcnNvbmEgICAgICAgICAgICAgICAgICAgICAgIEludCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQGRiLlVuc2lnbmVkSW50CiAgaWRfc3Vicm9nYWRvICAgICAgICAgICAgICAgICAgICAgSW50PyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBAZGIuVW5zaWduZWRJbnQKICBjcmVhdGVkX3VzZXIgICAgICAgICAgICAgICAgICAgICBTdHJpbmc/CiAgY3JlYXRlZF9hdCAgICAgICAgICAgICAgICAgICAgICAgRGF0ZVRpbWU/ICAgICAgICAgICAgICAgICAgICAgICAgICBAZGIuVGltZXN0YW1wKDApCiAgdXBkYXRlZF9hdCAgICAgICAgICAgICAgICAgICAgICAgRGF0ZVRpbWU/ICAgICAgICAgICAgICAgICAgICAgICAgICBAZGIuVGltZXN0YW1wKDApCiAgZGVsZXRlZF9hdCAgICAgICAgICAgICAgICAgICAgICAgRGF0ZVRpbWU/ICAgICAgICAgICAgICAgICAgICAgICAgICBAZGIuVGltZXN0YW1wKDApCiAgaGNsX2hpc3RvcmlhX2NsaW5pY2EgICAgICAgICAgICAgaGNsX2hpc3RvcmlhX2NsaW5pY2FbXQogIGhwel9pbmdyZXNvX2NvbnN1bHRhICAgICAgICAgICAgIGhwel9pbmdyZXNvX2NvbnN1bHRhW10KICBocHpfaW5ncmVzb19ob3NwaXRhbGFyaW8gICAgICAgICBocHpfaW5ncmVzb19ob3NwaXRhbGFyaW9bXQogIGhwel9uaXZlbF9oaXN0b3JpYWwgICAgICAgICAgICAgIGhwel9uaXZlbF9oaXN0b3JpYWxbXQogIGNhdF9uaXZlbGVzICAgICAgICAgICAgICAgICAgICAgIGNhdF9uaXZlbGVzICAgICAgICAgICAgICAgICAgICAgICAgQHJlbGF0aW9uKGZpZWxkczogW2lkX25pdmVsXSwgcmVmZXJlbmNlczogW2lkXSwgb25VcGRhdGU6IFJlc3RyaWN0LCBtYXA6ICJocHpfcGFjaWVudGVfaWRfbml2ZWxfZm9yZWlnbiIpCiAgY21wX3BlcnNvbmEgICAgICAgICAgICAgICAgICAgICAgY21wX3BlcnNvbmEgICAgICAgICAgICAgICAgICAgICAgICBAcmVsYXRpb24oZmllbGRzOiBbaWRfcGVyc29uYV0sIHJlZmVyZW5jZXM6IFtpZF0sIG9uVXBkYXRlOiBSZXN0cmljdCwgbWFwOiAiaHB6X3BhY2llbnRlX2lkX3BlcnNvbmFfZm9yZWlnbiIpCiAgY2F0X3N1YnJvZ2Fkb3MgICAgICAgICAgICAgICAgICAgY2F0X3N1YnJvZ2Fkb3M/ICAgICAgICAgICAgICAgICAgICBAcmVsYXRpb24oZmllbGRzOiBbaWRfc3Vicm9nYWRvXSwgcmVmZXJlbmNlczogW2lkXSwgb25EZWxldGU6IFJlc3RyaWN0LCBvblVwZGF0ZTogUmVzdHJpY3QsIG1hcDogImhwel9wYWNpZW50ZV9pZF9zdWJyb2dhZG9fZm9yZWlnbiIpCiAgaHB6X3BhY2llbnRlX2VzdF9zb2Npb2Vjb25vbWljbyAgaHB6X3BhY2llbnRlX2VzdF9zb2Npb2Vjb25vbWljb1tdCiAgaHB6X3BhY2llbnRlX25vdGFfbWVkaWNhICAgICAgICAgaHB6X3BhY2llbnRlX25vdGFfbWVkaWNhW10KICBocHpfcGFjaWVudGVfbm90YV90cmFiYWpvX3NvY2lhbCBocHpfcGFjaWVudGVfbm90YV90cmFiYWpvX3NvY2lhbFtdCiAgaHB6X3BhdG9sb2dpYV9lc3R1ZGlvcyAgICAgICAgICAgaHB6X3BhdG9sb2dpYV9lc3R1ZGlvc1tdCiAgaW5jX2V2ZW50b3NfYWR2ZXJzb3MgICAgICAgICAgICAgaW5jX2V2ZW50b3NfYWR2ZXJzb3NbXQoKICBAQGluZGV4KFtpZF9uaXZlbF0sIG1hcDogImhwel9wYWNpZW50ZV9pZF9uaXZlbF9mb3JlaWduIikKICBAQGluZGV4KFtpZF9wZXJzb25hXSwgbWFwOiAiaHB6X3BhY2llbnRlX2lkX3BlcnNvbmFfZm9yZWlnbiIpCiAgQEBpbmRleChbaWRfc3Vicm9nYWRvXSwgbWFwOiAiaHB6X3BhY2llbnRlX2lkX3N1YnJvZ2Fkb19mb3JlaWduIikKfQoKbW9kZWwgaHB6X3BhY2llbnRlX2F1eGlsaWFyZXNfZGlhZ25vc3RpY28gewogIGlkICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBCaWdJbnQgICAgICAgICAgICAgICAgICAgICAgICAgIEBpZCBAZGVmYXVsdChhdXRvaW5jcmVtZW50KCkpIEBkYi5VbnNpZ25lZEJpZ0ludAogIHRpcG8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTdHJpbmcgICAgICAgICAgICAgICAgICAgICAgICAgIEBkYi5WYXJDaGFyKDEwMCkKICBhdGVuY2lvbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU3RyaW5nICAgICAgICAgICAgICAgICAgICAgICAgICBAZGIuVmFyQ2hhcigxMDApCiAgcHJpb3JpZGFkICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFN0cmluZyAgICAgICAgICAgICAgICAgICAgICAgICAgQGRiLlZhckNoYXIoMTAwKQogIG9ic2VydmFjaW9uZXMgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTdHJpbmc/ICAgICAgICAgICAgICAgICAgICAgICAgIEBkYi5UZXh0CiAgb2JzZXJ2YWNpb25lc19sYWJvcmF0b3JpbyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFN0cmluZz8gICAgICAgICAgICAgICAgICAgICAgICAgQGRiLlRleHQKICBlc3RhdHVzICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU3RyaW5nICAgICAgICAgICAgICAgICAgICAgICAgICBAZGIuVmFyQ2hhcigxMDApCiAgZXN0YXR1c19jYWphICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFN0cmluZyAgICAgICAgICAgICAgICAgICAgICAgICAgQGRiLlZhckNoYXIoMTAwKQogIG1vdGl2byAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTdHJpbmc/ICAgICAgICAgICAgICAgICAgICAgICAgIEBkYi5UZXh0CiAgZmVjaGFfYXRlbmNpb24gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIERhdGVUaW1lPyAgICAgICAgICAgICAgICAgICAgICAgQGRiLkRhdGVUaW1lKDApCiAgaWRfaW5ncmVzbyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEludD8gICAgICAgICAgICAgICAgICAgICAgICAgICAgQGRiLlVuc2lnbmVkSW50CiAgaWRfdWJpY2FjaW9uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEludD8gICAgICAgICAgICAgICAgICAgICAgICAgICAgQGRiLlVuc2lnbmVkSW50CiAgaWRfZXNwZWNpYWxpZGFkICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEludD8gICAgICAgICAgICAgICAgICAgICAgICAgICAgQGRiLlVuc2lnbmVkSW50CiAgaWRfdXNlciAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEludCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQGRiLlVuc2lnbmVkSW50CiAgaWRfdXNlcl9jb25maXJtYWNpb24gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEludCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQGRiLlVuc2lnbmVkSW50CiAgY3JlYXRlZF9hdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIERhdGVUaW1lPyAgICAgICAgICAgICAgICAgICAgICAgQGRiLlRpbWVzdGFtcCgwKQogIHVwZGF0ZWRfYXQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBEYXRlVGltZT8gICAgICAgICAgICAgICAgICAgICAgIEBkYi5UaW1lc3RhbXAoMCkKICBkZWxldGVkX2F0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRGF0ZVRpbWU/ICAgICAgICAgICAgICAgICAgICAgICBAZGIuVGltZXN0YW1wKDApCiAgaHB6X2F1eGlsaWFyZXNfZHhfY29tZW50YXJpb3MgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhwel9hdXhpbGlhcmVzX2R4X2NvbWVudGFyaW9zW10KICBjYXRfZXNwZWNpYWxpZGFkZXMgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2F0X2VzcGVjaWFsaWRhZGVzPyAgICAgICAgICAgICBAcmVsYXRpb24oZmllbGRzOiBbaWRfZXNwZWNpYWxpZGFkXSwgcmVmZXJlbmNlczogW2lkXSwgb25EZWxldGU6IFJlc3RyaWN0LCBvblVwZGF0ZTogUmVzdHJpY3QsIG1hcDogImhwel9wYWNpZW50ZV9hdXhpbGlhcmVzX2RpYWdub3N0aWNvX2lkX2VzcGVjaWFsaWRhZF9mb3JlaWduIikKICBocHpfaW5ncmVzb19ob3NwaXRhbGFyaW8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHB6X2luZ3Jlc29faG9zcGl0YWxhcmlvPyAgICAgICBAcmVsYXRpb24oZmllbGRzOiBbaWRfaW5ncmVzb10sIHJlZmVyZW5jZXM6IFtpZF0sIG9uRGVsZXRlOiBSZXN0cmljdCwgb25VcGRhdGU6IFJlc3RyaWN0LCBtYXA6ICJocHpfcGFjaWVudGVfYXV4aWxpYXJlc19kaWFnbm9zdGljb19pZF9pbmdyZXNvX2ZvcmVpZ24iKQogIGhwel9jYW1hX2hpc3RvcmlhbCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBocHpfY2FtYV9oaXN0b3JpYWw/ICAgICAgICAgICAgIEByZWxhdGlvbihmaWVsZHM6IFtpZF91YmljYWNpb25dLCByZWZlcmVuY2VzOiBbaWRdLCBvbkRlbGV0ZTogUmVzdHJpY3QsIG9uVXBkYXRlOiBSZXN0cmljdCwgbWFwOiAiaHB6X3BhY2llbnRlX2F1eGlsaWFyZXNfZGlhZ25vc3RpY29faWRfdWJpY2FjaW9uX2ZvcmVpZ24iKQogIHVzZXJzX2hwel9wYWNpZW50ZV9hdXhpbGlhcmVzX2RpYWdub3N0aWNvX2lkX3VzZXJfY29uZmlybWFjaW9uVG91c2VycyB1c2VycyAgICAgICAgICAgICAgICAgICAgICAgICAgIEByZWxhdGlvbigiaHB6X3BhY2llbnRlX2F1eGlsaWFyZXNfZGlhZ25vc3RpY29faWRfdXNlcl9jb25maXJtYWNpb25Ub3VzZXJzIiwgZmllbGRzOiBbaWRfdXNlcl9jb25maXJtYWNpb25dLCByZWZlcmVuY2VzOiBbaWRdLCBvblVwZGF0ZTogUmVzdHJpY3QsIG1hcDogImhwel9wYWNpZW50ZV9hdXhpbGlhcmVzX2RpYWdub3N0aWNvX2lkX3VzZXJfY29uZmlybWFjaW9uX2ZvcmVpZ24iKQogIHVzZXJzX2hwel9wYWNpZW50ZV9hdXhpbGlhcmVzX2RpYWdub3N0aWNvX2lkX3VzZXJUb3VzZXJzICAgICAgICAgICAgICB1c2VycyAgICAgICAgICAgICAgICAgICAgICAgICAgIEByZWxhdGlvbigiaHB6X3BhY2llbnRlX2F1eGlsaWFyZXNfZGlhZ25vc3RpY29faWRfdXNlclRvdXNlcnMiLCBmaWVsZHM6IFtpZF91c2VyXSwgcmVmZXJlbmNlczogW2lkXSwgb25VcGRhdGU6IFJlc3RyaWN0LCBtYXA6ICJocHpfcGFjaWVudGVfYXV4aWxpYXJlc19kaWFnbm9zdGljb19pZF91c2VyX2ZvcmVpZ24iKQoKICBAQGluZGV4KFtpZF9lc3BlY2lhbGlkYWRdLCBtYXA6ICJocHpfcGFjaWVudGVfYXV4aWxpYXJlc19kaWFnbm9zdGljb19pZF9lc3BlY2lhbGlkYWRfZm9yZWlnbiIpCiAgQEBpbmRleChbaWRfaW5ncmVzb10sIG1hcDogImhwel9wYWNpZW50ZV9hdXhpbGlhcmVzX2RpYWdub3N0aWNvX2lkX2luZ3Jlc29fZm9yZWlnbiIpCiAgQEBpbmRleChbaWRfdWJpY2FjaW9uXSwgbWFwOiAiaHB6X3BhY2llbnRlX2F1eGlsaWFyZXNfZGlhZ25vc3RpY29faWRfdWJpY2FjaW9uX2ZvcmVpZ24iKQogIEBAaW5kZXgoW2lkX3VzZXJfY29uZmlybWFjaW9uXSwgbWFwOiAiaHB6X3BhY2llbnRlX2F1eGlsaWFyZXNfZGlhZ25vc3RpY29faWRfdXNlcl9jb25maXJtYWNpb25fZm9yZWlnbiIpCiAgQEBpbmRleChbaWRfdXNlcl0sIG1hcDogImhwel9wYWNpZW50ZV9hdXhpbGlhcmVzX2RpYWdub3N0aWNvX2lkX3VzZXJfZm9yZWlnbiIpCn0KCm1vZGVsIGhwel9wYWNpZW50ZV9lc3Rfc29jaW9lY29ub21pY28gewogIGlkICAgICAgICAgICAgICAgICAgICAgICAgICAgSW50ICAgICAgICAgICAgICAgIEBpZCBAZGVmYXVsdChhdXRvaW5jcmVtZW50KCkpIEBkYi5VbnNpZ25lZEludAogIGluZ3Jlc28gICAgICAgICAgICAgICAgICAgICAgRGVjaW1hbCAgICAgICAgICAgIEBkZWZhdWx0KDAuMDApIEBkYi5EZWNpbWFsKDEwLCAyKQogIG51bV9kZXBlbmRpZW50ZXMgICAgICAgICAgICAgSW50ICAgICAgICAgICAgICAgIEBkZWZhdWx0KDApCiAgYWxpbWVudGFjaW9uICAgICAgICAgICAgICAgICBEZWNpbWFsICAgICAgICAgICAgQGRlZmF1bHQoMC4wMCkgQGRiLkRlY2ltYWwoMTAsIDIpCiAgcmVudGEgICAgICAgICAgICAgICAgICAgICAgICBEZWNpbWFsICAgICAgICAgICAgQGRlZmF1bHQoMC4wMCkgQGRiLkRlY2ltYWwoMTAsIDIpCiAgYWd1YSAgICAgICAgICAgICAgICAgICAgICAgICBEZWNpbWFsICAgICAgICAgICAgQGRlZmF1bHQoMC4wMCkgQGRiLkRlY2ltYWwoMTAsIDIpCiAgbHV6ICAgICAgICAgICAgICAgICAgICAgICAgICBEZWNpbWFsICAgICAgICAgICAgQGRlZmF1bHQoMC4wMCkgQGRiLkRlY2ltYWwoMTAsIDIpCiAgdGVsZWZvbm8gICAgICAgICAgICAgICAgICAgICBEZWNpbWFsICAgICAgICAgICAgQGRlZmF1bHQoMC4wMCkgQGRiLkRlY2ltYWwoMTAsIDIpCiAgY29tYnVzdGlibGUgICAgICAgICAgICAgICAgICBEZWNpbWFsICAgICAgICAgICAgQGRlZmF1bHQoMC4wMCkgQGRiLkRlY2ltYWwoMTAsIDIpCiAgdHJhbnNwb3J0ZSAgICAgICAgICAgICAgICAgICBEZWNpbWFsICAgICAgICAgICAgQGRlZmF1bHQoMC4wMCkgQGRiLkRlY2ltYWwoMTAsIDIpCiAgZWR1Y2FjaW9uICAgICAgICAgICAgICAgICAgICBEZWNpbWFsICAgICAgICAgICAgQGRlZmF1bHQoMC4wMCkgQGRiLkRlY2ltYWwoMTAsIDIpCiAgY29uc3Vtb3MgICAgICAgICAgICAgICAgICAgICBEZWNpbWFsICAgICAgICAgICAgQGRlZmF1bHQoMC4wMCkgQGRiLkRlY2ltYWwoMTAsIDIpCiAgb3Ryb3MgICAgICAgICAgICAgICAgICAgICAgICBEZWNpbWFsICAgICAgICAgICAgQGRlZmF1bHQoMC4wMCkgQGRiLkRlY2ltYWwoMTAsIDIpCiAgZGVyZWNob3NfcmVhbGVzICAgICAgICAgICAgICBJbnQgICAgICAgICAgICAgICAgQGRlZmF1bHQoMCkKICB0aXBvX3ZpdmllbmRhICAgICAgICAgICAgICAgIEludCAgICAgICAgICAgICAgICBAZGVmYXVsdCgwKQogIHNlcnZpY2lvc19wdWJsaWNvcyAgICAgICAgICAgSW50ICAgICAgICAgICAgICAgIEBkZWZhdWx0KDApCiAgc2VydmljaW9zX2ludHJhZG9taWNpbGlhcmlvcyBJbnQgICAgICAgICAgICAgICAgQGRlZmF1bHQoMCkKICBtYXRlcmlhbF9jb25zdHJ1Y2Npb24gICAgICAgIEludCAgICAgICAgICAgICAgICBAZGVmYXVsdCgwKQogIG51bV9kb3JtaXRvcmlvcyAgICAgICAgICAgICAgSW50ICAgICAgICAgICAgICAgIEBkZWZhdWx0KDApCiAgbnVtX3BlcnNvbmFzX2Rvcm1pdG9yaW8gICAgICBJbnQgICAgICAgICAgICAgICAgQGRlZmF1bHQoMCkKICBvY3VwYWNpb25fZXN0ICAgICAgICAgICAgICAgIEludCAgICAgICAgICAgICAgICBAZGVmYXVsdCgwKQogIHRpZW1wb190cmF0YW1pZW50byAgICAgICAgICAgSW50ICAgICAgICAgICAgICAgIEBkZWZhdWx0KDApCiAgcHJvYmxlbWFzX3NhbHVkICAgICAgICAgICAgICBJbnQgICAgICAgICAgICAgICAgQGRlZmF1bHQoMCkKICBlc3RhZG9fc2FsdWQgICAgICAgICAgICAgICAgIEludCAgICAgICAgICAgICAgICBAZGVmYXVsdCgwKQogIGNfaW5ncmVzb3MgICAgICAgICAgICAgICAgICAgQm9vbGVhbiAgICAgICAgICAgIEBkZWZhdWx0KGZhbHNlKQogIGNfZG9taWNpbGlvICAgICAgICAgICAgICAgICAgQm9vbGVhbiAgICAgICAgICAgIEBkZWZhdWx0KGZhbHNlKQogIGNfZWxlY3RvciAgICAgICAgICAgICAgICAgICAgQm9vbGVhbiAgICAgICAgICAgIEBkZWZhdWx0KGZhbHNlKQogIGNfbm9fZGVyZWNob2hhYmllbmNpYSAgICAgICAgQm9vbGVhbiAgICAgICAgICAgIEBkZWZhdWx0KGZhbHNlKQogIGNfZGVmdW5jaW9uICAgICAgICAgICAgICAgICAgQm9vbGVhbiAgICAgICAgICAgIEBkZWZhdWx0KGZhbHNlKQogIG9ic2VydmFjaW9uZXMgICAgICAgICAgICAgICAgU3RyaW5nPyAgICAgICAgICAgIEBkYi5UZXh0CiAgcHVudGFqZV9pbmdyZXNvICAgICAgICAgICAgICBEZWNpbWFsICAgICAgICAgICAgQGRlZmF1bHQoMC4wMCkgQGRiLkRlY2ltYWwoMTAsIDIpCiAgcHVudGFqZV9lZ3Jlc28gICAgICAgICAgICAgICBEZWNpbWFsICAgICAgICAgICAgQGRlZmF1bHQoMC4wMCkgQGRiLkRlY2ltYWwoMTAsIDIpCiAgcHVudGFqZV92aXZpZW5kYSAgICAgICAgICAgICBEZWNpbWFsICAgICAgICAgICAgQGRlZmF1bHQoMC4wMCkgQGRiLkRlY2ltYWwoMTAsIDIpCiAgcHVudGFqZV9vY3VwYWNpb24gICAgICAgICAgICBEZWNpbWFsICAgICAgICAgICAgQGRlZmF1bHQoMC4wMCkgQGRiLkRlY2ltYWwoMTAsIDIpCiAgcHVudGFqZV9zYWx1ZCAgICAgICAgICAgICAgICBEZWNpbWFsICAgICAgICAgICAgQGRlZmF1bHQoMC4wMCkgQGRiLkRlY2ltYWwoMTAsIDIpCiAgcHVudGFqZV90b3RhbCAgICAgICAgICAgICAgICBEZWNpbWFsICAgICAgICAgICAgQGRlZmF1bHQoMC4wMCkgQGRiLkRlY2ltYWwoMTAsIDIpCiAgaWRfZG9taWNpbGlvX3Blcm1hbmVudGUgICAgICBJbnQ/CiAgaWRfZG9taWNpbGlvX3RlbXBvcmFsICAgICAgICBJbnQ/CiAgaWRfZmFtaWxpYXJfcmVwb25zYWJsZSAgICAgICBJbnQ/CiAgbW9kZWxvX2luZ3Jlc28gICAgICAgICAgICAgICBTdHJpbmc/CiAgaWRfaW5ncmVzbyAgICAgICAgICAgICAgICAgICBJbnQ/CiAgaWRfbml2ZWwgICAgICAgICAgICAgICAgICAgICBJbnQ/ICAgICAgICAgICAgICAgQGRiLlVuc2lnbmVkSW50CiAgaWRfcGFjaWVudGUgICAgICAgICAgICAgICAgICBJbnQ/ICAgICAgICAgICAgICAgQGRiLlVuc2lnbmVkSW50CiAgaWRfb2N1cGFjaW9uICAgICAgICAgICAgICAgICBJbnQgICAgICAgICAgICAgICAgQGRlZmF1bHQoMSkgQGRiLlVuc2lnbmVkSW50CiAgaWRfZXNjb2xhcmlkYWQgICAgICAgICAgICAgICBJbnQ/ICAgICAgICAgICAgICAgQGRiLlVuc2lnbmVkSW50CiAgZXNjb2xhcmlkYWRfY29tcGxldGEgICAgICAgICBCb29sZWFuICAgICAgICAgICAgQGRlZmF1bHQoZmFsc2UpCiAgYXRlbmNpb25fcHJpb3JpdGFyaWEgICAgICAgICBTdHJpbmc/CiAgaWRfZWxhYm9ybyAgICAgICAgICAgICAgICAgICBJbnQ/ICAgICAgICAgICAgICAgQGRiLlVuc2lnbmVkSW50CiAgY3JlYXRlZF9hdCAgICAgICAgICAgICAgICAgICBEYXRlVGltZT8gICAgICAgICAgQGRiLlRpbWVzdGFtcCgwKQogIHVwZGF0ZWRfYXQgICAgICAgICAgICAgICAgICAgRGF0ZVRpbWU/ICAgICAgICAgIEBkYi5UaW1lc3RhbXAoMCkKICBkZWxldGVkX2F0ICAgICAgICAgICAgICAgICAgIERhdGVUaW1lPyAgICAgICAgICBAZGIuVGltZXN0YW1wKDApCiAgcmNoX2VtcGxlYWRvcyAgICAgICAgICAgICAgICByY2hfZW1wbGVhZG9zPyAgICAgQHJlbGF0aW9uKGZpZWxkczogW2lkX2VsYWJvcm9dLCByZWZlcmVuY2VzOiBbaWRdLCBvbkRlbGV0ZTogUmVzdHJpY3QsIG9uVXBkYXRlOiBSZXN0cmljdCwgbWFwOiAiaHB6X3BhY2llbnRlX2VzdF9zb2Npb2Vjb25vbWljb19pZF9lbGFib3JvX2ZvcmVpZ24iKQogIGNhdF9lc2NvbGFyaWRhZGVzICAgICAgICAgICAgY2F0X2VzY29sYXJpZGFkZXM/IEByZWxhdGlvbihmaWVsZHM6IFtpZF9lc2NvbGFyaWRhZF0sIHJlZmVyZW5jZXM6IFtpZF0sIG9uRGVsZXRlOiBSZXN0cmljdCwgb25VcGRhdGU6IFJlc3RyaWN0LCBtYXA6ICJocHpfcGFjaWVudGVfZXN0X3NvY2lvZWNvbm9taWNvX2lkX2VzY29sYXJpZGFkX2ZvcmVpZ24iKQogIGNhdF9uaXZlbGVzICAgICAgICAgICAgICAgICAgY2F0X25pdmVsZXM/ICAgICAgIEByZWxhdGlvbihmaWVsZHM6IFtpZF9uaXZlbF0sIHJlZmVyZW5jZXM6IFtpZF0sIG9uRGVsZXRlOiBSZXN0cmljdCwgb25VcGRhdGU6IFJlc3RyaWN0LCBtYXA6ICJocHpfcGFjaWVudGVfZXN0X3NvY2lvZWNvbm9taWNvX2lkX25pdmVsX2ZvcmVpZ24iKQogIGNhdF9vY3VwYWNpb25lcyAgICAgICAgICAgICAgY2F0X29jdXBhY2lvbmVzICAgIEByZWxhdGlvbihmaWVsZHM6IFtpZF9vY3VwYWNpb25dLCByZWZlcmVuY2VzOiBbaWRdLCBvblVwZGF0ZTogUmVzdHJpY3QsIG1hcDogImhwel9wYWNpZW50ZV9lc3Rfc29jaW9lY29ub21pY29faWRfb2N1cGFjaW9uX2ZvcmVpZ24iKQogIGhwel9wYWNpZW50ZSAgICAgICAgICAgICAgICAgaHB6X3BhY2llbnRlPyAgICAgIEByZWxhdGlvbihmaWVsZHM6IFtpZF9wYWNpZW50ZV0sIHJlZmVyZW5jZXM6IFtpZF0sIG9uRGVsZXRlOiBSZXN0cmljdCwgb25VcGRhdGU6IFJlc3RyaWN0LCBtYXA6ICJocHpfcGFjaWVudGVfZXN0X3NvY2lvZWNvbm9taWNvX2lkX3BhY2llbnRlX2ZvcmVpZ24iKQoKICBAQGluZGV4KFtpZF9lbGFib3JvXSwgbWFwOiAiaHB6X3BhY2llbnRlX2VzdF9zb2Npb2Vjb25vbWljb19pZF9lbGFib3JvX2ZvcmVpZ24iKQogIEBAaW5kZXgoW2lkX2VzY29sYXJpZGFkXSwgbWFwOiAiaHB6X3BhY2llbnRlX2VzdF9zb2Npb2Vjb25vbWljb19pZF9lc2NvbGFyaWRhZF9mb3JlaWduIikKICBAQGluZGV4KFtpZF9uaXZlbF0sIG1hcDogImhwel9wYWNpZW50ZV9lc3Rfc29jaW9lY29ub21pY29faWRfbml2ZWxfZm9yZWlnbiIpCiAgQEBpbmRleChbaWRfb2N1cGFjaW9uXSwgbWFwOiAiaHB6X3BhY2llbnRlX2VzdF9zb2Npb2Vjb25vbWljb19pZF9vY3VwYWNpb25fZm9yZWlnbiIpCiAgQEBpbmRleChbaWRfcGFjaWVudGVdLCBtYXA6ICJocHpfcGFjaWVudGVfZXN0X3NvY2lvZWNvbm9taWNvX2lkX3BhY2llbnRlX2ZvcmVpZ24iKQp9Cgptb2RlbCBocHpfcGFjaWVudGVfbm90YV9tZWRpY2EgewogIGlkICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQmlnSW50ICAgICAgICAgICAgICAgICAgICAgIEBpZCBAZGVmYXVsdChhdXRvaW5jcmVtZW50KCkpIEBkYi5VbnNpZ25lZEJpZ0ludAogIGdydXBvICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU3RyaW5nICAgICAgICAgICAgICAgICAgICAgIEBkYi5WYXJDaGFyKDEwMCkKICB0aXBvICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFN0cmluZyAgICAgICAgICAgICAgICAgICAgICBAZGIuVmFyQ2hhcigxMDApCiAgb2JzZXJ2YWNpb25lcyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTdHJpbmc/ICAgICAgICAgICAgICAgICAgICAgQGRiLlRleHQKICBwbGFuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFN0cmluZz8gICAgICAgICAgICAgICAgICAgICBAZGIuVGV4dAogIGNsYXNpZmljYWNpb24gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU3RyaW5nPyAgICAgICAgICAgICAgICAgICAgIEBkYi5WYXJDaGFyKDUwKQogIG1vdGl2b19jYW5jZWxhY2lvbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU3RyaW5nPyAgICAgICAgICAgICAgICAgICAgIEBkYi5UZXh0CiAgcmVmX3VyZ2VuY2lhICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBCb29sZWFuPwogIHJlZl9tb3Rpdm8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU3RyaW5nPyAgICAgICAgICAgICAgICAgICAgIEBkYi5WYXJDaGFyKDI1MCkKICBpZF9yZWZlcmVuY2lhICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEludD8gICAgICAgICAgICAgICAgICAgICAgICBAZGIuVW5zaWduZWRJbnQKICBpZF9wYWNpZW50ZSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEludD8gICAgICAgICAgICAgICAgICAgICAgICBAZGIuVW5zaWduZWRJbnQKICBpZF9pbmdyZXNvICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEludD8gICAgICAgICAgICAgICAgICAgICAgICBAZGIuVW5zaWduZWRJbnQKICBpZF91YmljYWNpb24gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEludD8gICAgICAgICAgICAgICAgICAgICAgICBAZGIuVW5zaWduZWRJbnQKICBpZF91c2VyICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEludCAgICAgICAgICAgICAgICAgICAgICAgICBAZGIuVW5zaWduZWRJbnQKICBpZF91c2VyX2NvbmZpcm1hY2lvbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEludCAgICAgICAgICAgICAgICAgICAgICAgICBAZGIuVW5zaWduZWRJbnQKICBpZF9jYW5jZWxvICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEludD8gICAgICAgICAgICAgICAgICAgICAgICBAZGIuVW5zaWduZWRJbnQKICBpZF9zaWdub3MgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEJpZ0ludD8gICAgICAgICAgICAgICAgICAgICBAZGIuVW5zaWduZWRCaWdJbnQKICBpZF9ldmFsb3JhY2lvbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEludD8KICBjcmVhdGVkX2F0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIERhdGVUaW1lPyAgICAgICAgICAgICAgICAgICBAZGIuVGltZXN0YW1wKDApCiAgdXBkYXRlZF9hdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBEYXRlVGltZT8gICAgICAgICAgICAgICAgICAgQGRiLlRpbWVzdGFtcCgwKQogIGRlbGV0ZWRfYXQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRGF0ZVRpbWU/ICAgICAgICAgICAgICAgICAgIEBkYi5UaW1lc3RhbXAoMCkKICBjbGFzaWZpY2FjaW9uX21lZGljbyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFN0cmluZz8KICBjbGFzaWZpY2FjaW9uX3Npc3RlbWEgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFN0cmluZz8KICBjbGFzaWZpY2FjaW9uX3RyaWFnZSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFN0cmluZz8gICAgICAgICAgICAgICAgICAgICBAZGIuVmFyQ2hhcigzNSkKICBocHpfbm90YV9hbHRhX21lZGljYSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhwel9ub3RhX2FsdGFfbWVkaWNhW10KICBocHpfbm90YXNfZGlhZ25vc3RpY29zICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhwel9ub3Rhc19kaWFnbm9zdGljb3NbXQogIHVzZXJzX2hwel9wYWNpZW50ZV9ub3RhX21lZGljYV9pZF9jYW5jZWxvVG91c2VycyAgICAgICAgICAgdXNlcnM/ICAgICAgICAgICAgICAgICAgICAgIEByZWxhdGlvbigiaHB6X3BhY2llbnRlX25vdGFfbWVkaWNhX2lkX2NhbmNlbG9Ub3VzZXJzIiwgZmllbGRzOiBbaWRfY2FuY2Vsb10sIHJlZmVyZW5jZXM6IFtpZF0sIG9uRGVsZXRlOiBSZXN0cmljdCwgb25VcGRhdGU6IFJlc3RyaWN0LCBtYXA6ICJocHpfcGFjaWVudGVfbm90YV9tZWRpY2FfaWRfY2FuY2Vsb19mb3JlaWduIikKICBocHpfaW5ncmVzb19ob3NwaXRhbGFyaW8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhwel9pbmdyZXNvX2hvc3BpdGFsYXJpbz8gICBAcmVsYXRpb24oZmllbGRzOiBbaWRfaW5ncmVzb10sIHJlZmVyZW5jZXM6IFtpZF0sIG9uRGVsZXRlOiBSZXN0cmljdCwgb25VcGRhdGU6IFJlc3RyaWN0LCBtYXA6ICJocHpfcGFjaWVudGVfbm90YV9tZWRpY2FfaWRfaW5ncmVzb19mb3JlaWduIikKICBocHpfcGFjaWVudGUgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhwel9wYWNpZW50ZT8gICAgICAgICAgICAgICBAcmVsYXRpb24oZmllbGRzOiBbaWRfcGFjaWVudGVdLCByZWZlcmVuY2VzOiBbaWRdLCBvbkRlbGV0ZTogUmVzdHJpY3QsIG9uVXBkYXRlOiBSZXN0cmljdCwgbWFwOiAiaHB6X3BhY2llbnRlX25vdGFfbWVkaWNhX2lkX3BhY2llbnRlX2ZvcmVpZ24iKQogIGhwel9pbmdyZXNvX3NpZ25vc192aXRhbGVzICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHB6X2luZ3Jlc29fc2lnbm9zX3ZpdGFsZXM/IEByZWxhdGlvbihmaWVsZHM6IFtpZF9zaWdub3NdLCByZWZlcmVuY2VzOiBbaWRdLCBvbkRlbGV0ZTogUmVzdHJpY3QsIG9uVXBkYXRlOiBSZXN0cmljdCwgbWFwOiAiaHB6X3BhY2llbnRlX25vdGFfbWVkaWNhX2lkX3NpZ25vc19mb3JlaWduIikKICBocHpfY2FtYV9oaXN0b3JpYWwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhwel9jYW1hX2hpc3RvcmlhbD8gICAgICAgICBAcmVsYXRpb24oZmllbGRzOiBbaWRfdWJpY2FjaW9uXSwgcmVmZXJlbmNlczogW2lkXSwgb25EZWxldGU6IFJlc3RyaWN0LCBvblVwZGF0ZTogUmVzdHJpY3QsIG1hcDogImhwel9wYWNpZW50ZV9ub3RhX21lZGljYV9pZF91YmljYWNpb25fZm9yZWlnbiIpCiAgdXNlcnNfaHB6X3BhY2llbnRlX25vdGFfbWVkaWNhX2lkX3VzZXJfY29uZmlybWFjaW9uVG91c2VycyB1c2VycyAgICAgICAgICAgICAgICAgICAgICAgQHJlbGF0aW9uKCJocHpfcGFjaWVudGVfbm90YV9tZWRpY2FfaWRfdXNlcl9jb25maXJtYWNpb25Ub3VzZXJzIiwgZmllbGRzOiBbaWRfdXNlcl9jb25maXJtYWNpb25dLCByZWZlcmVuY2VzOiBbaWRdLCBvblVwZGF0ZTogUmVzdHJpY3QsIG1hcDogImhwel9wYWNpZW50ZV9ub3RhX21lZGljYV9pZF91c2VyX2NvbmZpcm1hY2lvbl9mb3JlaWduIikKICB1c2Vyc19ocHpfcGFjaWVudGVfbm90YV9tZWRpY2FfaWRfdXNlclRvdXNlcnMgICAgICAgICAgICAgIHVzZXJzICAgICAgICAgICAgICAgICAgICAgICBAcmVsYXRpb24oImhwel9wYWNpZW50ZV9ub3RhX21lZGljYV9pZF91c2VyVG91c2VycyIsIGZpZWxkczogW2lkX3VzZXJdLCByZWZlcmVuY2VzOiBbaWRdLCBvblVwZGF0ZTogUmVzdHJpY3QsIG1hcDogImhwel9wYWNpZW50ZV9ub3RhX21lZGljYV9pZF91c2VyX2ZvcmVpZ24iKQoKICBAQGluZGV4KFtpZF9jYW5jZWxvXSwgbWFwOiAiaHB6X3BhY2llbnRlX25vdGFfbWVkaWNhX2lkX2NhbmNlbG9fZm9yZWlnbiIpCiAgQEBpbmRleChbaWRfaW5ncmVzb10sIG1hcDogImhwel9wYWNpZW50ZV9ub3RhX21lZGljYV9pZF9pbmdyZXNvX2ZvcmVpZ24iKQogIEBAaW5kZXgoW2lkX3BhY2llbnRlXSwgbWFwOiAiaHB6X3BhY2llbnRlX25vdGFfbWVkaWNhX2lkX3BhY2llbnRlX2ZvcmVpZ24iKQogIEBAaW5kZXgoW2lkX3NpZ25vc10sIG1hcDogImhwel9wYWNpZW50ZV9ub3RhX21lZGljYV9pZF9zaWdub3NfZm9yZWlnbiIpCiAgQEBpbmRleChbaWRfdWJpY2FjaW9uXSwgbWFwOiAiaHB6X3BhY2llbnRlX25vdGFfbWVkaWNhX2lkX3ViaWNhY2lvbl9mb3JlaWduIikKICBAQGluZGV4KFtpZF91c2VyX2NvbmZpcm1hY2lvbl0sIG1hcDogImhwel9wYWNpZW50ZV9ub3RhX21lZGljYV9pZF91c2VyX2NvbmZpcm1hY2lvbl9mb3JlaWduIikKICBAQGluZGV4KFtpZF91c2VyXSwgbWFwOiAiaHB6X3BhY2llbnRlX25vdGFfbWVkaWNhX2lkX3VzZXJfZm9yZWlnbiIpCn0KCm1vZGVsIGhwel9wYWNpZW50ZV9ub3RhX3RyYWJham9fc29jaWFsIHsKICBpZCAgICAgICAgICAgICAgICAgICAgICAgQmlnSW50ICAgICAgICAgICAgICAgICAgICBAaWQgQGRlZmF1bHQoYXV0b2luY3JlbWVudCgpKSBAZGIuVW5zaWduZWRCaWdJbnQKICBvYnNlcnZhY2lvbmVzICAgICAgICAgICAgU3RyaW5nPyAgICAgICAgICAgICAgICAgICBAZGIuVGV4dAogIGlkX3BhY2llbnRlICAgICAgICAgICAgICBJbnQ/ICAgICAgICAgICAgICAgICAgICAgIEBkYi5VbnNpZ25lZEludAogIGlkX2luZ3Jlc28gICAgICAgICAgICAgICBJbnQ/ICAgICAgICAgICAgICAgICAgICAgIEBkYi5VbnNpZ25lZEludAogIGlkX3VzZXIgICAgICAgICAgICAgICAgICBJbnQgICAgICAgICAgICAgICAgICAgICAgIEBkYi5VbnNpZ25lZEludAogIGNyZWF0ZWRfYXQgICAgICAgICAgICAgICBEYXRlVGltZT8gICAgICAgICAgICAgICAgIEBkYi5UaW1lc3RhbXAoMCkKICB1cGRhdGVkX2F0ICAgICAgICAgICAgICAgRGF0ZVRpbWU/ICAgICAgICAgICAgICAgICBAZGIuVGltZXN0YW1wKDApCiAgZGVsZXRlZF9hdCAgICAgICAgICAgICAgIERhdGVUaW1lPyAgICAgICAgICAgICAgICAgQGRiLlRpbWVzdGFtcCgwKQogIGhwel9pbmdyZXNvX2hvc3BpdGFsYXJpbyBocHpfaW5ncmVzb19ob3NwaXRhbGFyaW8/IEByZWxhdGlvbihmaWVsZHM6IFtpZF9pbmdyZXNvXSwgcmVmZXJlbmNlczogW2lkXSwgb25EZWxldGU6IFJlc3RyaWN0LCBvblVwZGF0ZTogUmVzdHJpY3QsIG1hcDogImhwel9wYWNpZW50ZV9ub3RhX3RyYWJham9fc29jaWFsX2lkX2luZ3Jlc29fZm9yZWlnbiIpCiAgaHB6X3BhY2llbnRlICAgICAgICAgICAgIGhwel9wYWNpZW50ZT8gICAgICAgICAgICAgQHJlbGF0aW9uKGZpZWxkczogW2lkX3BhY2llbnRlXSwgcmVmZXJlbmNlczogW2lkXSwgb25EZWxldGU6IFJlc3RyaWN0LCBvblVwZGF0ZTogUmVzdHJpY3QsIG1hcDogImhwel9wYWNpZW50ZV9ub3RhX3RyYWJham9fc29jaWFsX2lkX3BhY2llbnRlX2ZvcmVpZ24iKQogIHVzZXJzICAgICAgICAgICAgICAgICAgICB1c2VycyAgICAgICAgICAgICAgICAgICAgIEByZWxhdGlvbihmaWVsZHM6IFtpZF91c2VyXSwgcmVmZXJlbmNlczogW2lkXSwgb25VcGRhdGU6IFJlc3RyaWN0LCBtYXA6ICJocHpfcGFjaWVudGVfbm90YV90cmFiYWpvX3NvY2lhbF9pZF91c2VyX2ZvcmVpZ24iKQoKICBAQGluZGV4KFtpZF9pbmdyZXNvXSwgbWFwOiAiaHB6X3BhY2llbnRlX25vdGFfdHJhYmFqb19zb2NpYWxfaWRfaW5ncmVzb19mb3JlaWduIikKICBAQGluZGV4KFtpZF9wYWNpZW50ZV0sIG1hcDogImhwel9wYWNpZW50ZV9ub3RhX3RyYWJham9fc29jaWFsX2lkX3BhY2llbnRlX2ZvcmVpZ24iKQogIEBAaW5kZXgoW2lkX3VzZXJdLCBtYXA6ICJocHpfcGFjaWVudGVfbm90YV90cmFiYWpvX3NvY2lhbF9pZF91c2VyX2ZvcmVpZ24iKQp9Cgptb2RlbCBocHpfcGF0b2xvZ2lhX2VzdHVkaW9zIHsKICBpZCAgICAgICAgICAgICAgICAgICAgICAgICAgIEJpZ0ludCAgICAgICAgICAgICAgICAgICAgICAgIEBpZCBAZGVmYXVsdChhdXRvaW5jcmVtZW50KCkpIEBkYi5VbnNpZ25lZEJpZ0ludAogIGNvbnNlY3V0aXZvICAgICAgICAgICAgICAgICAgSW50CiAgYW5pbyAgICAgICAgICAgICAgICAgICAgICAgICBTdHJpbmcgICAgICAgICAgICAgICAgICAgICAgICBAZGIuVmFyQ2hhcig0KQogIG1hY3Jvc2NvcGljYSAgICAgICAgICAgICAgICAgU3RyaW5nPyAgICAgICAgICAgICAgICAgICAgICAgQGRiLlRleHQKICBtaWNyb3Njb3BpY2EgICAgICAgICAgICAgICAgIFN0cmluZz8gICAgICAgICAgICAgICAgICAgICAgIEBkYi5UZXh0CiAgY29ydGVzX3NvYnJhbnRlcyAgICAgICAgICAgICBTdHJpbmc/ICAgICAgICAgICAgICAgICAgICAgICBAZGIuVGV4dAogIGR4X2luZm9ybWFsICAgICAgICAgICAgICAgICAgU3RyaW5nPyAgICAgICAgICAgICAgICAgICAgICAgQGRiLlRleHQKICBvYnNlcnZhY2lvbmVzICAgICAgICAgICAgICAgIFN0cmluZz8gICAgICAgICAgICAgICAgICAgICAgIEBkYi5UZXh0CiAgZXN0YXR1cyAgICAgICAgICAgICAgICAgICAgICBTdHJpbmc/ICAgICAgICAgICAgICAgICAgICAgICBAZGIuVGV4dAogIHJldmlzaW9uICAgICAgICAgICAgICAgICAgICAgQm9vbGVhbiAgICAgICAgICAgICAgICAgICAgICAgQGRlZmF1bHQoZmFsc2UpCiAgaWRfdGlwbyAgICAgICAgICAgICAgICAgICAgICBJbnQgICAgICAgICAgICAgICAgICAgICAgICAgICBAZGIuVW5zaWduZWRJbnQKICBpZF9wcm9jZWRpbWllbnRvICAgICAgICAgICAgIEludD8gICAgICAgICAgICAgICAgICAgICAgICAgIEBkYi5VbnNpZ25lZEludAogIGlkX2RpYWdub3N0aWNvICAgICAgICAgICAgICAgSW50PyAgICAgICAgICAgICAgICAgICAgICAgICAgQGRiLlVuc2lnbmVkSW50CiAgaWRfcGF0b2xvZ28gICAgICAgICAgICAgICAgICBJbnQ/ICAgICAgICAgICAgICAgICAgICAgICAgICBAZGIuVW5zaWduZWRJbnQKICBpZF9wZXJzb25hICAgICAgICAgICAgICAgICAgIEludCAgICAgICAgICAgICAgICAgICAgICAgICAgIEBkYi5VbnNpZ25lZEludAogIGlkX3BhY2llbnRlICAgICAgICAgICAgICAgICAgSW50PyAgICAgICAgICAgICAgICAgICAgICAgICAgQGRiLlVuc2lnbmVkSW50CiAgaWRfaW5ncmVzbyAgICAgICAgICAgICAgICAgICBJbnQ/ICAgICAgICAgICAgICAgICAgICAgICAgICBAZGIuVW5zaWduZWRJbnQKICBjcmVhdGVkX2F0ICAgICAgICAgICAgICAgICAgIERhdGVUaW1lPyAgICAgICAgICAgICAgICAgICAgIEBkYi5UaW1lc3RhbXAoMCkKICB1cGRhdGVkX2F0ICAgICAgICAgICAgICAgICAgIERhdGVUaW1lPyAgICAgICAgICAgICAgICAgICAgIEBkYi5UaW1lc3RhbXAoMCkKICBkZWxldGVkX2F0ICAgICAgICAgICAgICAgICAgIERhdGVUaW1lPyAgICAgICAgICAgICAgICAgICAgIEBkYi5UaW1lc3RhbXAoMCkKICBjYXRfY2llMTAgICAgICAgICAgICAgICAgICAgIGNhdF9jaWUxMD8gICAgICAgICAgICAgICAgICAgIEByZWxhdGlvbihmaWVsZHM6IFtpZF9kaWFnbm9zdGljb10sIHJlZmVyZW5jZXM6IFtpZF0sIG9uRGVsZXRlOiBSZXN0cmljdCwgb25VcGRhdGU6IFJlc3RyaWN0LCBtYXA6ICJocHpfcGF0b2xvZ2lhX2VzdHVkaW9zX2lkX2RpYWdub3N0aWNvX2ZvcmVpZ24iKQogIGhwel9pbmdyZXNvX2hvc3BpdGFsYXJpbyAgICAgaHB6X2luZ3Jlc29faG9zcGl0YWxhcmlvPyAgICAgQHJlbGF0aW9uKGZpZWxkczogW2lkX2luZ3Jlc29dLCByZWZlcmVuY2VzOiBbaWRdLCBvbkRlbGV0ZTogUmVzdHJpY3QsIG9uVXBkYXRlOiBSZXN0cmljdCwgbWFwOiAiaHB6X3BhdG9sb2dpYV9lc3R1ZGlvc19pZF9pbmdyZXNvX2ZvcmVpZ24iKQogIGhwel9wYWNpZW50ZSAgICAgICAgICAgICAgICAgaHB6X3BhY2llbnRlPyAgICAgICAgICAgICAgICAgQHJlbGF0aW9uKGZpZWxkczogW2lkX3BhY2llbnRlXSwgcmVmZXJlbmNlczogW2lkXSwgb25EZWxldGU6IFJlc3RyaWN0LCBvblVwZGF0ZTogUmVzdHJpY3QsIG1hcDogImhwel9wYXRvbG9naWFfZXN0dWRpb3NfaWRfcGFjaWVudGVfZm9yZWlnbiIpCiAgcmNoX2VtcGxlYWRvcyAgICAgICAgICAgICAgICByY2hfZW1wbGVhZG9zPyAgICAgICAgICAgICAgICBAcmVsYXRpb24oZmllbGRzOiBbaWRfcGF0b2xvZ29dLCByZWZlcmVuY2VzOiBbaWRdLCBvbkRlbGV0ZTogUmVzdHJpY3QsIG9uVXBkYXRlOiBSZXN0cmljdCwgbWFwOiAiaHB6X3BhdG9sb2dpYV9lc3R1ZGlvc19pZF9wYXRvbG9nb19mb3JlaWduIikKICBjbXBfcGVyc29uYSAgICAgICAgICAgICAgICAgIGNtcF9wZXJzb25hICAgICAgICAgICAgICAgICAgIEByZWxhdGlvbihmaWVsZHM6IFtpZF9wZXJzb25hXSwgcmVmZXJlbmNlczogW2lkXSwgb25VcGRhdGU6IFJlc3RyaWN0LCBtYXA6ICJocHpfcGF0b2xvZ2lhX2VzdHVkaW9zX2lkX3BlcnNvbmFfZm9yZWlnbiIpCiAgY2F0X3BhdG9sb2dpYV9wcm9jZWRpbWllbnRvcyBjYXRfcGF0b2xvZ2lhX3Byb2NlZGltaWVudG9zPyBAcmVsYXRpb24oZmllbGRzOiBbaWRfcHJvY2VkaW1pZW50b10sIHJlZmVyZW5jZXM6IFtpZF0sIG9uRGVsZXRlOiBSZXN0cmljdCwgb25VcGRhdGU6IFJlc3RyaWN0LCBtYXA6ICJocHpfcGF0b2xvZ2lhX2VzdHVkaW9zX2lkX3Byb2NlZGltaWVudG9fZm9yZWlnbiIpCiAgY2F0X3BhdG9sb2dpYV90aXBvX2VzdHVkaW8gICBjYXRfcGF0b2xvZ2lhX3RpcG9fZXN0dWRpbyAgICBAcmVsYXRpb24oZmllbGRzOiBbaWRfdGlwb10sIHJlZmVyZW5jZXM6IFtpZF0sIG9uVXBkYXRlOiBSZXN0cmljdCwgbWFwOiAiaHB6X3BhdG9sb2dpYV9lc3R1ZGlvc19pZF90aXBvX2ZvcmVpZ24iKQoKICBAQGluZGV4KFtpZF9kaWFnbm9zdGljb10sIG1hcDogImhwel9wYXRvbG9naWFfZXN0dWRpb3NfaWRfZGlhZ25vc3RpY29fZm9yZWlnbiIpCiAgQEBpbmRleChbaWRfaW5ncmVzb10sIG1hcDogImhwel9wYXRvbG9naWFfZXN0dWRpb3NfaWRfaW5ncmVzb19mb3JlaWduIikKICBAQGluZGV4KFtpZF9wYWNpZW50ZV0sIG1hcDogImhwel9wYXRvbG9naWFfZXN0dWRpb3NfaWRfcGFjaWVudGVfZm9yZWlnbiIpCiAgQEBpbmRleChbaWRfcGF0b2xvZ29dLCBtYXA6ICJocHpfcGF0b2xvZ2lhX2VzdHVkaW9zX2lkX3BhdG9sb2dvX2ZvcmVpZ24iKQogIEBAaW5kZXgoW2lkX3BlcnNvbmFdLCBtYXA6ICJocHpfcGF0b2xvZ2lhX2VzdHVkaW9zX2lkX3BlcnNvbmFfZm9yZWlnbiIpCiAgQEBpbmRleChbaWRfcHJvY2VkaW1pZW50b10sIG1hcDogImhwel9wYXRvbG9naWFfZXN0dWRpb3NfaWRfcHJvY2VkaW1pZW50b19mb3JlaWduIikKICBAQGluZGV4KFtpZF90aXBvXSwgbWFwOiAiaHB6X3BhdG9sb2dpYV9lc3R1ZGlvc19pZF90aXBvX2ZvcmVpZ24iKQp9Cgptb2RlbCBpbmNfZXZlbnRvc19hZHZlcnNvcyB7CiAgaWQgICAgICAgICAgICAgICAgIEJpZ0ludCAgICAgICBAaWQgQGRlZmF1bHQoYXV0b2luY3JlbWVudCgpKSBAZGIuVW5zaWduZWRCaWdJbnQKICBmb2xpbyAgICAgICAgICAgICAgU3RyaW5nICAgICAgIEBkYi5WYXJDaGFyKDEwKQogIHBlcnNvbmFfbm90aWZpY2EgICBTdHJpbmcgICAgICAgQGRlZmF1bHQoIk5PIEVTUEVDSUZJQ0FETyIpIEBkYi5WYXJDaGFyKDEwMCkKICBwZXJzb25hX3JlcG9ydGEgICAgU3RyaW5nICAgICAgIEBkZWZhdWx0KCJOTyBFU1BFQ0lGSUNBRE8iKSBAZGIuVmFyQ2hhcigxMDApCiAgZmVjaGFfZXZlbnRvICAgICAgIERhdGVUaW1lICAgICBAZGIuRGF0ZVRpbWUoMCkKICBwcmVndW50YTEgICAgICAgICAgU3RyaW5nICAgICAgIEBkZWZhdWx0KCJOTyIpCiAgcHJlZ3VudGEyICAgICAgICAgIFN0cmluZwogIHByZWd1bnRhMyAgICAgICAgICBTdHJpbmcKICBwcmVndW50YTQgICAgICAgICAgU3RyaW5nCiAgcHJlZ3VudGE1ICAgICAgICAgIFN0cmluZwogIGRlc2NyaXBjaW9uX2V2ZW50byBTdHJpbmcgICAgICAgQGRiLlRleHQKICBwcmVndW50YTdfb3RybyAgICAgU3RyaW5nCiAgcHJlZ3VudGE4ICAgICAgICAgIFN0cmluZyAgICAgICBAZGVmYXVsdCgiTk8iKQogIHByZWd1bnRhOSAgICAgICAgICBTdHJpbmcKICBwcmVndW50YTEwICAgICAgICAgU3RyaW5nCiAgaWRfcGFjaWVudGUgICAgICAgIEludCAgICAgICAgICBAZGIuVW5zaWduZWRJbnQKICBjcmVhdGVkX2F0ICAgICAgICAgRGF0ZVRpbWU/ICAgIEBkYi5UaW1lc3RhbXAoMCkKICB1cGRhdGVkX2F0ICAgICAgICAgRGF0ZVRpbWU/ICAgIEBkYi5UaW1lc3RhbXAoMCkKICBocHpfcGFjaWVudGUgICAgICAgaHB6X3BhY2llbnRlIEByZWxhdGlvbihmaWVsZHM6IFtpZF9wYWNpZW50ZV0sIHJlZmVyZW5jZXM6IFtpZF0sIG9uVXBkYXRlOiBSZXN0cmljdCwgbWFwOiAiaW5jX2V2ZW50b3NfYWR2ZXJzb3NfaWRfcGFjaWVudGVfZm9yZWlnbiIpCgogIEBAaW5kZXgoW2lkX3BhY2llbnRlXSwgbWFwOiAiaW5jX2V2ZW50b3NfYWR2ZXJzb3NfaWRfcGFjaWVudGVfZm9yZWlnbiIpCn0KCm1vZGVsIGludF9tZW51IHsKICBpZF9tZW51ICAgIEludCAgICAgICBAaWQgQGRlZmF1bHQoYXV0b2luY3JlbWVudCgpKSBAZGIuVW5zaWduZWRJbnQKICBub21icmUgICAgIFN0cmluZwogIGljb25vICAgICAgU3RyaW5nCiAgc2x1ZyAgICAgICBTdHJpbmcgICAgQHVuaXF1ZShtYXA6ICJpbnRfbWVudV9zbHVnX3VuaXF1ZSIpIEBkYi5WYXJDaGFyKDE1MCkKICBwYXJlbnQgICAgIEludCAgICAgICBAZGVmYXVsdCgwKSBAZGIuVW5zaWduZWRJbnQKICBvcmRlciAgICAgIEludD8gICAgICBAZGIuU21hbGxJbnQKICBlbmFibGVkICAgIEJvb2xlYW4gICBAZGVmYXVsdCh0cnVlKQogIGNyZWF0ZWRfYXQgRGF0ZVRpbWU/IEBkYi5UaW1lc3RhbXAoMCkKICB1cGRhdGVkX2F0IERhdGVUaW1lPyBAZGIuVGltZXN0YW1wKDApCiAgaWRfcGFnZSAgICBJbnQ/ICAgICAgQGRiLlVuc2lnbmVkSW50CiAgaW50X3BhZ2UgICBpbnRfcGFnZT8gQHJlbGF0aW9uKGZpZWxkczogW2lkX3BhZ2VdLCByZWZlcmVuY2VzOiBbaWRfcGFnZV0sIG9uRGVsZXRlOiBSZXN0cmljdCwgb25VcGRhdGU6IFJlc3RyaWN0LCBtYXA6ICJpbnRfbWVudV9pZF9wYWdlX2ZvcmVpZ24iKQoKICBAQGluZGV4KFtpZF9wYWdlXSwgbWFwOiAiaW50X21lbnVfaWRfcGFnZV9mb3JlaWduIikKfQoKbW9kZWwgaW50X3BhZ2UgewogIGlkX3BhZ2UgICAgSW50ICAgICAgICAgICAgICBAaWQgQGRlZmF1bHQoYXV0b2luY3JlbWVudCgpKSBAZGIuVW5zaWduZWRJbnQKICB0aXR1bG8gICAgIFN0cmluZwogIGNvbnRlbmlkbyAgU3RyaW5nICAgICAgICAgICBAZGIuVGV4dAogIGltYWdlbiAgICAgU3RyaW5nPwogIHNsdWcgICAgICAgU3RyaW5nICAgICAgICAgICBAdW5pcXVlKG1hcDogImludF9wYWdlX3NsdWdfdW5pcXVlIikKICBlc3RhdHVzICAgIGludF9wYWdlX2VzdGF0dXMgQGRlZmF1bHQoUFVCTElDQURPKQogIGNyZWF0ZWRfYXQgRGF0ZVRpbWU/ICAgICAgICBAZGIuVGltZXN0YW1wKDApCiAgdXBkYXRlZF9hdCBEYXRlVGltZT8gICAgICAgIEBkYi5UaW1lc3RhbXAoMCkKICBkZWxldGVkX2F0IERhdGVUaW1lPyAgICAgICAgQGRiLlRpbWVzdGFtcCgwKQogIGludF9tZW51ICAgaW50X21lbnVbXQp9Cgptb2RlbCBpbnZfYWRxdWlzaWNpb25lcyB7CiAgaWQgICAgICAgICAgICAgICBCaWdJbnQgICAgICAgICAgICAgQGlkIEBkZWZhdWx0KGF1dG9pbmNyZW1lbnQoKSkgQGRiLlVuc2lnbmVkQmlnSW50CiAgdGlwb19hZHF1aXNpY2lvbiBTdHJpbmcKICBjcmVhdGVkX2F0ICAgICAgIERhdGVUaW1lPyAgICAgICAgICBAZGIuVGltZXN0YW1wKDApCiAgdXBkYXRlZF9hdCAgICAgICBEYXRlVGltZT8gICAgICAgICAgQGRiLlRpbWVzdGFtcCgwKQogIGRlbGV0ZWRfYXQgICAgICAgRGF0ZVRpbWU/ICAgICAgICAgIEBkYi5UaW1lc3RhbXAoMCkKICBpbnZfYmllbmVzICAgICAgIGludl9iaWVuZXNbXQogIGludl9iaWVuZXNfY29ydGUgaW52X2JpZW5lc19jb3J0ZVtdCn0KCm1vZGVsIGludl9iaWVuZXMgewogIGlkICAgICAgICAgICAgICAgICAgICBCaWdJbnQgICAgICAgICAgICAgICAgICBAaWQgQHVuaXF1ZShtYXA6ICJpZCIpIEBkZWZhdWx0KGF1dG9pbmNyZW1lbnQoKSkgQGRiLlVuc2lnbmVkQmlnSW50CiAgY2xhdmVfY2FlICAgICAgICAgICAgIFN0cmluZyAgICAgICAgICAgICAgICAgIEB1bmlxdWUobWFwOiAiY2xhdmVfY2FlIikKICBudW1fYmllbiAgICAgICAgICAgICAgU3RyaW5nCiAgaWRfc2VzdmVyICAgICAgICAgICAgIFN0cmluZz8gICAgICAgICAgICAgICAgIEBkYi5WYXJDaGFyKDUwKQogIGZlY2hhX2VudHJlZ2EgICAgICAgICBEYXRlVGltZT8gICAgICAgICAgICAgICBAZGIuRGF0ZQogIGZlY2hhX29maWNpb19iYWphICAgICBEYXRlVGltZT8gICAgICAgICAgICAgICBAZGIuRGF0ZQogIG9maWNpb19iYWphICAgICAgICAgICBTdHJpbmc/CiAgbW90aXZvX2JhamEgICAgICAgICAgIFN0cmluZz8gICAgICAgICAgICAgICAgIEBkYi5UZXh0CiAgaW52ZW50YXJpYWRvICAgICAgICAgIERhdGVUaW1lPyAgICAgICAgICAgICAgIEBkYi5EYXRlCiAgc3RhdHVzX2JpZW4gICAgICAgICAgIFN0cmluZyAgICAgICAgICAgICAgICAgIEBkYi5WYXJDaGFyKDMwKQogIGRvY19mZWNoYSAgICAgICAgICAgICBEYXRlVGltZT8gICAgICAgICAgICAgICBAZGIuRGF0ZQogIGRvY19udW0gICAgICAgICAgICAgICBTdHJpbmc/CiAgZG9jX3ByZWNpbyAgICAgICAgICAgIEZsb2F0PwogIGRvY19mb2xpbyAgICAgICAgICAgICBTdHJpbmc/ICAgICAgICAgICAgICAgICBAZGIuVmFyQ2hhcigzMCkKICBkb2NfcHJvdmVlZG9yICAgICAgICAgU3RyaW5nPyAgICAgICAgICAgICAgICAgQGRiLlZhckNoYXIoMjAwKQogIGRlc19tYXJjYSAgICAgICAgICAgICBTdHJpbmc/ICAgICAgICAgICAgICAgICBAZGIuVmFyQ2hhcig1MCkKICBkZXNfbW9kZWxvICAgICAgICAgICAgU3RyaW5nPyAgICAgICAgICAgICAgICAgQGRiLlZhckNoYXIoNTApCiAgZGVzX251bV9zZXJpZSAgICAgICAgIFN0cmluZz8gICAgICAgICAgICAgICAgIEBkYi5WYXJDaGFyKDUwKQogIGRlc19udW1fY2F0YWxvZ28gICAgICBTdHJpbmc/ICAgICAgICAgICAgICAgICBAZGIuVmFyQ2hhcigxNSkKICBkZXNfbWVkaWRhcyAgICAgICAgICAgU3RyaW5nPyAgICAgICAgICAgICAgICAgQGRiLlZhckNoYXIoMjApCiAgZGVzX2VzdHJ1Y3R1cmEgICAgICAgIFN0cmluZz8KICBkZXNfY29sb3IgICAgICAgICAgICAgU3RyaW5nPyAgICAgICAgICAgICAgICAgQGRiLlZhckNoYXIoMzApCiAgZGVzX25vbWJyZSAgICAgICAgICAgIFN0cmluZz8KICBkZXNfbnVtX2NoYXJvbGEgICAgICAgU3RyaW5nPyAgICAgICAgICAgICAgICAgQGRiLlZhckNoYXIoNTApCiAgZGVzX29ic2VydmFjaW9uZXMgICAgIFN0cmluZz8gICAgICAgICAgICAgICAgIEBkYi5UZXh0CiAgaWRfdGlwb19tdWVibGUgICAgICAgIEJpZ0ludD8gICAgICAgICAgICAgICAgIEBkYi5VbnNpZ25lZEJpZ0ludAogIGlkX3ViaWNhY2lvbiAgICAgICAgICBCaWdJbnQ/ICAgICAgICAgICAgICAgICBAZGIuVW5zaWduZWRCaWdJbnQKICBpZF9kb2NfdGlwbyAgICAgICAgICAgQmlnSW50PyAgICAgICAgICAgICAgICAgQGRiLlVuc2lnbmVkQmlnSW50CiAgaWRfZG9jX2FkcXVpc2ljaW9uICAgIEJpZ0ludD8gICAgICAgICAgICAgICAgIEBkYi5VbnNpZ25lZEJpZ0ludAogIGlkX2RvY192YWx1YWNpb24gICAgICBCaWdJbnQ/ICAgICAgICAgICAgICAgICBAZGIuVW5zaWduZWRCaWdJbnQKICBpZF9kb2NfcHJvZ3JhbWEgICAgICAgSW50PyAgICAgICAgICAgICAgICAgICAgQGRiLlVuc2lnbmVkSW50CiAgaWRfZGVzX2VzcGVjaWFsaWRhZCAgIEJpZ0ludD8gICAgICAgICAgICAgICAgIEBkYi5VbnNpZ25lZEJpZ0ludAogIGlkX2NhcGl0dWxvICAgICAgICAgICBCaWdJbnQ/ICAgICAgICAgICAgICAgICBAZGIuVW5zaWduZWRCaWdJbnQKICBjcmVhdGVkX2F0ICAgICAgICAgICAgRGF0ZVRpbWU/ICAgICAgICAgICAgICAgQGRiLlRpbWVzdGFtcCgwKQogIHVwZGF0ZWRfYXQgICAgICAgICAgICBEYXRlVGltZT8gICAgICAgICAgICAgICBAZGIuVGltZXN0YW1wKDApCiAgZGVsZXRlZF9hdCAgICAgICAgICAgIERhdGVUaW1lPyAgICAgICAgICAgICAgIEBkYi5UaW1lc3RhbXAoMCkKICBhY3Rpdm9fZmlqbyAgICAgICAgICAgSW50PwogIGludl9jYXRfbXVlYmxlICAgICAgICBpbnZfY2F0X211ZWJsZT8gICAgICAgICBAcmVsYXRpb24oZmllbGRzOiBbaWRfdGlwb19tdWVibGVdLCByZWZlcmVuY2VzOiBbaWRdLCBvbkRlbGV0ZTogUmVzdHJpY3QsIG9uVXBkYXRlOiBSZXN0cmljdCwgbWFwOiAiaW52X2JpZW5lc19pYmZrXzEiKQogIGludl9jYXRfdWJpY2FjaW9uZXMgICBpbnZfY2F0X3ViaWNhY2lvbmVzPyAgICBAcmVsYXRpb24oZmllbGRzOiBbaWRfdWJpY2FjaW9uXSwgcmVmZXJlbmNlczogW2lkXSwgb25EZWxldGU6IFJlc3RyaWN0LCBvblVwZGF0ZTogUmVzdHJpY3QsIG1hcDogImludl9iaWVuZXNfaWJma18yIikKICBpbnZfdGlwb19kb2N1bWVudG8gICAgaW52X3RpcG9fZG9jdW1lbnRvPyAgICAgQHJlbGF0aW9uKGZpZWxkczogW2lkX2RvY190aXBvXSwgcmVmZXJlbmNlczogW2lkXSwgb25EZWxldGU6IFJlc3RyaWN0LCBvblVwZGF0ZTogUmVzdHJpY3QsIG1hcDogImludl9iaWVuZXNfaWJma18zIikKICBpbnZfYWRxdWlzaWNpb25lcyAgICAgaW52X2FkcXVpc2ljaW9uZXM/ICAgICAgQHJlbGF0aW9uKGZpZWxkczogW2lkX2RvY19hZHF1aXNpY2lvbl0sIHJlZmVyZW5jZXM6IFtpZF0sIG9uRGVsZXRlOiBSZXN0cmljdCwgb25VcGRhdGU6IFJlc3RyaWN0LCBtYXA6ICJpbnZfYmllbmVzX2liZmtfNCIpCiAgaW52X3ZhbHVhY2lvbmVzICAgICAgIGludl92YWx1YWNpb25lcz8gICAgICAgIEByZWxhdGlvbihmaWVsZHM6IFtpZF9kb2NfdmFsdWFjaW9uXSwgcmVmZXJlbmNlczogW2lkXSwgb25EZWxldGU6IFJlc3RyaWN0LCBvblVwZGF0ZTogUmVzdHJpY3QsIG1hcDogImludl9iaWVuZXNfaWJma181IikKICBjYXRfcHJvZ3JhbWFzICAgICAgICAgY2F0X3Byb2dyYW1hcz8gICAgICAgICAgQHJlbGF0aW9uKGZpZWxkczogW2lkX2RvY19wcm9ncmFtYV0sIHJlZmVyZW5jZXM6IFtpZF0sIG9uRGVsZXRlOiBSZXN0cmljdCwgb25VcGRhdGU6IFJlc3RyaWN0LCBtYXA6ICJpbnZfYmllbmVzX2liZmtfNiIpCiAgaW52X2NhdF9lc3BlY2lhbGlkYWQgIGludl9jYXRfZXNwZWNpYWxpZGFkPyAgIEByZWxhdGlvbihmaWVsZHM6IFtpZF9kZXNfZXNwZWNpYWxpZGFkXSwgcmVmZXJlbmNlczogW2lkXSwgb25EZWxldGU6IFJlc3RyaWN0LCBvblVwZGF0ZTogUmVzdHJpY3QsIG1hcDogImludl9iaWVuZXNfaWJma183IikKICBpbnZfY2FwaXR1bG9zICAgICAgICAgaW52X2NhcGl0dWxvcz8gICAgICAgICAgQHJlbGF0aW9uKGZpZWxkczogW2lkX2NhcGl0dWxvXSwgcmVmZXJlbmNlczogW2lkXSwgb25EZWxldGU6IFJlc3RyaWN0LCBvblVwZGF0ZTogUmVzdHJpY3QsIG1hcDogImludl9iaWVuZXNfaWJma184IikKICBpbnZfYmllbmVzX2NvcnRlICAgICAgaW52X2JpZW5lc19jb3J0ZVtdCiAgaW52X2JpZW5lc19yZXNndWFyZG9zIGludl9iaWVuZXNfcmVzZ3VhcmRvc1tdCiAgaW52X2VsZW1lbnRvc19iaWVuZXMgIGludl9lbGVtZW50b3NfYmllbmVzW10KICByY2ZfYmllbmVzICAgICAgICAgICAgcmNmX2JpZW5lc1tdCgogIEBAaW5kZXgoW2lkX2Rlc19lc3BlY2lhbGlkYWRdLCBtYXA6ICJpZF9kZXNfZXNwZWNpYWxpZGFkIikKICBAQGluZGV4KFtpZF9kb2NfYWRxdWlzaWNpb25dLCBtYXA6ICJpZF9kb2NfYWRxdWlzaWNpb24iKQogIEBAaW5kZXgoW2lkX2RvY19wcm9ncmFtYV0sIG1hcDogImlkX2RvY19wcm9ncmFtYSIpCiAgQEBpbmRleChbaWRfZG9jX3RpcG9dLCBtYXA6ICJpZF9kb2NfdGlwbyIpCiAgQEBpbmRleChbaWRfZG9jX3ZhbHVhY2lvbl0sIG1hcDogImlkX2RvY192YWx1YWNpb24iKQogIEBAaW5kZXgoW2lkX3RpcG9fbXVlYmxlXSwgbWFwOiAiaWRfdGlwb19tdWVibGUiKQogIEBAaW5kZXgoW2lkX3ViaWNhY2lvbl0sIG1hcDogImlkX3ViaWNhY2lvbiIpCiAgQEBpbmRleChbaWRfY2FwaXR1bG9dLCBtYXA6ICJpbnZfYmllbmVzX2liZmtfOCIpCn0KCm1vZGVsIGludl9iaWVuZXNfY29ydGUgewogIGlkICAgICAgICAgICAgICAgICAgIEJpZ0ludCAgICAgICAgICAgICAgIEBpZCBAZGVmYXVsdChhdXRvaW5jcmVtZW50KCkpIEBkYi5VbnNpZ25lZEJpZ0ludAogIGNsYXZlX2NhZSAgICAgICAgICAgIFN0cmluZwogIG51bV9iaWVuICAgICAgICAgICAgIFN0cmluZwogIGlkX3Nlc3ZlciAgICAgICAgICAgIFN0cmluZz8KICBmZWNoYV9lbnRyZWdhICAgICAgICBEYXRlVGltZT8gICAgICAgICAgICBAZGIuRGF0ZQogIGZlY2hhX29maWNpb19iYWphICAgIERhdGVUaW1lPyAgICAgICAgICAgIEBkYi5EYXRlCiAgb2ZpY2lvX2JhamEgICAgICAgICAgU3RyaW5nPwogIG1vdGl2b19iYWphICAgICAgICAgIFN0cmluZz8gICAgICAgICAgICAgIEBkYi5UZXh0CiAgc3RhdHVzX2JpZW4gICAgICAgICAgU3RyaW5nCiAgaW52ZW50YXJpYWRvICAgICAgICAgRGF0ZVRpbWU/ICAgICAgICAgICAgQGRiLkRhdGUKICBkb2NfZmVjaGEgICAgICAgICAgICBEYXRlVGltZT8gICAgICAgICAgICBAZGIuRGF0ZQogIGRvY19udW0gICAgICAgICAgICAgIFN0cmluZz8KICBkb2NfcHJlY2lvICAgICAgICAgICBGbG9hdD8KICBkb2NfZm9saW8gICAgICAgICAgICBTdHJpbmc/CiAgZG9jX3Byb3ZlZWRvciAgICAgICAgU3RyaW5nPwogIGRlc19tYXJjYSAgICAgICAgICAgIFN0cmluZz8KICBkZXNfbW9kZWxvICAgICAgICAgICBTdHJpbmc/CiAgZGVzX251bV9zZXJpZSAgICAgICAgU3RyaW5nPwogIGRlc19udW1fY2F0YWxvZ28gICAgIFN0cmluZz8KICBkZXNfbWVkaWRhcyAgICAgICAgICBTdHJpbmc/CiAgZGVzX2VzdHJ1Y3R1cmEgICAgICAgU3RyaW5nPwogIGRlc19jb2xvciAgICAgICAgICAgIFN0cmluZz8KICBkZXNfbm9tYnJlICAgICAgICAgICBTdHJpbmc/ICAgICAgICAgICAgICBAZGIuVmFyQ2hhcigyNTUpCiAgZGVzX251bV9jaGFyb2xhICAgICAgU3RyaW5nPwogIGRlc19vYnNlcnZhY2lvbmVzICAgIFN0cmluZz8gICAgICAgICAgICAgIEBkYi5UZXh0CiAgaWRfdGlwb19tdWVibGUgICAgICAgQmlnSW50ICAgICAgICAgICAgICAgQGRiLlVuc2lnbmVkQmlnSW50CiAgaWRfdWJpY2FjaW9uICAgICAgICAgQmlnSW50ICAgICAgICAgICAgICAgQGRiLlVuc2lnbmVkQmlnSW50CiAgaWRfZG9jX3RpcG8gICAgICAgICAgQmlnSW50ICAgICAgICAgICAgICAgQGRiLlVuc2lnbmVkQmlnSW50CiAgaWRfZG9jX2FkcXVpc2ljaW9uICAgQmlnSW50ICAgICAgICAgICAgICAgQGRiLlVuc2lnbmVkQmlnSW50CiAgaWRfZG9jX3ZhbHVhY2lvbiAgICAgQmlnSW50ICAgICAgICAgICAgICAgQGRiLlVuc2lnbmVkQmlnSW50CiAgaWRfZG9jX3Byb2dyYW1hICAgICAgSW50PyAgICAgICAgICAgICAgICAgQGRiLlVuc2lnbmVkSW50CiAgaWRfZGVzX2VzcGVjaWFsaWRhZCAgQmlnSW50ICAgICAgICAgICAgICAgQGRiLlVuc2lnbmVkQmlnSW50CiAgaWRfY2FwaXR1bG8gICAgICAgICAgQmlnSW50PyAgICAgICAgICAgICAgQGRiLlVuc2lnbmVkQmlnSW50CiAgaWRfYmllbiAgICAgICAgICAgICAgQmlnSW50ICAgICAgICAgICAgICAgQGRiLlVuc2lnbmVkQmlnSW50CiAgaWRfY29ydGUgICAgICAgICAgICAgQmlnSW50ICAgICAgICAgICAgICAgQGRiLlVuc2lnbmVkQmlnSW50CiAgY3JlYXRlZF9hdCAgICAgICAgICAgRGF0ZVRpbWU/ICAgICAgICAgICAgQGRiLlRpbWVzdGFtcCgwKQogIHVwZGF0ZWRfYXQgICAgICAgICAgIERhdGVUaW1lPyAgICAgICAgICAgIEBkYi5UaW1lc3RhbXAoMCkKICBkZWxldGVkX2F0ICAgICAgICAgICBEYXRlVGltZT8gICAgICAgICAgICBAZGIuVGltZXN0YW1wKDApCiAgaW52X2JpZW5lcyAgICAgICAgICAgaW52X2JpZW5lcyAgICAgICAgICAgQHJlbGF0aW9uKGZpZWxkczogW2lkX2JpZW5dLCByZWZlcmVuY2VzOiBbaWRdLCBvblVwZGF0ZTogUmVzdHJpY3QsIG1hcDogImludl9iaWVuZXNfY29ydGVfaWRfYmllbl9mb3JlaWduIikKICBpbnZfY2FwaXR1bG9zICAgICAgICBpbnZfY2FwaXR1bG9zPyAgICAgICBAcmVsYXRpb24oZmllbGRzOiBbaWRfY2FwaXR1bG9dLCByZWZlcmVuY2VzOiBbaWRdLCBvbkRlbGV0ZTogUmVzdHJpY3QsIG9uVXBkYXRlOiBSZXN0cmljdCwgbWFwOiAiaW52X2JpZW5lc19jb3J0ZV9pZF9jYXBpdHVsb19mb3JlaWduIikKICBpbnZfY2F0X2NvcnRlICAgICAgICBpbnZfY2F0X2NvcnRlICAgICAgICBAcmVsYXRpb24oZmllbGRzOiBbaWRfY29ydGVdLCByZWZlcmVuY2VzOiBbaWRdLCBvblVwZGF0ZTogUmVzdHJpY3QsIG1hcDogImludl9iaWVuZXNfY29ydGVfaWRfY29ydGVfZm9yZWlnbiIpCiAgaW52X2NhdF9lc3BlY2lhbGlkYWQgaW52X2NhdF9lc3BlY2lhbGlkYWQgQHJlbGF0aW9uKGZpZWxkczogW2lkX2Rlc19lc3BlY2lhbGlkYWRdLCByZWZlcmVuY2VzOiBbaWRdLCBvblVwZGF0ZTogUmVzdHJpY3QsIG1hcDogImludl9iaWVuZXNfY29ydGVfaWRfZGVzX2VzcGVjaWFsaWRhZF9mb3JlaWduIikKICBpbnZfYWRxdWlzaWNpb25lcyAgICBpbnZfYWRxdWlzaWNpb25lcyAgICBAcmVsYXRpb24oZmllbGRzOiBbaWRfZG9jX2FkcXVpc2ljaW9uXSwgcmVmZXJlbmNlczogW2lkXSwgb25VcGRhdGU6IFJlc3RyaWN0LCBtYXA6ICJpbnZfYmllbmVzX2NvcnRlX2lkX2RvY19hZHF1aXNpY2lvbl9mb3JlaWduIikKICBjYXRfcHJvZ3JhbWFzICAgICAgICBjYXRfcHJvZ3JhbWFzPyAgICAgICBAcmVsYXRpb24oZmllbGRzOiBbaWRfZG9jX3Byb2dyYW1hXSwgcmVmZXJlbmNlczogW2lkXSwgb25EZWxldGU6IFJlc3RyaWN0LCBvblVwZGF0ZTogUmVzdHJpY3QsIG1hcDogImludl9iaWVuZXNfY29ydGVfaWRfZG9jX3Byb2dyYW1hX2ZvcmVpZ24iKQogIGludl90aXBvX2RvY3VtZW50byAgIGludl90aXBvX2RvY3VtZW50byAgIEByZWxhdGlvbihmaWVsZHM6IFtpZF9kb2NfdGlwb10sIHJlZmVyZW5jZXM6IFtpZF0sIG9uVXBkYXRlOiBSZXN0cmljdCwgbWFwOiAiaW52X2JpZW5lc19jb3J0ZV9pZF9kb2NfdGlwb19mb3JlaWduIikKICBpbnZfdmFsdWFjaW9uZXMgICAgICBpbnZfdmFsdWFjaW9uZXMgICAgICBAcmVsYXRpb24oZmllbGRzOiBbaWRfZG9jX3ZhbHVhY2lvbl0sIHJlZmVyZW5jZXM6IFtpZF0sIG9uVXBkYXRlOiBSZXN0cmljdCwgbWFwOiAiaW52X2JpZW5lc19jb3J0ZV9pZF9kb2NfdmFsdWFjaW9uX2ZvcmVpZ24iKQogIGludl9jYXRfbXVlYmxlICAgICAgIGludl9jYXRfbXVlYmxlICAgICAgIEByZWxhdGlvbihmaWVsZHM6IFtpZF90aXBvX211ZWJsZV0sIHJlZmVyZW5jZXM6IFtpZF0sIG9uVXBkYXRlOiBSZXN0cmljdCwgbWFwOiAiaW52X2JpZW5lc19jb3J0ZV9pZF90aXBvX211ZWJsZV9mb3JlaWduIikKICBpbnZfY2F0X3ViaWNhY2lvbmVzICBpbnZfY2F0X3ViaWNhY2lvbmVzICBAcmVsYXRpb24oZmllbGRzOiBbaWRfdWJpY2FjaW9uXSwgcmVmZXJlbmNlczogW2lkXSwgb25VcGRhdGU6IFJlc3RyaWN0LCBtYXA6ICJpbnZfYmllbmVzX2NvcnRlX2lkX3ViaWNhY2lvbl9mb3JlaWduIikKCiAgQEBpbmRleChbaWRfYmllbl0sIG1hcDogImludl9iaWVuZXNfY29ydGVfaWRfYmllbl9mb3JlaWduIikKICBAQGluZGV4KFtpZF9jYXBpdHVsb10sIG1hcDogImludl9iaWVuZXNfY29ydGVfaWRfY2FwaXR1bG9fZm9yZWlnbiIpCiAgQEBpbmRleChbaWRfY29ydGVdLCBtYXA6ICJpbnZfYmllbmVzX2NvcnRlX2lkX2NvcnRlX2ZvcmVpZ24iKQogIEBAaW5kZXgoW2lkX2Rlc19lc3BlY2lhbGlkYWRdLCBtYXA6ICJpbnZfYmllbmVzX2NvcnRlX2lkX2Rlc19lc3BlY2lhbGlkYWRfZm9yZWlnbiIpCiAgQEBpbmRleChbaWRfZG9jX2FkcXVpc2ljaW9uXSwgbWFwOiAiaW52X2JpZW5lc19jb3J0ZV9pZF9kb2NfYWRxdWlzaWNpb25fZm9yZWlnbiIpCiAgQEBpbmRleChbaWRfZG9jX3Byb2dyYW1hXSwgbWFwOiAiaW52X2JpZW5lc19jb3J0ZV9pZF9kb2NfcHJvZ3JhbWFfZm9yZWlnbiIpCiAgQEBpbmRleChbaWRfZG9jX3RpcG9dLCBtYXA6ICJpbnZfYmllbmVzX2NvcnRlX2lkX2RvY190aXBvX2ZvcmVpZ24iKQogIEBAaW5kZXgoW2lkX2RvY192YWx1YWNpb25dLCBtYXA6ICJpbnZfYmllbmVzX2NvcnRlX2lkX2RvY192YWx1YWNpb25fZm9yZWlnbiIpCiAgQEBpbmRleChbaWRfdGlwb19tdWVibGVdLCBtYXA6ICJpbnZfYmllbmVzX2NvcnRlX2lkX3RpcG9fbXVlYmxlX2ZvcmVpZ24iKQogIEBAaW5kZXgoW2lkX3ViaWNhY2lvbl0sIG1hcDogImludl9iaWVuZXNfY29ydGVfaWRfdWJpY2FjaW9uX2ZvcmVpZ24iKQp9Cgptb2RlbCBpbnZfYmllbmVzX3Jlc2d1YXJkb3MgewogIGlkICAgICAgICAgICAgQmlnSW50ICAgICAgICAgQGlkIEBkZWZhdWx0KGF1dG9pbmNyZW1lbnQoKSkgQGRiLlVuc2lnbmVkQmlnSW50CiAgaWRfYmllbiAgICAgICBCaWdJbnQgICAgICAgICBAZGIuVW5zaWduZWRCaWdJbnQKICBpZF9lbXBsZWFkbyAgIEludD8gICAgICAgICAgIEBkYi5VbnNpZ25lZEludAogIGNyZWF0ZWRfYXQgICAgRGF0ZVRpbWU/ICAgICAgQGRiLlRpbWVzdGFtcCgwKQogIHVwZGF0ZWRfYXQgICAgRGF0ZVRpbWU/ICAgICAgQGRiLlRpbWVzdGFtcCgwKQogIGRlbGV0ZWRfYXQgICAgRGF0ZVRpbWU/ICAgICAgQGRiLlRpbWVzdGFtcCgwKQogIGludl9iaWVuZXMgICAgaW52X2JpZW5lcyAgICAgQHJlbGF0aW9uKGZpZWxkczogW2lkX2JpZW5dLCByZWZlcmVuY2VzOiBbaWRdLCBvblVwZGF0ZTogUmVzdHJpY3QsIG1hcDogImludl9iaWVuZXNfcmVzZ3VhcmRvc19pZF9iaWVuX2ZvcmVpZ24iKQogIHJjaF9lbXBsZWFkb3MgcmNoX2VtcGxlYWRvcz8gQHJlbGF0aW9uKGZpZWxkczogW2lkX2VtcGxlYWRvXSwgcmVmZXJlbmNlczogW2lkXSwgb25EZWxldGU6IFJlc3RyaWN0LCBvblVwZGF0ZTogUmVzdHJpY3QsIG1hcDogImludl9iaWVuZXNfcmVzZ3VhcmRvc19pZF9lbXBsZWFkb19mb3JlaWduIikKCiAgQEBpbmRleChbaWRfYmllbl0sIG1hcDogImludl9iaWVuZXNfcmVzZ3VhcmRvc19pZF9iaWVuX2ZvcmVpZ24iKQogIEBAaW5kZXgoW2lkX2VtcGxlYWRvXSwgbWFwOiAiaW52X2JpZW5lc19yZXNndWFyZG9zX2lkX2VtcGxlYWRvX2ZvcmVpZ24iKQp9Cgptb2RlbCBpbnZfY2FwaXR1bG9zIHsKICBpZCAgICAgICAgICAgICAgICAgICBCaWdJbnQgICAgICAgICAgICAgQGlkIEBkZWZhdWx0KGF1dG9pbmNyZW1lbnQoKSkgQGRiLlVuc2lnbmVkQmlnSW50CiAgY2xhdmVfY2FwaXR1bG8gICAgICAgU3RyaW5nCiAgbnVldmFfY2xhdmVfY2FwaXR1bG8gU3RyaW5nCiAgY2FwaXR1bG8gICAgICAgICAgICAgU3RyaW5nICAgICAgICAgICAgIEBkYi5UZXh0CiAgY3JlYXRlZF9hdCAgICAgICAgICAgRGF0ZVRpbWU/ICAgICAgICAgIEBkYi5UaW1lc3RhbXAoMCkKICB1cGRhdGVkX2F0ICAgICAgICAgICBEYXRlVGltZT8gICAgICAgICAgQGRiLlRpbWVzdGFtcCgwKQogIGRlbGV0ZWRfYXQgICAgICAgICAgIERhdGVUaW1lPyAgICAgICAgICBAZGIuVGltZXN0YW1wKDApCiAgaW52X2JpZW5lcyAgICAgICAgICAgaW52X2JpZW5lc1tdCiAgaW52X2JpZW5lc19jb3J0ZSAgICAgaW52X2JpZW5lc19jb3J0ZVtdCn0KCm1vZGVsIGludl9jYXRfY29ydGUgewogIGlkICAgICAgICAgICAgICAgICBCaWdJbnQgICAgICAgICAgICAgICBAaWQgQGRlZmF1bHQoYXV0b2luY3JlbWVudCgpKSBAZGIuVW5zaWduZWRCaWdJbnQKICBjcmVhdGVkX2F0ICAgICAgICAgRGF0ZVRpbWU/ICAgICAgICAgICAgQGRiLlRpbWVzdGFtcCgwKQogIHVwZGF0ZWRfYXQgICAgICAgICBEYXRlVGltZT8gICAgICAgICAgICBAZGIuVGltZXN0YW1wKDApCiAgZGVsZXRlZF9hdCAgICAgICAgIERhdGVUaW1lPyAgICAgICAgICAgIEBkYi5UaW1lc3RhbXAoMCkKICBpbnZfYmllbmVzX2NvcnRlICAgaW52X2JpZW5lc19jb3J0ZVtdCiAgaW52X2NvcnRlX2VtcGxlYWRvIGludl9jb3J0ZV9lbXBsZWFkb1tdCn0KCm1vZGVsIGludl9jYXRfZGVwYXJ0YW1lbnRvcyB7CiAgaWQgICAgICAgICAgICAgICAgICAgICAgICBCaWdJbnQgICAgICAgICAgICAgICAgICAgICAgQGlkIEBkZWZhdWx0KGF1dG9pbmNyZW1lbnQoKSkgQGRiLlVuc2lnbmVkQmlnSW50CiAgbm9tYnJlICAgICAgICAgICAgICAgICAgICBTdHJpbmcKICBjcmVhdGVkX2F0ICAgICAgICAgICAgICAgIERhdGVUaW1lPyAgICAgICAgICAgICAgICAgICBAZGIuVGltZXN0YW1wKDApCiAgdXBkYXRlZF9hdCAgICAgICAgICAgICAgICBEYXRlVGltZT8gICAgICAgICAgICAgICAgICAgQGRiLlRpbWVzdGFtcCgwKQogIGRlbGV0ZWRfYXQgICAgICAgICAgICAgICAgRGF0ZVRpbWU/ICAgICAgICAgICAgICAgICAgIEBkYi5UaW1lc3RhbXAoMCkKICBpbnZfY2F0X3ViaWNhY2lvbmVzICAgICAgIGludl9jYXRfdWJpY2FjaW9uZXNbXQogIGludl9kZXBhcnRhbWVudG9fZW1wbGVhZG8gaW52X2RlcGFydGFtZW50b19lbXBsZWFkb1tdCn0KCm1vZGVsIGludl9jYXRfZXNwZWNpYWxpZGFkIHsKICBpZCAgICAgICAgICAgICAgIEJpZ0ludCAgICAgICAgICAgICBAaWQgQGRlZmF1bHQoYXV0b2luY3JlbWVudCgpKSBAZGIuVW5zaWduZWRCaWdJbnQKICBlc3BlY2lhbGlkYWQgICAgIFN0cmluZwogIGNyZWF0ZWRfYXQgICAgICAgRGF0ZVRpbWU/ICAgICAgICAgIEBkYi5UaW1lc3RhbXAoMCkKICB1cGRhdGVkX2F0ICAgICAgIERhdGVUaW1lPyAgICAgICAgICBAZGIuVGltZXN0YW1wKDApCiAgZGVsZXRlZF9hdCAgICAgICBEYXRlVGltZT8gICAgICAgICAgQGRiLlRpbWVzdGFtcCgwKQogIGludl9iaWVuZXMgICAgICAgaW52X2JpZW5lc1tdCiAgaW52X2JpZW5lc19jb3J0ZSBpbnZfYmllbmVzX2NvcnRlW10KfQoKbW9kZWwgaW52X2NhdF9tdWVibGUgewogIGlkICAgICAgICAgICAgICAgICAgIEJpZ0ludCAgICAgICAgICAgICAgICAgQGlkIEBkZWZhdWx0KGF1dG9pbmNyZW1lbnQoKSkgQGRiLlVuc2lnbmVkQmlnSW50CiAgY2xhdmUgICAgICAgICAgICAgICAgU3RyaW5nCiAgbm9tYnJlX211ZWJsZSAgICAgICAgU3RyaW5nPwogIGNyZWF0ZWRfYXQgICAgICAgICAgIERhdGVUaW1lPyAgICAgICAgICAgICAgQGRiLlRpbWVzdGFtcCgwKQogIHVwZGF0ZWRfYXQgICAgICAgICAgIERhdGVUaW1lPyAgICAgICAgICAgICAgQGRiLlRpbWVzdGFtcCgwKQogIGRlbGV0ZWRfYXQgICAgICAgICAgIERhdGVUaW1lPyAgICAgICAgICAgICAgQGRiLlRpbWVzdGFtcCgwKQogIGludl9iaWVuZXMgICAgICAgICAgIGludl9iaWVuZXNbXQogIGludl9iaWVuZXNfY29ydGUgICAgIGludl9iaWVuZXNfY29ydGVbXQogIGludl9lbGVtZW50b3NfYmllbmVzIGludl9lbGVtZW50b3NfYmllbmVzW10KfQoKbW9kZWwgaW52X2NhdF91YmljYWNpb25lcyB7CiAgaWQgICAgICAgICAgICAgICAgICAgIEJpZ0ludCAgICAgICAgICAgICAgICAgQGlkIEBkZWZhdWx0KGF1dG9pbmNyZW1lbnQoKSkgQGRiLlVuc2lnbmVkQmlnSW50CiAgY2xhdmUgICAgICAgICAgICAgICAgIEludD8KICBub21icmUgICAgICAgICAgICAgICAgU3RyaW5nCiAgbnVtX3Jlc2d1YXJkbyAgICAgICAgIEludD8KICBpZF9lbXBsZWFkbyAgICAgICAgICAgSW50PyAgICAgICAgICAgICAgICAgICBAZGIuVW5zaWduZWRJbnQKICBpZF9kZXBhcnRhbWVudG8gICAgICAgQmlnSW50PyAgICAgICAgICAgICAgICBAZGIuVW5zaWduZWRCaWdJbnQKICBjcmVhdGVkX2F0ICAgICAgICAgICAgRGF0ZVRpbWU/ICAgICAgICAgICAgICBAZGIuVGltZXN0YW1wKDApCiAgdXBkYXRlZF9hdCAgICAgICAgICAgIERhdGVUaW1lPyAgICAgICAgICAgICAgQGRiLlRpbWVzdGFtcCgwKQogIGRlbGV0ZWRfYXQgICAgICAgICAgICBEYXRlVGltZT8gICAgICAgICAgICAgIEBkYi5UaW1lc3RhbXAoMCkKICBwdWVzdG8gICAgICAgICAgICAgICAgU3RyaW5nPyAgICAgICAgICAgICAgICBAZGIuVmFyQ2hhcigyNTUpCiAgaW52X2JpZW5lcyAgICAgICAgICAgIGludl9iaWVuZXNbXQogIGludl9iaWVuZXNfY29ydGUgICAgICBpbnZfYmllbmVzX2NvcnRlW10KICBpbnZfY2F0X2RlcGFydGFtZW50b3MgaW52X2NhdF9kZXBhcnRhbWVudG9zPyBAcmVsYXRpb24oZmllbGRzOiBbaWRfZGVwYXJ0YW1lbnRvXSwgcmVmZXJlbmNlczogW2lkXSwgb25EZWxldGU6IFJlc3RyaWN0LCBvblVwZGF0ZTogUmVzdHJpY3QsIG1hcDogImludl9jYXRfdWJpY2FjaW9uZXNfaWRfZGVwYXJ0YW1lbnRvX2ZvcmVpZ24iKQogIHJjaF9lbXBsZWFkb3MgICAgICAgICByY2hfZW1wbGVhZG9zPyAgICAgICAgIEByZWxhdGlvbihmaWVsZHM6IFtpZF9lbXBsZWFkb10sIHJlZmVyZW5jZXM6IFtpZF0sIG9uRGVsZXRlOiBSZXN0cmljdCwgb25VcGRhdGU6IFJlc3RyaWN0LCBtYXA6ICJpbnZfY2F0X3ViaWNhY2lvbmVzX2lkX2VtcGxlYWRvX2ZvcmVpZ24iKQoKICBAQGluZGV4KFtpZF9kZXBhcnRhbWVudG9dLCBtYXA6ICJpbnZfY2F0X3ViaWNhY2lvbmVzX2lkX2RlcGFydGFtZW50b19mb3JlaWduIikKICBAQGluZGV4KFtpZF9lbXBsZWFkb10sIG1hcDogImludl9jYXRfdWJpY2FjaW9uZXNfaWRfZW1wbGVhZG9fZm9yZWlnbiIpCn0KCm1vZGVsIGludl9jb3J0ZV9lbXBsZWFkbyB7CiAgaWQgICAgICAgICAgICBCaWdJbnQgICAgICAgICBAaWQgQGRlZmF1bHQoYXV0b2luY3JlbWVudCgpKSBAZGIuVW5zaWduZWRCaWdJbnQKICBpZF9jb3J0ZSAgICAgIEJpZ0ludCAgICAgICAgIEBkYi5VbnNpZ25lZEJpZ0ludAogIGlkX2VtcGxlYWRvICAgSW50PyAgICAgICAgICAgQGRiLlVuc2lnbmVkSW50CiAgaWRfcHVlc3RvICAgICBJbnQgICAgICAgICAgICBAZGIuVW5zaWduZWRJbnQKICBjcmVhdGVkX2F0ICAgIERhdGVUaW1lPyAgICAgIEBkYi5UaW1lc3RhbXAoMCkKICB1cGRhdGVkX2F0ICAgIERhdGVUaW1lPyAgICAgIEBkYi5UaW1lc3RhbXAoMCkKICBkZWxldGVkX2F0ICAgIERhdGVUaW1lPyAgICAgIEBkYi5UaW1lc3RhbXAoMCkKICBpbnZfY2F0X2NvcnRlIGludl9jYXRfY29ydGUgIEByZWxhdGlvbihmaWVsZHM6IFtpZF9jb3J0ZV0sIHJlZmVyZW5jZXM6IFtpZF0sIG9uVXBkYXRlOiBSZXN0cmljdCwgbWFwOiAiaW52X2NvcnRlX2VtcGxlYWRvX2lkX2NvcnRlX2ZvcmVpZ24iKQogIHJjaF9lbXBsZWFkb3MgcmNoX2VtcGxlYWRvcz8gQHJlbGF0aW9uKGZpZWxkczogW2lkX2VtcGxlYWRvXSwgcmVmZXJlbmNlczogW2lkXSwgb25EZWxldGU6IFJlc3RyaWN0LCBvblVwZGF0ZTogUmVzdHJpY3QsIG1hcDogImludl9jb3J0ZV9lbXBsZWFkb19pZF9lbXBsZWFkb19mb3JlaWduIikKICBjYXRfcHVlc3RvcyAgIGNhdF9wdWVzdG9zICAgIEByZWxhdGlvbihmaWVsZHM6IFtpZF9wdWVzdG9dLCByZWZlcmVuY2VzOiBbaWRdLCBvblVwZGF0ZTogUmVzdHJpY3QsIG1hcDogImludl9jb3J0ZV9lbXBsZWFkb19pZF9wdWVzdG9fZm9yZWlnbiIpCgogIEBAaW5kZXgoW2lkX2NvcnRlXSwgbWFwOiAiaW52X2NvcnRlX2VtcGxlYWRvX2lkX2NvcnRlX2ZvcmVpZ24iKQogIEBAaW5kZXgoW2lkX2VtcGxlYWRvXSwgbWFwOiAiaW52X2NvcnRlX2VtcGxlYWRvX2lkX2VtcGxlYWRvX2ZvcmVpZ24iKQogIEBAaW5kZXgoW2lkX3B1ZXN0b10sIG1hcDogImludl9jb3J0ZV9lbXBsZWFkb19pZF9wdWVzdG9fZm9yZWlnbiIpCn0KCm1vZGVsIGludl9kZXBhcnRhbWVudG9fZW1wbGVhZG8gewogIGlkICAgICAgICAgICAgICAgICAgICBCaWdJbnQgICAgICAgICAgICAgICAgQGlkIEBkZWZhdWx0KGF1dG9pbmNyZW1lbnQoKSkgQGRiLlVuc2lnbmVkQmlnSW50CiAgaWRfZW1wbGVhZG8gICAgICAgICAgIEludCAgICAgICAgICAgICAgICAgICBAZGIuVW5zaWduZWRJbnQKICBpZF9kZXBhcnRhbWVudG8gICAgICAgQmlnSW50ICAgICAgICAgICAgICAgIEBkYi5VbnNpZ25lZEJpZ0ludAogIGNyZWF0ZWRfYXQgICAgICAgICAgICBEYXRlVGltZT8gICAgICAgICAgICAgQGRiLlRpbWVzdGFtcCgwKQogIHVwZGF0ZWRfYXQgICAgICAgICAgICBEYXRlVGltZT8gICAgICAgICAgICAgQGRiLlRpbWVzdGFtcCgwKQogIGRlbGV0ZWRfYXQgICAgICAgICAgICBEYXRlVGltZT8gICAgICAgICAgICAgQGRiLlRpbWVzdGFtcCgwKQogIGludl9jYXRfZGVwYXJ0YW1lbnRvcyBpbnZfY2F0X2RlcGFydGFtZW50b3MgQHJlbGF0aW9uKGZpZWxkczogW2lkX2RlcGFydGFtZW50b10sIHJlZmVyZW5jZXM6IFtpZF0sIG9uVXBkYXRlOiBSZXN0cmljdCwgbWFwOiAiaW52X2RlcGFydGFtZW50b19lbXBsZWFkb19pZF9kZXBhcnRhbWVudG9fZm9yZWlnbiIpCiAgcmNoX2VtcGxlYWRvcyAgICAgICAgIHJjaF9lbXBsZWFkb3MgICAgICAgICBAcmVsYXRpb24oZmllbGRzOiBbaWRfZW1wbGVhZG9dLCByZWZlcmVuY2VzOiBbaWRdLCBvblVwZGF0ZTogUmVzdHJpY3QsIG1hcDogImludl9kZXBhcnRhbWVudG9fZW1wbGVhZG9faWRfZW1wbGVhZG9fZm9yZWlnbiIpCgogIEBAaW5kZXgoW2lkX2RlcGFydGFtZW50b10sIG1hcDogImludl9kZXBhcnRhbWVudG9fZW1wbGVhZG9faWRfZGVwYXJ0YW1lbnRvX2ZvcmVpZ24iKQogIEBAaW5kZXgoW2lkX2VtcGxlYWRvXSwgbWFwOiAiaW52X2RlcGFydGFtZW50b19lbXBsZWFkb19pZF9lbXBsZWFkb19mb3JlaWduIikKfQoKbW9kZWwgaW52X2VsZW1lbnRvc19iaWVuZXMgewogIGlkICAgICAgICAgICAgICAgQmlnSW50ICAgICAgICAgICBAdW5pcXVlKG1hcDogImlkIikgQGRlZmF1bHQoYXV0b2luY3JlbWVudCgpKSBAZGIuVW5zaWduZWRCaWdJbnQKICBjbGF2ZV9jYWUgICAgICAgIFN0cmluZz8gICAgICAgICAgQHVuaXF1ZShtYXA6ICJjbGF2ZV9jYWUiKQogIG51bV9lbGVtZW50byAgICAgU3RyaW5nPyAgICAgICAgICBAZGIuVmFyQ2hhcigzMCkKICBzdGF0dXNfYmllbiAgICAgIFN0cmluZz8gICAgICAgICAgQGRiLlZhckNoYXIoMzApCiAgZGVzX21hcmNhICAgICAgICBTdHJpbmc/ICAgICAgICAgIEBkYi5WYXJDaGFyKDUwKQogIGRlc19tb2RlbG8gICAgICAgU3RyaW5nPyAgICAgICAgICBAZGIuVmFyQ2hhcigzMCkKICBkZXNfbnVtX3NlcmllICAgIFN0cmluZz8gICAgICAgICAgQGRiLlZhckNoYXIoNTApCiAgZGVzX251bV9jYXRhbG9nbyBTdHJpbmc/ICAgICAgICAgIEBkYi5WYXJDaGFyKDMwKQogIGRlc19tZWRpZGFzICAgICAgU3RyaW5nPyAgICAgICAgICBAZGIuVmFyQ2hhcigyMCkKICBkZXNfZXN0cnVjdHVyYSAgIFN0cmluZz8KICBkZXNfY29sb3IgICAgICAgIFN0cmluZz8gICAgICAgICAgQGRiLlZhckNoYXIoMzApCiAgZGVzX25vbWJyZSAgICAgICBTdHJpbmc/CiAgaWRfdWJpY2FjaW9uICAgICBJbnQ/ICAgICAgICAgICAgIEBkYi5VbnNpZ25lZEludAogIGlkX3RpcG9fbXVlYmxlICAgQmlnSW50PyAgICAgICAgICBAZGIuVW5zaWduZWRCaWdJbnQKICBpZF9iaWVuICAgICAgICAgIEJpZ0ludD8gICAgICAgICAgQGRiLlVuc2lnbmVkQmlnSW50CiAgY3JlYXRlZF9hdCAgICAgICBEYXRlVGltZT8gICAgICAgIEBkYi5UaW1lc3RhbXAoMCkKICB1cGRhdGVkX2F0ICAgICAgIERhdGVUaW1lPyAgICAgICAgQGRiLlRpbWVzdGFtcCgwKQogIGRlbGV0ZWRfYXQgICAgICAgRGF0ZVRpbWU/ICAgICAgICBAZGIuVGltZXN0YW1wKDApCiAgY2F0X3ViaWNhY2lvbmVzICBjYXRfdWJpY2FjaW9uZXM/IEByZWxhdGlvbihmaWVsZHM6IFtpZF91YmljYWNpb25dLCByZWZlcmVuY2VzOiBbaWRfdWJpY2FjaW9uXSwgb25EZWxldGU6IFJlc3RyaWN0LCBvblVwZGF0ZTogUmVzdHJpY3QsIG1hcDogImludl9lbGVtZW50b3NfYmllbmVzX2liZmtfMSIpCiAgaW52X2NhdF9tdWVibGUgICBpbnZfY2F0X211ZWJsZT8gIEByZWxhdGlvbihmaWVsZHM6IFtpZF90aXBvX211ZWJsZV0sIHJlZmVyZW5jZXM6IFtpZF0sIG9uRGVsZXRlOiBSZXN0cmljdCwgb25VcGRhdGU6IFJlc3RyaWN0LCBtYXA6ICJpbnZfZWxlbWVudG9zX2JpZW5lc19pYmZrXzIiKQogIGludl9iaWVuZXMgICAgICAgaW52X2JpZW5lcz8gICAgICBAcmVsYXRpb24oZmllbGRzOiBbaWRfYmllbl0sIHJlZmVyZW5jZXM6IFtpZF0sIG9uRGVsZXRlOiBSZXN0cmljdCwgb25VcGRhdGU6IFJlc3RyaWN0LCBtYXA6ICJpbnZfZWxlbWVudG9zX2JpZW5lc19pYmZrXzMiKQoKICBAQGluZGV4KFtpZF9iaWVuXSwgbWFwOiAiaWRfYmllbiIpCiAgQEBpbmRleChbaWRfdGlwb19tdWVibGVdLCBtYXA6ICJpZF90aXBvX211ZWJsZSIpCiAgQEBpbmRleChbaWRfdWJpY2FjaW9uXSwgbWFwOiAiaWRfdWJpY2FjaW9uIikKfQoKbW9kZWwgaW52X3RpcG9fZG9jdW1lbnRvIHsKICBpZCAgICAgICAgICAgICAgIEJpZ0ludCAgICAgICAgICAgICBAaWQgQGRlZmF1bHQoYXV0b2luY3JlbWVudCgpKSBAZGIuVW5zaWduZWRCaWdJbnQKICB0aXBvRG9jdW1lbnRvICAgIFN0cmluZwogIGNyZWF0ZWRfYXQgICAgICAgRGF0ZVRpbWU/ICAgICAgICAgIEBkYi5UaW1lc3RhbXAoMCkKICB1cGRhdGVkX2F0ICAgICAgIERhdGVUaW1lPyAgICAgICAgICBAZGIuVGltZXN0YW1wKDApCiAgZGVsZXRlZF9hdCAgICAgICBEYXRlVGltZT8gICAgICAgICAgQGRiLlRpbWVzdGFtcCgwKQogIGludl9iaWVuZXMgICAgICAgaW52X2JpZW5lc1tdCiAgaW52X2JpZW5lc19jb3J0ZSBpbnZfYmllbmVzX2NvcnRlW10KfQoKbW9kZWwgaW52X3ZhbHVhY2lvbmVzIHsKICBpZCAgICAgICAgICAgICAgIEJpZ0ludCAgICAgICAgICAgICBAaWQgQGRlZmF1bHQoYXV0b2luY3JlbWVudCgpKSBAZGIuVW5zaWduZWRCaWdJbnQKICB0aXBvX3ZhbHVhY2lvbiAgIFN0cmluZwogIGNyZWF0ZWRfYXQgICAgICAgRGF0ZVRpbWU/ICAgICAgICAgIEBkYi5UaW1lc3RhbXAoMCkKICB1cGRhdGVkX2F0ICAgICAgIERhdGVUaW1lPyAgICAgICAgICBAZGIuVGltZXN0YW1wKDApCiAgZGVsZXRlZF9hdCAgICAgICBEYXRlVGltZT8gICAgICAgICAgQGRiLlRpbWVzdGFtcCgwKQogIGludl9iaWVuZXMgICAgICAgaW52X2JpZW5lc1tdCiAgaW52X2JpZW5lc19jb3J0ZSBpbnZfYmllbmVzX2NvcnRlW10KfQoKbW9kZWwgbWlncmF0aW9ucyB7CiAgaWQgICAgICAgIEludCAgICBAaWQgQGRlZmF1bHQoYXV0b2luY3JlbWVudCgpKSBAZGIuVW5zaWduZWRJbnQKICBtaWdyYXRpb24gU3RyaW5nCiAgYmF0Y2ggICAgIEludAp9Cgptb2RlbCBtb2RlbF9oYXNfcGVybWlzc2lvbnMgewogIHBlcm1pc3Npb25faWQgSW50ICAgICAgICAgQGRiLlVuc2lnbmVkSW50CiAgbW9kZWxfdHlwZSAgICBTdHJpbmcKICBtb2RlbF9pZCAgICAgIEJpZ0ludCAgICAgIEBkYi5VbnNpZ25lZEJpZ0ludAogIHBlcm1pc3Npb25zICAgcGVybWlzc2lvbnMgQHJlbGF0aW9uKGZpZWxkczogW3Blcm1pc3Npb25faWRdLCByZWZlcmVuY2VzOiBbaWRdLCBvbkRlbGV0ZTogQ2FzY2FkZSwgb25VcGRhdGU6IFJlc3RyaWN0LCBtYXA6ICJtb2RlbF9oYXNfcGVybWlzc2lvbnNfcGVybWlzc2lvbl9pZF9mb3JlaWduIikKCiAgQEBpZChbcGVybWlzc2lvbl9pZCwgbW9kZWxfaWQsIG1vZGVsX3R5cGVdKQogIEBAaW5kZXgoW21vZGVsX3R5cGUsIG1vZGVsX2lkXSwgbWFwOiAibW9kZWxfaGFzX3Blcm1pc3Npb25zX21vZGVsX3R5cGVfbW9kZWxfaWRfaW5kZXgiKQp9Cgptb2RlbCBtb2RlbF9oYXNfcm9sZXMgewogIHJvbGVfaWQgICAgSW50ICAgIEBkYi5VbnNpZ25lZEludAogIG1vZGVsX3R5cGUgU3RyaW5nCiAgbW9kZWxfaWQgICBCaWdJbnQgQGRiLlVuc2lnbmVkQmlnSW50CiAgcm9sZXMgICAgICByb2xlcyAgQHJlbGF0aW9uKGZpZWxkczogW3JvbGVfaWRdLCByZWZlcmVuY2VzOiBbaWRdLCBvbkRlbGV0ZTogQ2FzY2FkZSwgb25VcGRhdGU6IFJlc3RyaWN0LCBtYXA6ICJtb2RlbF9oYXNfcm9sZXNfcm9sZV9pZF9mb3JlaWduIikKCiAgQEBpZChbcm9sZV9pZCwgbW9kZWxfaWQsIG1vZGVsX3R5cGVdKQogIEBAaW5kZXgoW21vZGVsX3R5cGUsIG1vZGVsX2lkXSwgbWFwOiAibW9kZWxfaGFzX3JvbGVzX21vZGVsX3R5cGVfbW9kZWxfaWRfaW5kZXgiKQp9Cgptb2RlbCBudXRfY2F0X2hvcmFyaW9zX2NvbWVkb3IgewogIGlkICAgICAgICAgICAgIEJpZ0ludCAgICBAaWQgQGRlZmF1bHQoYXV0b2luY3JlbWVudCgpKSBAZGIuVW5zaWduZWRCaWdJbnQKICBpZF9ob3JhcmlvICAgICBJbnQKICBub21icmUgICAgICAgICBTdHJpbmcgICAgQGRiLlZhckNoYXIoNTApCiAgaG9yYV9pbmljaW8gICAgRGF0ZVRpbWUgIEBkYi5EYXRlVGltZSgwKQogIGhvcmFfZmluICAgICAgIERhdGVUaW1lICBAZGIuRGF0ZVRpbWUoMCkKICBob3JhX2V4dGVuZGlkYSBEYXRlVGltZT8gQGRiLkRhdGVUaW1lKDApCiAgc3RhdHVzICAgICAgICAgSW50CiAgY3JlYXRlZF9hdCAgICAgRGF0ZVRpbWU/IEBkYi5UaW1lc3RhbXAoMCkKICB1cGRhdGVkX2F0ICAgICBEYXRlVGltZT8gQGRiLlRpbWVzdGFtcCgwKQogIGRlbGV0ZWRfYXQgICAgIERhdGVUaW1lPyBAZGIuVGltZXN0YW1wKDApCn0KCm1vZGVsIG51dF9jYXRfbW90aXZvcyB7CiAgaWQgICAgICAgICBJbnQgICAgICAgQGlkIEBkZWZhdWx0KGF1dG9pbmNyZW1lbnQoKSkKICBub21icmUgICAgIFN0cmluZz8gICBAZGIuVmFyQ2hhcig1MCkKICBjcmVhdGVkX2F0IERhdGVUaW1lPyBAZGIuVGltZXN0YW1wKDApCiAgZGVsZXRlZF9hdCBEYXRlVGltZT8gQGRiLlRpbWVzdGFtcCgwKQogIHVwZGF0ZWRfYXQgRGF0ZVRpbWU/IEBkYi5UaW1lc3RhbXAoMCkKfQoKbW9kZWwgbnV0X3Bhc2VfY29tZWRvciB7CiAgaWQgICAgICAgICAgICAgQmlnSW50ICAgIEBpZCBAZGVmYXVsdChhdXRvaW5jcmVtZW50KCkpIEBkYi5VbnNpZ25lZEJpZ0ludAogIGlkX3RpcG9QZXJzb25hIEJpZ0ludD8KICB0aXBvX3BlcnNvbmFsICBTdHJpbmc/ICAgQGRiLlZhckNoYXIoNTApCiAgaWRfZW1wbGVhZG8gICAgQmlnSW50PwogIGlkX2hvcmFyaW8gICAgIEJpZ0ludD8KICBmZWNoYSAgICAgICAgICBEYXRlVGltZSAgQGRiLkRhdGVUaW1lKDApCiAgcmVnaXN0cm8gICAgICAgU3RyaW5nPyAgIEBkYi5WYXJDaGFyKDEwKQogIGNyZWF0ZWRfYXQgICAgIERhdGVUaW1lPyBAZGIuVGltZXN0YW1wKDApCiAgdXBkYXRlZF9hdCAgICAgRGF0ZVRpbWU/IEBkYi5UaW1lc3RhbXAoMCkKICBkZWxldGVkX2F0ICAgICBEYXRlVGltZT8gQGRiLlRpbWVzdGFtcCgwKQp9Cgptb2RlbCBudXRfcmVnX2F1dG9yaXphY2lvbiB7CiAgaWQgICAgICAgICAgICBCaWdJbnQgICAgQGlkIEBkZWZhdWx0KGF1dG9pbmNyZW1lbnQoKSkgQGRiLlVuc2lnbmVkQmlnSW50CiAgaWRfZW1wbGVhZG8gICBCaWdJbnQ/CiAgaWRfaG9yYXJpbyAgICBCaWdJbnQ/CiAgZmVjaGFfaW5pY2lvICBEYXRlVGltZSAgQGRiLkRhdGVUaW1lKDApCiAgZmVjaGFfZmluICAgICBEYXRlVGltZSAgQGRiLkRhdGVUaW1lKDApCiAgaWRfbW90aXZvICAgICBCaWdJbnQgICAgQGRlZmF1bHQoMCkKICBpZF9hdXRvcml6byAgIEJpZ0ludCAgICBAZGVmYXVsdCgwKQogIG9ic2VydmFjaW9uZXMgU3RyaW5nICAgIEBkYi5UZXh0CiAgdXNlcm5hbWUgICAgICBTdHJpbmc/ICAgQGRiLlZhckNoYXIoNTApCiAgY3JlYXRlZF9hdCAgICBEYXRlVGltZT8gQGRiLlRpbWVzdGFtcCgwKQogIHVwZGF0ZWRfYXQgICAgRGF0ZVRpbWU/IEBkYi5UaW1lc3RhbXAoMCkKICBkZWxldGVkX2F0ICAgIERhdGVUaW1lPyBAZGIuVGltZXN0YW1wKDApCn0KCm1vZGVsIG9hdXRoX2FjY2Vzc190b2tlbnMgewogIGlkICAgICAgICAgU3RyaW5nICAgIEBpZCBAZGIuVmFyQ2hhcigxMDApCiAgdXNlcl9pZCAgICBCaWdJbnQ/ICAgQGRiLlVuc2lnbmVkQmlnSW50CiAgY2xpZW50X2lkICBCaWdJbnQgICAgQGRiLlVuc2lnbmVkQmlnSW50CiAgbmFtZSAgICAgICBTdHJpbmc/CiAgc2NvcGVzICAgICBTdHJpbmc/ICAgQGRiLlRleHQKICByZXZva2VkICAgIEJvb2xlYW4KICBjcmVhdGVkX2F0IERhdGVUaW1lPyBAZGIuVGltZXN0YW1wKDApCiAgdXBkYXRlZF9hdCBEYXRlVGltZT8gQGRiLlRpbWVzdGFtcCgwKQogIGV4cGlyZXNfYXQgRGF0ZVRpbWU/IEBkYi5EYXRlVGltZSgwKQoKICBAQGluZGV4KFt1c2VyX2lkXSwgbWFwOiAib2F1dGhfYWNjZXNzX3Rva2Vuc191c2VyX2lkX2luZGV4IikKfQoKbW9kZWwgb2F1dGhfYXV0aF9jb2RlcyB7CiAgaWQgICAgICAgICBTdHJpbmcgICAgQGlkIEBkYi5WYXJDaGFyKDEwMCkKICB1c2VyX2lkICAgIEJpZ0ludCAgICBAZGIuVW5zaWduZWRCaWdJbnQKICBjbGllbnRfaWQgIEJpZ0ludCAgICBAZGIuVW5zaWduZWRCaWdJbnQKICBzY29wZXMgICAgIFN0cmluZz8gICBAZGIuVGV4dAogIHJldm9rZWQgICAgQm9vbGVhbgogIGV4cGlyZXNfYXQgRGF0ZVRpbWU/IEBkYi5EYXRlVGltZSgwKQoKICBAQGluZGV4KFt1c2VyX2lkXSwgbWFwOiAib2F1dGhfYXV0aF9jb2Rlc191c2VyX2lkX2luZGV4IikKfQoKbW9kZWwgb2F1dGhfY2xpZW50cyB7CiAgaWQgICAgICAgICAgICAgICAgICAgICBCaWdJbnQgICAgQGlkIEBkZWZhdWx0KGF1dG9pbmNyZW1lbnQoKSkgQGRiLlVuc2lnbmVkQmlnSW50CiAgdXNlcl9pZCAgICAgICAgICAgICAgICBCaWdJbnQ/ICAgQGRiLlVuc2lnbmVkQmlnSW50CiAgbmFtZSAgICAgICAgICAgICAgICAgICBTdHJpbmcKICBzZWNyZXQgICAgICAgICAgICAgICAgIFN0cmluZz8gICBAZGIuVmFyQ2hhcigxMDApCiAgcHJvdmlkZXIgICAgICAgICAgICAgICBTdHJpbmc/CiAgcmVkaXJlY3QgICAgICAgICAgICAgICBTdHJpbmcgICAgQGRiLlRleHQKICBwZXJzb25hbF9hY2Nlc3NfY2xpZW50IEJvb2xlYW4KICBwYXNzd29yZF9jbGllbnQgICAgICAgIEJvb2xlYW4KICByZXZva2VkICAgICAgICAgICAgICAgIEJvb2xlYW4KICBjcmVhdGVkX2F0ICAgICAgICAgICAgIERhdGVUaW1lPyBAZGIuVGltZXN0YW1wKDApCiAgdXBkYXRlZF9hdCAgICAgICAgICAgICBEYXRlVGltZT8gQGRiLlRpbWVzdGFtcCgwKQoKICBAQGluZGV4KFt1c2VyX2lkXSwgbWFwOiAib2F1dGhfY2xpZW50c191c2VyX2lkX2luZGV4IikKfQoKbW9kZWwgb2F1dGhfcGVyc29uYWxfYWNjZXNzX2NsaWVudHMgewogIGlkICAgICAgICAgQmlnSW50ICAgIEBpZCBAZGVmYXVsdChhdXRvaW5jcmVtZW50KCkpIEBkYi5VbnNpZ25lZEJpZ0ludAogIGNsaWVudF9pZCAgQmlnSW50ICAgIEBkYi5VbnNpZ25lZEJpZ0ludAogIGNyZWF0ZWRfYXQgRGF0ZVRpbWU/IEBkYi5UaW1lc3RhbXAoMCkKICB1cGRhdGVkX2F0IERhdGVUaW1lPyBAZGIuVGltZXN0YW1wKDApCn0KCm1vZGVsIG9hdXRoX3JlZnJlc2hfdG9rZW5zIHsKICBpZCAgICAgICAgICAgICAgU3RyaW5nICAgIEBpZCBAZGIuVmFyQ2hhcigxMDApCiAgYWNjZXNzX3Rva2VuX2lkIFN0cmluZyAgICBAZGIuVmFyQ2hhcigxMDApCiAgcmV2b2tlZCAgICAgICAgIEJvb2xlYW4KICBleHBpcmVzX2F0ICAgICAgRGF0ZVRpbWU/IEBkYi5EYXRlVGltZSgwKQoKICBAQGluZGV4KFthY2Nlc3NfdG9rZW5faWRdLCBtYXA6ICJvYXV0aF9yZWZyZXNoX3Rva2Vuc19hY2Nlc3NfdG9rZW5faWRfaW5kZXgiKQp9CgovLy8gVGhlIHVuZGVybHlpbmcgdGFibGUgZG9lcyBub3QgY29udGFpbiBhIHZhbGlkIHVuaXF1ZSBpZGVudGlmaWVyIGFuZCBjYW4gdGhlcmVmb3JlIGN1cnJlbnRseSBub3QgYmUgaGFuZGxlZCBieSBQcmlzbWEgQ2xpZW50Lgptb2RlbCBwYXNzd29yZF9yZXNldHMgewogIGVtYWlsICAgICAgU3RyaW5nCiAgdG9rZW4gICAgICBTdHJpbmcKICBjcmVhdGVkX2F0IERhdGVUaW1lPyBAZGIuVGltZXN0YW1wKDApCgogIEBAaW5kZXgoW2VtYWlsXSwgbWFwOiAicGFzc3dvcmRfcmVzZXRzX2VtYWlsX2luZGV4IikKICBAQGlnbm9yZQp9Cgptb2RlbCBwZXJtaXNzaW9ucyB7CiAgaWQgICAgICAgICAgICAgICAgICAgIEludCAgICAgICAgICAgICAgICAgICAgIEBpZCBAZGVmYXVsdChhdXRvaW5jcmVtZW50KCkpIEBkYi5VbnNpZ25lZEludAogIG5hbWUgICAgICAgICAgICAgICAgICBTdHJpbmcKICBndWFyZF9uYW1lICAgICAgICAgICAgU3RyaW5nCiAgY3JlYXRlZF9hdCAgICAgICAgICAgIERhdGVUaW1lPyAgICAgICAgICAgICAgIEBkYi5UaW1lc3RhbXAoMCkKICB1cGRhdGVkX2F0ICAgICAgICAgICAgRGF0ZVRpbWU/ICAgICAgICAgICAgICAgQGRiLlRpbWVzdGFtcCgwKQogIG1vZGVsX2hhc19wZXJtaXNzaW9ucyBtb2RlbF9oYXNfcGVybWlzc2lvbnNbXQogIHJvbGVfaGFzX3Blcm1pc3Npb25zICByb2xlX2hhc19wZXJtaXNzaW9uc1tdCn0KCm1vZGVsIHJjZl9iaWVuZXMgewogIGlkICAgICAgICAgICAgICAgICAgQmlnSW50ICAgICAgICAgICAgQGlkIEBkZWZhdWx0KGF1dG9pbmNyZW1lbnQoKSkgQGRiLlVuc2lnbmVkQmlnSW50CiAgY29uZGljaW9uX2VxdWlwbyAgICBTdHJpbmcKICBlc3RhZG9fc2l0dWFjaW9uYWwgIFN0cmluZwogIGluc3RydWN0aXZvX3RyYWJham8gU3RyaW5nPyAgICAgICAgICAgQGRiLlRleHQKICBvYnNlcnZhY2lvbmVzICAgICAgIFN0cmluZz8gICAgICAgICAgIEBkYi5UZXh0CiAgaWRfYmllbiAgICAgICAgICAgICBCaWdJbnQgICAgICAgICAgICBAZGIuVW5zaWduZWRCaWdJbnQKICBpZF91YmljYWNpb24gICAgICAgIEludD8gICAgICAgICAgICAgIEBkYi5VbnNpZ25lZEludAogIHN0YXR1cyAgICAgICAgICAgICAgU3RyaW5nPyAgICAgICAgICAgQGRiLlZhckNoYXIoMTApCiAgaWRfbGlzdGEgICAgICAgICAgICBCaWdJbnQ/ICAgICAgICAgICBAZGIuVW5zaWduZWRCaWdJbnQKICBjcmVhdGVkX2F0ICAgICAgICAgIERhdGVUaW1lPyAgICAgICAgIEBkYi5UaW1lc3RhbXAoMCkKICB1cGRhdGVkX2F0ICAgICAgICAgIERhdGVUaW1lPyAgICAgICAgIEBkYi5UaW1lc3RhbXAoMCkKICBkZWxldGVkX2F0ICAgICAgICAgIERhdGVUaW1lPyAgICAgICAgIEBkYi5UaW1lc3RhbXAoMCkKICBpbnZfYmllbmVzICAgICAgICAgIGludl9iaWVuZXMgICAgICAgIEByZWxhdGlvbihmaWVsZHM6IFtpZF9iaWVuXSwgcmVmZXJlbmNlczogW2lkXSwgb25VcGRhdGU6IFJlc3RyaWN0LCBtYXA6ICJyY2ZfYmllbmVzX2lkX2JpZW5fZm9yZWlnbiIpCiAgcmNmX2xpc3RhcyAgICAgICAgICByY2ZfbGlzdGFzPyAgICAgICBAcmVsYXRpb24oZmllbGRzOiBbaWRfbGlzdGFdLCByZWZlcmVuY2VzOiBbaWRdLCBvbkRlbGV0ZTogUmVzdHJpY3QsIG9uVXBkYXRlOiBSZXN0cmljdCwgbWFwOiAicmNmX2JpZW5lc19pZF9saXN0YV9mb3JlaWduIikKICBjYXRfdWJpY2FjaW9uZXMgICAgIGNhdF91YmljYWNpb25lcz8gIEByZWxhdGlvbihmaWVsZHM6IFtpZF91YmljYWNpb25dLCByZWZlcmVuY2VzOiBbaWRfdWJpY2FjaW9uXSwgb25EZWxldGU6IFJlc3RyaWN0LCBvblVwZGF0ZTogUmVzdHJpY3QsIG1hcDogInJjZl9iaWVuZXNfaWRfdWJpY2FjaW9uX2ZvcmVpZ24iKQogIHJjZl9pbmNpZGVuY2lhcyAgICAgcmNmX2luY2lkZW5jaWFzW10KCiAgQEBpbmRleChbaWRfYmllbl0sIG1hcDogInJjZl9iaWVuZXNfaWRfYmllbl9mb3JlaWduIikKICBAQGluZGV4KFtpZF9saXN0YV0sIG1hcDogInJjZl9iaWVuZXNfaWRfbGlzdGFfZm9yZWlnbiIpCiAgQEBpbmRleChbaWRfdWJpY2FjaW9uXSwgbWFwOiAicmNmX2JpZW5lc19pZF91YmljYWNpb25fZm9yZWlnbiIpCn0KCm1vZGVsIHJjZl9lbXBsZWFkb19pbmNpZGVuY2lhIHsKICBpZCAgICAgICAgICAgICAgQmlnSW50ICAgICAgICAgIEBpZCBAZGVmYXVsdChhdXRvaW5jcmVtZW50KCkpIEBkYi5VbnNpZ25lZEJpZ0ludAogIGlkX2VtcGxlYWRvICAgICBJbnQ/ICAgICAgICAgICAgQGRiLlVuc2lnbmVkSW50CiAgaWRfaW5jaWRlbmNpYSAgIEJpZ0ludCAgICAgICAgICBAZGIuVW5zaWduZWRCaWdJbnQKICBkZWxldGVkX2F0ICAgICAgRGF0ZVRpbWU/ICAgICAgIEBkYi5UaW1lc3RhbXAoMCkKICBjcmVhdGVkX2F0ICAgICAgRGF0ZVRpbWU/ICAgICAgIEBkYi5UaW1lc3RhbXAoMCkKICB1cGRhdGVkX2F0ICAgICAgRGF0ZVRpbWU/ICAgICAgIEBkYi5UaW1lc3RhbXAoMCkKICByY2hfZW1wbGVhZG9zICAgcmNoX2VtcGxlYWRvcz8gIEByZWxhdGlvbihmaWVsZHM6IFtpZF9lbXBsZWFkb10sIHJlZmVyZW5jZXM6IFtpZF0sIG9uRGVsZXRlOiBSZXN0cmljdCwgb25VcGRhdGU6IFJlc3RyaWN0LCBtYXA6ICJyY2ZfZW1wbGVhZG9faW5jaWRlbmNpYV9pZF9lbXBsZWFkb19mb3JlaWduIikKICByY2ZfaW5jaWRlbmNpYXMgcmNmX2luY2lkZW5jaWFzIEByZWxhdGlvbihmaWVsZHM6IFtpZF9pbmNpZGVuY2lhXSwgcmVmZXJlbmNlczogW2lkXSwgb25VcGRhdGU6IFJlc3RyaWN0LCBtYXA6ICJyY2ZfZW1wbGVhZG9faW5jaWRlbmNpYV9pZF9pbmNpZGVuY2lhX2ZvcmVpZ24iKQoKICBAQGluZGV4KFtpZF9lbXBsZWFkb10sIG1hcDogInJjZl9lbXBsZWFkb19pbmNpZGVuY2lhX2lkX2VtcGxlYWRvX2ZvcmVpZ24iKQogIEBAaW5kZXgoW2lkX2luY2lkZW5jaWFdLCBtYXA6ICJyY2ZfZW1wbGVhZG9faW5jaWRlbmNpYV9pZF9pbmNpZGVuY2lhX2ZvcmVpZ24iKQp9Cgptb2RlbCByY2ZfZW1wbGVhZG9fa2FyZGV4IHsKICBpZCAgICAgICAgICAgIEludCAgICAgICAgICAgIEBpZCBAZGVmYXVsdChhdXRvaW5jcmVtZW50KCkpIEBkYi5VbnNpZ25lZEludAogIGlkX2thcmRleCAgICAgSW50PyAgICAgICAgICAgQGRiLlVuc2lnbmVkSW50CiAgaWRfZW1wbGVhZG8gICBJbnQ/ICAgICAgICAgICBAZGIuVW5zaWduZWRJbnQKICBjcmVhdGVkX2F0ICAgIERhdGVUaW1lPyAgICAgIEBkYi5UaW1lc3RhbXAoMCkKICB1cGRhdGVkX2F0ICAgIERhdGVUaW1lPyAgICAgIEBkYi5UaW1lc3RhbXAoMCkKICByY2hfZW1wbGVhZG9zIHJjaF9lbXBsZWFkb3M/IEByZWxhdGlvbihmaWVsZHM6IFtpZF9lbXBsZWFkb10sIHJlZmVyZW5jZXM6IFtpZF0sIG9uRGVsZXRlOiBSZXN0cmljdCwgb25VcGRhdGU6IFJlc3RyaWN0LCBtYXA6ICJyY2ZfZW1wbGVhZG9fa2FyZGV4X2lkX2VtcGxlYWRvX2ZvcmVpZ24iKQogIHJjZl9rYXJkZXggICAgcmNmX2thcmRleD8gICAgQHJlbGF0aW9uKGZpZWxkczogW2lkX2thcmRleF0sIHJlZmVyZW5jZXM6IFtpZF0sIG9uRGVsZXRlOiBSZXN0cmljdCwgb25VcGRhdGU6IFJlc3RyaWN0LCBtYXA6ICJyY2ZfZW1wbGVhZG9fa2FyZGV4X2lkX2thcmRleF9mb3JlaWduIikKCiAgQEBpbmRleChbaWRfZW1wbGVhZG9dLCBtYXA6ICJyY2ZfZW1wbGVhZG9fa2FyZGV4X2lkX2VtcGxlYWRvX2ZvcmVpZ24iKQogIEBAaW5kZXgoW2lkX2thcmRleF0sIG1hcDogInJjZl9lbXBsZWFkb19rYXJkZXhfaWRfa2FyZGV4X2ZvcmVpZ24iKQp9Cgptb2RlbCByY2ZfaW5jaWRlbmNpYXMgewogIGlkICAgICAgICAgICAgICAgICAgICAgIEJpZ0ludCAgICAgICAgICAgICAgICAgICAgQGlkIEBkZWZhdWx0KGF1dG9pbmNyZW1lbnQoKSkgQGRiLlVuc2lnbmVkQmlnSW50CiAgZmVjaGFfaW5pY2lvICAgICAgICAgICAgRGF0ZVRpbWU/ICAgICAgICAgICAgICAgICBAZGIuRGF0ZQogIGZlY2hhX2ZpbiAgICAgICAgICAgICAgIERhdGVUaW1lPyAgICAgICAgICAgICAgICAgQGRiLkRhdGUKICBmZWNoYV9wcmV2ZW50aXZvICAgICAgICBEYXRlVGltZT8gICAgICAgICAgICAgICAgIEBkYi5EYXRlCiAgb3JkZW5fc2VydmljaW8gICAgICAgICAgU3RyaW5nPwogIG5vX3ZhbGUgICAgICAgICAgICAgICAgIFN0cmluZz8KICBzZXJ2aWNpbyAgICAgICAgICAgICAgICByY2ZfaW5jaWRlbmNpYXNfc2VydmljaW8/CiAgZGVzY3JpcGNpb25fYWN0aXZpZGFkICAgU3RyaW5nPyAgICAgICAgICAgICAgICAgICBAZGIuTG9uZ1RleHQKICBtYW5vX29icmEgICAgICAgICAgICAgICBGbG9hdD8KICByZWZhY2Npb25lcyAgICAgICAgICAgICBGbG9hdD8KICB0b3RhbCAgICAgICAgICAgICAgICAgICBGbG9hdD8KICBpZF9saXN0YSAgICAgICAgICAgICAgICBCaWdJbnQ/ICAgICAgICAgICAgICAgICAgIEBkYi5VbnNpZ25lZEJpZ0ludAogIGlkX3JlZ2lzdHJvICAgICAgICAgICAgIEJpZ0ludCAgICAgICAgICAgICAgICAgICAgQGRiLlVuc2lnbmVkQmlnSW50CiAgaWRfcHJvdmVlZG9yICAgICAgICAgICAgSW50PwogIGlkX3R1cm5vICAgICAgICAgICAgICAgIEludD8gICAgICAgICAgICAgICAgICAgICAgQGRiLlVuc2lnbmVkSW50CiAgY3JlYXRlZF9hdCAgICAgICAgICAgICAgRGF0ZVRpbWU/ICAgICAgICAgICAgICAgICBAZGIuVGltZXN0YW1wKDApCiAgdXBkYXRlZF9hdCAgICAgICAgICAgICAgRGF0ZVRpbWU/ICAgICAgICAgICAgICAgICBAZGIuVGltZXN0YW1wKDApCiAgZGVsZXRlZF9hdCAgICAgICAgICAgICAgRGF0ZVRpbWU/ICAgICAgICAgICAgICAgICBAZGIuVGltZXN0YW1wKDApCiAgcmNmX2VtcGxlYWRvX2luY2lkZW5jaWEgcmNmX2VtcGxlYWRvX2luY2lkZW5jaWFbXQogIHJjZl9saXN0YXMgICAgICAgICAgICAgIHJjZl9saXN0YXM/ICAgICAgICAgICAgICAgQHJlbGF0aW9uKGZpZWxkczogW2lkX2xpc3RhXSwgcmVmZXJlbmNlczogW2lkXSwgb25EZWxldGU6IFJlc3RyaWN0LCBvblVwZGF0ZTogUmVzdHJpY3QsIG1hcDogInJjZl9pbmNpZGVuY2lhc19pZF9saXN0YV9mb3JlaWduIikKICByY2ZfYmllbmVzICAgICAgICAgICAgICByY2ZfYmllbmVzICAgICAgICAgICAgICAgIEByZWxhdGlvbihmaWVsZHM6IFtpZF9yZWdpc3Ryb10sIHJlZmVyZW5jZXM6IFtpZF0sIG9uVXBkYXRlOiBSZXN0cmljdCwgbWFwOiAicmNmX2luY2lkZW5jaWFzX2lkX3JlZ2lzdHJvX2ZvcmVpZ24iKQogIGNhdF90dXJub3MgICAgICAgICAgICAgIGNhdF90dXJub3M/ICAgICAgICAgICAgICAgQHJlbGF0aW9uKGZpZWxkczogW2lkX3R1cm5vXSwgcmVmZXJlbmNlczogW2lkXSwgb25EZWxldGU6IFJlc3RyaWN0LCBvblVwZGF0ZTogUmVzdHJpY3QsIG1hcDogInJjZl9pbmNpZGVuY2lhc19pZF90dXJub19mb3JlaWduIikKCiAgQEBpbmRleChbaWRfbGlzdGFdLCBtYXA6ICJyY2ZfaW5jaWRlbmNpYXNfaWRfbGlzdGFfZm9yZWlnbiIpCiAgQEBpbmRleChbaWRfcmVnaXN0cm9dLCBtYXA6ICJyY2ZfaW5jaWRlbmNpYXNfaWRfcmVnaXN0cm9fZm9yZWlnbiIpCiAgQEBpbmRleChbaWRfdHVybm9dLCBtYXA6ICJyY2ZfaW5jaWRlbmNpYXNfaWRfdHVybm9fZm9yZWlnbiIpCn0KCm1vZGVsIHJjZl9rYXJkZXggewogIGlkICAgICAgICAgICAgICAgICAgICBJbnQgICAgICAgICAgICAgICAgICAgICAgQGlkIEBkZWZhdWx0KGF1dG9pbmNyZW1lbnQoKSkgQGRiLlVuc2lnbmVkSW50CiAgZmVjaGFfaW5pY2lvICAgICAgICAgIERhdGVUaW1lPyAgICAgICAgICAgICAgICBAZGIuRGF0ZVRpbWUoMCkKICBmZWNoYV9maW4gICAgICAgICAgICAgRGF0ZVRpbWU/ICAgICAgICAgICAgICAgIEBkYi5EYXRlVGltZSgwKQogIGZlY2hhX3ByZXZlbnRpdm8gICAgICBEYXRlVGltZT8gICAgICAgICAgICAgICAgQGRiLkRhdGVUaW1lKDApCiAgb3JkZW5fc2VydmljaW8gICAgICAgIFN0cmluZz8KICBub192YWxlICAgICAgICAgICAgICAgU3RyaW5nPwogIHNlcnZpY2lvICAgICAgICAgICAgICByY2Zfa2FyZGV4X3NlcnZpY2lvCiAgZGVzY3JpcGNpb25fYWN0aXZpZGFkIFN0cmluZz8gICAgICAgICAgICAgICAgICBAZGIuVGV4dAogIG1hbm9fb2JyYSAgICAgICAgICAgICBEZWNpbWFsPyAgICAgICAgICAgICAgICAgQGRiLkRlY2ltYWwoMTAsIDIpCiAgcmVmYWNjaW9uZXMgICAgICAgICAgIERlY2ltYWw/ICAgICAgICAgICAgICAgICBAZGIuRGVjaW1hbCgxMCwgMikKICB0b3RhbCAgICAgICAgICAgICAgICAgRGVjaW1hbD8gICAgICAgICAgICAgICAgIEBkYi5EZWNpbWFsKDEwLCAyKQogIHRpcG9fc2VydmljaW8gICAgICAgICByY2Zfa2FyZGV4X3RpcG9fc2VydmljaW8KICBpZF9wcm92ZWVkb3IgICAgICAgICAgSW50PyAgICAgICAgICAgICAgICAgICAgIEBkYi5VbnNpZ25lZEludAogIGlkX2VxdWlwbyAgICAgICAgICAgICBJbnQ/ICAgICAgICAgICAgICAgICAgICAgQGRiLlVuc2lnbmVkSW50CiAgaWRfdHVybm8gICAgICAgICAgICAgIEludD8gICAgICAgICAgICAgICAgICAgICBAZGIuVW5zaWduZWRJbnQKICBjcmVhdGVkX2F0ICAgICAgICAgICAgRGF0ZVRpbWU/ICAgICAgICAgICAgICAgIEBkYi5UaW1lc3RhbXAoMCkKICB1cGRhdGVkX2F0ICAgICAgICAgICAgRGF0ZVRpbWU/ICAgICAgICAgICAgICAgIEBkYi5UaW1lc3RhbXAoMCkKICBkZWxldGVkX2F0ICAgICAgICAgICAgRGF0ZVRpbWU/ICAgICAgICAgICAgICAgIEBkYi5UaW1lc3RhbXAoMCkKICByY2ZfZW1wbGVhZG9fa2FyZGV4ICAgcmNmX2VtcGxlYWRvX2thcmRleFtdCiAgY2F0X2VxdWlwb3MgICAgICAgICAgIGNhdF9lcXVpcG9zPyAgICAgICAgICAgICBAcmVsYXRpb24oZmllbGRzOiBbaWRfZXF1aXBvXSwgcmVmZXJlbmNlczogW2lkXSwgb25EZWxldGU6IFJlc3RyaWN0LCBvblVwZGF0ZTogUmVzdHJpY3QsIG1hcDogInJjZl9rYXJkZXhfaWRfZXF1aXBvX2ZvcmVpZ24iKQogIGNhdF9wcm92ZWVkb3JlcyAgICAgICBjYXRfcHJvdmVlZG9yZXM/ICAgICAgICAgQHJlbGF0aW9uKGZpZWxkczogW2lkX3Byb3ZlZWRvcl0sIHJlZmVyZW5jZXM6IFtpZF0sIG9uRGVsZXRlOiBSZXN0cmljdCwgb25VcGRhdGU6IFJlc3RyaWN0LCBtYXA6ICJyY2Zfa2FyZGV4X2lkX3Byb3ZlZWRvcl9mb3JlaWduIikKICBjYXRfdHVybm9zICAgICAgICAgICAgY2F0X3R1cm5vcz8gICAgICAgICAgICAgIEByZWxhdGlvbihmaWVsZHM6IFtpZF90dXJub10sIHJlZmVyZW5jZXM6IFtpZF0sIG9uRGVsZXRlOiBSZXN0cmljdCwgb25VcGRhdGU6IFJlc3RyaWN0LCBtYXA6ICJyY2Zfa2FyZGV4X2lkX3R1cm5vX2ZvcmVpZ24iKQoKICBAQGluZGV4KFtpZF9lcXVpcG9dLCBtYXA6ICJyY2Zfa2FyZGV4X2lkX2VxdWlwb19mb3JlaWduIikKICBAQGluZGV4KFtpZF9wcm92ZWVkb3JdLCBtYXA6ICJyY2Zfa2FyZGV4X2lkX3Byb3ZlZWRvcl9mb3JlaWduIikKICBAQGluZGV4KFtpZF90dXJub10sIG1hcDogInJjZl9rYXJkZXhfaWRfdHVybm9fZm9yZWlnbiIpCn0KCm1vZGVsIHJjZl9saXN0YXMgewogIGlkICAgICAgICAgICAgICBCaWdJbnQgICAgICAgICAgICBAaWQgQGRlZmF1bHQoYXV0b2luY3JlbWVudCgpKSBAZGIuVW5zaWduZWRCaWdJbnQKICBub21icmUgICAgICAgICAgU3RyaW5nCiAgdGlwbyAgICAgICAgICAgIFN0cmluZwogIGNyZWF0ZWRfYXQgICAgICBEYXRlVGltZT8gICAgICAgICBAZGIuVGltZXN0YW1wKDApCiAgdXBkYXRlZF9hdCAgICAgIERhdGVUaW1lPyAgICAgICAgIEBkYi5UaW1lc3RhbXAoMCkKICBkZWxldGVkX2F0ICAgICAgRGF0ZVRpbWU/ICAgICAgICAgQGRiLlRpbWVzdGFtcCgwKQogIHJjZl9iaWVuZXMgICAgICByY2ZfYmllbmVzW10KICByY2ZfaW5jaWRlbmNpYXMgcmNmX2luY2lkZW5jaWFzW10KfQoKbW9kZWwgcmNmX3Jlc2d1YXJkbyB7CiAgaWQgICAgICAgICAgICAgIEludCAgICAgICAgICAgICAgICBAaWQgQGRlZmF1bHQoYXV0b2luY3JlbWVudCgpKSBAZGIuVW5zaWduZWRJbnQKICB0aXBvICAgICAgICAgICAgcmNmX3Jlc2d1YXJkb190aXBvCiAgZmVjaGFfcmVzZ3VhcmRvIERhdGVUaW1lPyAgICAgICAgICBAZGIuRGF0ZVRpbWUoMCkKICBvYnNlcnZhY2lvbmVzICAgU3RyaW5nPyAgICAgICAgICAgIEBkYi5UZXh0CiAgaWRfZXF1aXBvICAgICAgIEludD8gICAgICAgICAgICAgICBAZGIuVW5zaWduZWRJbnQKICBpZF9lbXBsZWFkbyAgICAgSW50PyAgICAgICAgICAgICAgIEBkYi5VbnNpZ25lZEludAogIGNyZWF0ZWRfYXQgICAgICBEYXRlVGltZT8gICAgICAgICAgQGRiLlRpbWVzdGFtcCgwKQogIHVwZGF0ZWRfYXQgICAgICBEYXRlVGltZT8gICAgICAgICAgQGRiLlRpbWVzdGFtcCgwKQogIHJjaF9lbXBsZWFkb3MgICByY2hfZW1wbGVhZG9zPyAgICAgQHJlbGF0aW9uKGZpZWxkczogW2lkX2VtcGxlYWRvXSwgcmVmZXJlbmNlczogW2lkXSwgb25EZWxldGU6IFJlc3RyaWN0LCBvblVwZGF0ZTogUmVzdHJpY3QsIG1hcDogInJjZl9yZXNndWFyZG9faWRfZW1wbGVhZG9fZm9yZWlnbiIpCiAgY2F0X2VxdWlwb3MgICAgIGNhdF9lcXVpcG9zPyAgICAgICBAcmVsYXRpb24oZmllbGRzOiBbaWRfZXF1aXBvXSwgcmVmZXJlbmNlczogW2lkXSwgb25EZWxldGU6IFJlc3RyaWN0LCBvblVwZGF0ZTogUmVzdHJpY3QsIG1hcDogInJjZl9yZXNndWFyZG9faWRfZXF1aXBvX2ZvcmVpZ24iKQoKICBAQGluZGV4KFtpZF9lbXBsZWFkb10sIG1hcDogInJjZl9yZXNndWFyZG9faWRfZW1wbGVhZG9fZm9yZWlnbiIpCiAgQEBpbmRleChbaWRfZXF1aXBvXSwgbWFwOiAicmNmX3Jlc2d1YXJkb19pZF9lcXVpcG9fZm9yZWlnbiIpCn0KCm1vZGVsIHJjaF9jaGVjYWRhcyB7CiAgaWQgICAgICAgICBJbnQgICAgICAgQGlkIEBkZWZhdWx0KGF1dG9pbmNyZW1lbnQoKSkgQGRiLlVuc2lnbmVkSW50CiAgcW5hICAgICAgICBTdHJpbmcgICAgQGRiLkNoYXIoNCkKICBtYXRyaWN1bGEgIFN0cmluZyAgICBAZGIuQ2hhcig0KQogIGZlY2hhICAgICAgU3RyaW5nICAgIEBkYi5DaGFyKDEwKQogIGluY2lkZW5jaWEgU3RyaW5nICAgIEBkYi5DaGFyKDMpCiAgaG9yYSAgICAgICBTdHJpbmcgICAgQGRiLkNoYXIoNSkKICBlc3RhZG8gICAgIFN0cmluZyAgICBAZGIuQ2hhcigxKQogIGhvcmFwZXIgICAgRGVjaW1hbCAgIEBkYi5EZWNpbWFsKDQsIDIpCiAgY2hlY28gICAgICBTdHJpbmcgICAgQGRiLkNoYXIoMSkKICBvcmlnZW4gICAgIFN0cmluZyAgICBAZGIuQ2hhcigxKQogIGNyZWF0ZWRfYXQgRGF0ZVRpbWU/IEBkYi5UaW1lc3RhbXAoMCkKICB1cGRhdGVkX2F0IERhdGVUaW1lPyBAZGIuVGltZXN0YW1wKDApCn0KCm1vZGVsIHJjaF9jaGVjYWRhc19iaW9tZXRyaWNvIHsKICBpZCAgICAgICAgICAgICAgICAgICAgSW50ICAgICAgQGlkIEBkZWZhdWx0KGF1dG9pbmNyZW1lbnQoKSkgQGRiLlVuc2lnbmVkSW50CiAgRW1wbGVhZG9Bc2lzdGVuY2lhSWQgIEJpZ0ludAogIEVtcGxlYWRvSWQgICAgICAgICAgICBJbnQgICAgICBAZGIuVW5zaWduZWRJbnQKICBUZXJtaW5hbElkICAgICAgICAgICAgSW50ICAgICAgQGRiLlVuc2lnbmVkSW50CiAgRmVjaGFSZWcgICAgICAgICAgICAgIERhdGVUaW1lIEBkYi5EYXRlCiAgSG9yYVJlZyAgICAgICAgICAgICAgIERhdGVUaW1lIEBkYi5UaW1lKDApCiAgQW5pbyAgICAgICAgICAgICAgICAgIEludCAgICAgIEBkYi5VbnNpZ25lZEludAogIE1lcyAgICAgICAgICAgICAgICAgICBJbnQgICAgICBAZGIuVGlueUludAogIERpYSAgICAgICAgICAgICAgICAgICBJbnQgICAgICBAZGIuVGlueUludAogIEhvcmEgICAgICAgICAgICAgICAgICBJbnQgICAgICBAZGIuVGlueUludAogIE1pbnV0byAgICAgICAgICAgICAgICBJbnQgICAgICBAZGIuVGlueUludAogIFNlZ3VuZG8gICAgICAgICAgICAgICBJbnQgICAgICBAZGIuVGlueUludAogIHJlZyAgICAgICAgICAgICAgICAgICBCeXRlcyAgICBAZGIuQmxvYgogIEZlY2hhQWx0YSAgICAgICAgICAgICBEYXRlVGltZSBAZGIuRGF0ZVRpbWUoMCkKICBGZWNoYVVsdEFjdHVhbGl6YWNpb24gRGF0ZVRpbWUgQGRiLkRhdGVUaW1lKDApCiAgSm9ybmFkYUlkICAgICAgICAgICAgIEludAogIFRvbGVyYW5jaWFUaXBvSUQgICAgICBJbnQgICAgICBAZGIuVGlueUludAogIEluY2lkZW5jaWFUaXBvICAgICAgICBJbnQgICAgICBAZGIuVGlueUludAp9Cgptb2RlbCByY2hfZW1wbGVhZG9fZXNwZWNpYWxpZGFkIHsKICBpZCAgICAgICAgICAgICAgICAgQmlnSW50ICAgICAgICAgICAgICBAaWQgQGRlZmF1bHQoYXV0b2luY3JlbWVudCgpKSBAZGIuVW5zaWduZWRCaWdJbnQKICBpZF9tZWRpY28gICAgICAgICAgSW50PyAgICAgICAgICAgICAgICBAZGIuVW5zaWduZWRJbnQKICBpZF9lc3BlY2lhbGlkYWQgICAgSW50PyAgICAgICAgICAgICAgICBAZGIuVW5zaWduZWRJbnQKICBjZWR1bGFfcHJvZmVzaW9uYWwgU3RyaW5nPwogIGNyZWF0ZWRfYXQgICAgICAgICBEYXRlVGltZT8gICAgICAgICAgIEBkYi5UaW1lc3RhbXAoMCkKICB1cGRhdGVkX2F0ICAgICAgICAgRGF0ZVRpbWU/ICAgICAgICAgICBAZGIuVGltZXN0YW1wKDApCiAgZGVsZXRlZF9hdCAgICAgICAgIERhdGVUaW1lPyAgICAgICAgICAgQGRiLlRpbWVzdGFtcCgwKQogIGNhdF9lc3BlY2lhbGlkYWRlcyBjYXRfZXNwZWNpYWxpZGFkZXM/IEByZWxhdGlvbihmaWVsZHM6IFtpZF9lc3BlY2lhbGlkYWRdLCByZWZlcmVuY2VzOiBbaWRdLCBvbkRlbGV0ZTogUmVzdHJpY3QsIG9uVXBkYXRlOiBSZXN0cmljdCwgbWFwOiAicmNoX2VtcGxlYWRvX2VzcGVjaWFsaWRhZF9pZF9lc3BlY2lhbGlkYWRfZm9yZWlnbiIpCiAgcmNoX2VtcGxlYWRvcyAgICAgIHJjaF9lbXBsZWFkb3M/ICAgICAgQHJlbGF0aW9uKGZpZWxkczogW2lkX21lZGljb10sIHJlZmVyZW5jZXM6IFtpZF0sIG9uRGVsZXRlOiBSZXN0cmljdCwgb25VcGRhdGU6IFJlc3RyaWN0LCBtYXA6ICJyY2hfZW1wbGVhZG9fZXNwZWNpYWxpZGFkX2lkX21lZGljb19mb3JlaWduIikKCiAgQEBpbmRleChbaWRfZXNwZWNpYWxpZGFkXSwgbWFwOiAicmNoX2VtcGxlYWRvX2VzcGVjaWFsaWRhZF9pZF9lc3BlY2lhbGlkYWRfZm9yZWlnbiIpCiAgQEBpbmRleChbaWRfbWVkaWNvXSwgbWFwOiAicmNoX2VtcGxlYWRvX2VzcGVjaWFsaWRhZF9pZF9tZWRpY29fZm9yZWlnbiIpCn0KCm1vZGVsIHJjaF9lbXBsZWFkb192YWNhY2lvbmVzIHsKICBpZCAgICAgICAgICAgIEJpZ0ludCAgICAgICAgIEBpZCBAZGVmYXVsdChhdXRvaW5jcmVtZW50KCkpIEBkYi5VbnNpZ25lZEJpZ0ludAogIGlkX2VtcGxlYWRvICAgSW50PyAgICAgICAgICAgQGRiLlVuc2lnbmVkSW50CiAgdGlwbyAgICAgICAgICBTdHJpbmcgICAgICAgICBAZGIuVmFyQ2hhcigyMCkKICByb2wgICAgICAgICAgIFN0cmluZyAgICAgICAgIEBkYi5WYXJDaGFyKDIwKQogIGZlY2hhX2luaWNpbyAgRGF0ZVRpbWUgICAgICAgQGRiLkRhdGUKICBmZWNoYV9maW4gICAgIERhdGVUaW1lICAgICAgIEBkYi5EYXRlCiAgY3JlYXRlZF9hdCAgICBEYXRlVGltZT8gICAgICBAZGIuVGltZXN0YW1wKDApCiAgdXBkYXRlZF9hdCAgICBEYXRlVGltZT8gICAgICBAZGIuVGltZXN0YW1wKDApCiAgZGVsZXRlZF9hdCAgICBEYXRlVGltZT8gICAgICBAZGIuVGltZXN0YW1wKDApCiAgcmNoX2VtcGxlYWRvcyByY2hfZW1wbGVhZG9zPyBAcmVsYXRpb24oZmllbGRzOiBbaWRfZW1wbGVhZG9dLCByZWZlcmVuY2VzOiBbaWRdLCBvbkRlbGV0ZTogUmVzdHJpY3QsIG9uVXBkYXRlOiBSZXN0cmljdCwgbWFwOiAicmNoX2VtcGxlYWRvX3ZhY2FjaW9uZXNfaWRfZW1wbGVhZG9fZm9yZWlnbiIpCgogIEBAaW5kZXgoW2lkX2VtcGxlYWRvXSwgbWFwOiAicmNoX2VtcGxlYWRvX3ZhY2FjaW9uZXNfaWRfZW1wbGVhZG9fZm9yZWlnbiIpCn0KCm1vZGVsIHJjaF9lbXBsZWFkb3MgewogIGlkICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSW50ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBpZCBAZGVmYXVsdChhdXRvaW5jcmVtZW50KCkpIEBkYi5VbnNpZ25lZEludAogIG1hdHJpY3VsYSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSW50PwogIG1hZHJlICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmNoX2VtcGxlYWRvc19tYWRyZQogIGhvcmFfZW50cmFkYSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRGF0ZVRpbWUgICAgICAgICAgICAgICAgICAgICAgICAgIEBkYi5UaW1lKDApCiAgaG9yYV9zYWxpZGEgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBEYXRlVGltZSAgICAgICAgICAgICAgICAgICAgICAgICAgQGRiLlRpbWUoMCkKICBwYWdvX3JpZXNnbyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJjaF9lbXBsZWFkb3NfcGFnb19yaWVzZ28KICBjZWR1bGFfcHJvZmVzaW9uYWwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFN0cmluZz8gICAgICAgICAgICAgICAgICAgICAgICAgICBAZGIuQ2hhcigxMCkKICBjaGVjYSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJjaF9lbXBsZWFkb3NfY2hlY2EKICBjdWVudGFfYmFuY2FyaWEgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFN0cmluZz8KICBhY3Rpdm8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEJvb2xlYW4gICAgICAgICAgICAgICAgICAgICAgICAgICBAZGVmYXVsdCh0cnVlKQogIGZlY2hhX2FsdGEgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRGF0ZVRpbWU/ICAgICAgICAgICAgICAgICAgICAgICAgIEBkYi5EYXRlVGltZSgwKQogIGZlY2hhX2Jhc2UgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRGF0ZVRpbWU/ICAgICAgICAgICAgICAgICAgICAgICAgIEBkYi5EYXRlVGltZSgwKQogIGZlY2hhX2JhamEgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRGF0ZVRpbWU/ICAgICAgICAgICAgICAgICAgICAgICAgIEBkYi5EYXRlVGltZSgwKQogIG9ic2VydmFjaW9uZXMgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU3RyaW5nICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBkYi5UZXh0CiAgbW90aXZvX2JhamEgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTdHJpbmc/ICAgICAgICAgICAgICAgICAgICAgICAgICAgQGRiLlRleHQKICBtZWRpY28gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFN0cmluZz8gICAgICAgICAgICAgICAgICAgICAgICAgICBAZGIuQ2hhcigxKQogIGd1YXJkaWFzICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU3RyaW5nPwogIG5vbWJyYW1pZW50byAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmNoX2VtcGxlYWRvc19ub21icmFtaWVudG8gICAgICAgIEBkZWZhdWx0KE5PKQogIGF0ZW5jaW9uX21lZGljYSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU3RyaW5nPwogIG51bWVyb19hZmlsaWFjaW9uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU3RyaW5nPwogIGZvdG8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU3RyaW5nPyAgICAgICAgICAgICAgICAgICAgICAgICAgIEBkYi5WYXJDaGFyKDUwMCkKICBpZF9wZXJzb25hICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEludCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBAZGIuVW5zaWduZWRJbnQKICBpZF90aXBvZW1wbGVhZG8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEludCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBAZGIuVW5zaWduZWRJbnQKICBpZF9wbGF6YSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEludCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBAZGIuVW5zaWduZWRJbnQKICBpZF9wZW5zaW9uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEludCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBAZGIuVW5zaWduZWRJbnQKICBpZF90aXBvcmVjdXJzbyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEludCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBAZGIuVW5zaWduZWRJbnQKICBpZF9wdWVzdG8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEludCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBAZGIuVW5zaWduZWRJbnQKICBpZF9kZXBhcnRhbWVudG8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEludCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBAZGIuVW5zaWduZWRJbnQKICBpZF90dXJubyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEludCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBAZGIuVW5zaWduZWRJbnQKICBpZF9jYXRlZ29yaWEgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEludCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBAZGIuVW5zaWduZWRJbnQKICBpZF9zaW5kaWNhdG8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEludCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBAZGIuVW5zaWduZWRJbnQKICBpZF9iYW5jbyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEludD8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBAZGIuVW5zaWduZWRJbnQKICBpZF9maW5hbmNpYW1pZW50byAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEludCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBAZGIuVW5zaWduZWRJbnQKICBpZF9tb3Rpdm9fYmFqYSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEludCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBAZGIuVW5zaWduZWRJbnQKICBpZFVzZXIgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEludD8KICBjcmVhdGVkX2F0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIERhdGVUaW1lPyAgICAgICAgICAgICAgICAgICAgICAgICBAZGIuVGltZXN0YW1wKDApCiAgdXBkYXRlZF9hdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBEYXRlVGltZT8gICAgICAgICAgICAgICAgICAgICAgICAgQGRiLlRpbWVzdGFtcCgwKQogIGRlbGV0ZWRfYXQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRGF0ZVRpbWU/ICAgICAgICAgICAgICAgICAgICAgICAgIEBkYi5UaW1lc3RhbXAoMCkKICBjYXRfY29uc3VsdGFfaG9yYXJpb3MgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhdF9jb25zdWx0YV9ob3Jhcmlvc1tdCiAgY2F0X2RlcGFydGFtZW50b19lbXBsZWFkbyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXRfZGVwYXJ0YW1lbnRvX2VtcGxlYWRvW10KICBocHpfY2FtYV9oaXN0b3JpYWwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhwel9jYW1hX2hpc3RvcmlhbFtdCiAgaHB6X2NhdGV0ZXJfaW5zdGFsYWNpb25faHB6X2NhdGV0ZXJfaW5zdGFsYWNpb25faWRfaW5zdGFsb1RvcmNoX2VtcGxlYWRvcyAgICAgICAgICAgICAgICBocHpfY2F0ZXRlcl9pbnN0YWxhY2lvbltdICAgICAgICAgQHJlbGF0aW9uKCJocHpfY2F0ZXRlcl9pbnN0YWxhY2lvbl9pZF9pbnN0YWxvVG9yY2hfZW1wbGVhZG9zIikKICBocHpfY2F0ZXRlcl9pbnN0YWxhY2lvbl9ocHpfY2F0ZXRlcl9pbnN0YWxhY2lvbl9pZF9yZXRpcm9Ub3JjaF9lbXBsZWFkb3MgICAgICAgICAgICAgICAgIGhwel9jYXRldGVyX2luc3RhbGFjaW9uW10gICAgICAgICBAcmVsYXRpb24oImhwel9jYXRldGVyX2luc3RhbGFjaW9uX2lkX3JldGlyb1RvcmNoX2VtcGxlYWRvcyIpCiAgaHB6X2NpdGFzX2hpc3RvcmlhbCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBocHpfY2l0YXNfaGlzdG9yaWFsW10gICAgICAgICAgICAgQGlnbm9yZQogIGhwel9keF9oaXN0b3JpYWwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHB6X2R4X2hpc3RvcmlhbFtdCiAgaHB6X2luZGljYWNpb25lc19tZWRpY2FzX2hwel9pbmRpY2FjaW9uZXNfbWVkaWNhc19pZF9hZHNjcml0b1RvcmNoX2VtcGxlYWRvcyAgICAgICAgICAgICBocHpfaW5kaWNhY2lvbmVzX21lZGljYXNbXSAgICAgICAgQHJlbGF0aW9uKCJocHpfaW5kaWNhY2lvbmVzX21lZGljYXNfaWRfYWRzY3JpdG9Ub3JjaF9lbXBsZWFkb3MiKQogIGhwel9pbmRpY2FjaW9uZXNfbWVkaWNhc19ocHpfaW5kaWNhY2lvbmVzX21lZGljYXNfaWRfcmVzaWRlbnRlVG9yY2hfZW1wbGVhZG9zICAgICAgICAgICAgaHB6X2luZGljYWNpb25lc19tZWRpY2FzW10gICAgICAgIEByZWxhdGlvbigiaHB6X2luZGljYWNpb25lc19tZWRpY2FzX2lkX3Jlc2lkZW50ZVRvcmNoX2VtcGxlYWRvcyIpCiAgaHB6X2luZ3Jlc29fY29uc3VsdGEgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBocHpfaW5ncmVzb19jb25zdWx0YVtdCiAgaHB6X2luZ3Jlc29faG9zcGl0YWxhcmlvX2hwel9pbmdyZXNvX2hvc3BpdGFsYXJpb19pZF9tZWRpY29fY29udHJhcmVmaWVyZVRvcmNoX2VtcGxlYWRvcyBocHpfaW5ncmVzb19ob3NwaXRhbGFyaW9bXSAgICAgICAgQHJlbGF0aW9uKCJocHpfaW5ncmVzb19ob3NwaXRhbGFyaW9faWRfbWVkaWNvX2NvbnRyYXJlZmllcmVUb3JjaF9lbXBsZWFkb3MiKQogIGhwel9pbmdyZXNvX2hvc3BpdGFsYXJpb19ocHpfaW5ncmVzb19ob3NwaXRhbGFyaW9faWRfbWVkaWNvVG9yY2hfZW1wbGVhZG9zICAgICAgICAgICAgICAgaHB6X2luZ3Jlc29faG9zcGl0YWxhcmlvW10gICAgICAgIEByZWxhdGlvbigiaHB6X2luZ3Jlc29faG9zcGl0YWxhcmlvX2lkX21lZGljb1RvcmNoX2VtcGxlYWRvcyIpCiAgaHB6X3BhY2llbnRlX2VzdF9zb2Npb2Vjb25vbWljbyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBocHpfcGFjaWVudGVfZXN0X3NvY2lvZWNvbm9taWNvW10KICBocHpfcGF0b2xvZ2lhX2VzdHVkaW9zICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhwel9wYXRvbG9naWFfZXN0dWRpb3NbXQogIGludl9iaWVuZXNfcmVzZ3VhcmRvcyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW52X2JpZW5lc19yZXNndWFyZG9zW10KICBpbnZfY2F0X3ViaWNhY2lvbmVzICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGludl9jYXRfdWJpY2FjaW9uZXNbXQogIGludl9jb3J0ZV9lbXBsZWFkbyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW52X2NvcnRlX2VtcGxlYWRvW10KICBpbnZfZGVwYXJ0YW1lbnRvX2VtcGxlYWRvICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGludl9kZXBhcnRhbWVudG9fZW1wbGVhZG9bXQogIHJjZl9lbXBsZWFkb19pbmNpZGVuY2lhICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmNmX2VtcGxlYWRvX2luY2lkZW5jaWFbXQogIHJjZl9lbXBsZWFkb19rYXJkZXggICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmNmX2VtcGxlYWRvX2thcmRleFtdCiAgcmNmX3Jlc2d1YXJkbyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByY2ZfcmVzZ3VhcmRvW10KICByY2hfZW1wbGVhZG9fZXNwZWNpYWxpZGFkICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJjaF9lbXBsZWFkb19lc3BlY2lhbGlkYWRbXQogIHJjaF9lbXBsZWFkb192YWNhY2lvbmVzICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmNoX2VtcGxlYWRvX3ZhY2FjaW9uZXNbXQogIGNhdF9iYW5jb3MgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2F0X2JhbmNvcz8gICAgICAgICAgICAgICAgICAgICAgIEByZWxhdGlvbihmaWVsZHM6IFtpZF9iYW5jb10sIHJlZmVyZW5jZXM6IFtpZF0sIG9uRGVsZXRlOiBSZXN0cmljdCwgb25VcGRhdGU6IFJlc3RyaWN0LCBtYXA6ICJyY2hfZW1wbGVhZG9zX2lkX2JhbmNvX2ZvcmVpZ24iKQogIGNhdF9jYXRlZ29yaWFzICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2F0X2NhdGVnb3JpYXMgICAgICAgICAgICAgICAgICAgIEByZWxhdGlvbihmaWVsZHM6IFtpZF9jYXRlZ29yaWFdLCByZWZlcmVuY2VzOiBbaWRdLCBvblVwZGF0ZTogUmVzdHJpY3QsIG1hcDogInJjaF9lbXBsZWFkb3NfaWRfY2F0ZWdvcmlhX2ZvcmVpZ24iKQogIGNhdF9kZXBhcnRhbWVudG9zICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2F0X2RlcGFydGFtZW50b3MgICAgICAgICAgICAgICAgIEByZWxhdGlvbihmaWVsZHM6IFtpZF9kZXBhcnRhbWVudG9dLCByZWZlcmVuY2VzOiBbaWRdLCBvblVwZGF0ZTogUmVzdHJpY3QsIG1hcDogInJjaF9lbXBsZWFkb3NfaWRfZGVwYXJ0YW1lbnRvX2ZvcmVpZ24iKQogIGNhdF9mdWVudGVzX2ZpbmFuY2lhbWllbnRvICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2F0X2Z1ZW50ZXNfZmluYW5jaWFtaWVudG8gICAgICAgIEByZWxhdGlvbihmaWVsZHM6IFtpZF9maW5hbmNpYW1pZW50b10sIHJlZmVyZW5jZXM6IFtpZF0sIG9uVXBkYXRlOiBSZXN0cmljdCwgbWFwOiAicmNoX2VtcGxlYWRvc19pZF9maW5hbmNpYW1pZW50b19mb3JlaWduIikKICBjYXRfbW90aXZvc19iYWphICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhdF9tb3Rpdm9zX2JhamEgICAgICAgICAgICAgICAgICBAcmVsYXRpb24oZmllbGRzOiBbaWRfbW90aXZvX2JhamFdLCByZWZlcmVuY2VzOiBbaWRdLCBvblVwZGF0ZTogUmVzdHJpY3QsIG1hcDogInJjaF9lbXBsZWFkb3NfaWRfbW90aXZvX2JhamFfZm9yZWlnbiIpCiAgY2F0X3BlbnNpb25lcyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXRfcGVuc2lvbmVzICAgICAgICAgICAgICAgICAgICAgQHJlbGF0aW9uKGZpZWxkczogW2lkX3BlbnNpb25dLCByZWZlcmVuY2VzOiBbaWRdLCBvblVwZGF0ZTogUmVzdHJpY3QsIG1hcDogInJjaF9lbXBsZWFkb3NfaWRfcGVuc2lvbl9mb3JlaWduIikKICBjbXBfcGVyc29uYSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNtcF9wZXJzb25hICAgICAgICAgICAgICAgICAgICAgICBAcmVsYXRpb24oZmllbGRzOiBbaWRfcGVyc29uYV0sIHJlZmVyZW5jZXM6IFtpZF0sIG9uVXBkYXRlOiBSZXN0cmljdCwgbWFwOiAicmNoX2VtcGxlYWRvc19pZF9wZXJzb25hX2ZvcmVpZ24iKQogIGNhdF9wbGF6YXMgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2F0X3BsYXphcyAgICAgICAgICAgICAgICAgICAgICAgIEByZWxhdGlvbihmaWVsZHM6IFtpZF9wbGF6YV0sIHJlZmVyZW5jZXM6IFtpZF0sIG9uVXBkYXRlOiBSZXN0cmljdCwgbWFwOiAicmNoX2VtcGxlYWRvc19pZF9wbGF6YV9mb3JlaWduIikKICBjYXRfcHVlc3RvcyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhdF9wdWVzdG9zICAgICAgICAgICAgICAgICAgICAgICBAcmVsYXRpb24oZmllbGRzOiBbaWRfcHVlc3RvXSwgcmVmZXJlbmNlczogW2lkXSwgb25VcGRhdGU6IFJlc3RyaWN0LCBtYXA6ICJyY2hfZW1wbGVhZG9zX2lkX3B1ZXN0b19mb3JlaWduIikKICBjYXRfc2luZGljYXRvcyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhdF9zaW5kaWNhdG9zICAgICAgICAgICAgICAgICAgICBAcmVsYXRpb24oZmllbGRzOiBbaWRfc2luZGljYXRvXSwgcmVmZXJlbmNlczogW2lkXSwgb25VcGRhdGU6IFJlc3RyaWN0LCBtYXA6ICJyY2hfZW1wbGVhZG9zX2lkX3NpbmRpY2F0b19mb3JlaWduIikKICBjYXRfdGlwb3NfZW1wbGVhZG8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhdF90aXBvc19lbXBsZWFkbyAgICAgICAgICAgICAgICBAcmVsYXRpb24oZmllbGRzOiBbaWRfdGlwb2VtcGxlYWRvXSwgcmVmZXJlbmNlczogW2lkXSwgb25VcGRhdGU6IFJlc3RyaWN0LCBtYXA6ICJyY2hfZW1wbGVhZG9zX2lkX3RpcG9lbXBsZWFkb19mb3JlaWduIikKICBjYXRfdGlwb3NfcmVjdXJzbyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhdF90aXBvc19yZWN1cnNvICAgICAgICAgICAgICAgICBAcmVsYXRpb24oZmllbGRzOiBbaWRfdGlwb3JlY3Vyc29dLCByZWZlcmVuY2VzOiBbaWRdLCBvblVwZGF0ZTogUmVzdHJpY3QsIG1hcDogInJjaF9lbXBsZWFkb3NfaWRfdGlwb3JlY3Vyc29fZm9yZWlnbiIpCiAgY2F0X3R1cm5vcyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXRfdHVybm9zICAgICAgICAgICAgICAgICAgICAgICAgQHJlbGF0aW9uKGZpZWxkczogW2lkX3R1cm5vXSwgcmVmZXJlbmNlczogW2lkXSwgb25VcGRhdGU6IFJlc3RyaWN0LCBtYXA6ICJyY2hfZW1wbGVhZG9zX2lkX3R1cm5vX2ZvcmVpZ24iKQogIHJjaF9lbXBsZWFkb3NfYXNpZ25hY2lvbmVzICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmNoX2VtcGxlYWRvc19hc2lnbmFjaW9uZXNbXQogIHJjaF9lbXBsZWFkb3NfaGlzdG9yaWFsX2VzdGF0dXMgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmNoX2VtcGxlYWRvc19oaXN0b3JpYWxfZXN0YXR1c1tdCiAgcmNoX3Blcm1pc29zICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByY2hfcGVybWlzb3NbXQogIHNnbF90YXJqZXRvbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2dsX3RhcmpldG9uW10KCiAgQEBpbmRleChbaWRfYmFuY29dLCBtYXA6ICJyY2hfZW1wbGVhZG9zX2lkX2JhbmNvX2ZvcmVpZ24iKQogIEBAaW5kZXgoW2lkX2NhdGVnb3JpYV0sIG1hcDogInJjaF9lbXBsZWFkb3NfaWRfY2F0ZWdvcmlhX2ZvcmVpZ24iKQogIEBAaW5kZXgoW2lkX2RlcGFydGFtZW50b10sIG1hcDogInJjaF9lbXBsZWFkb3NfaWRfZGVwYXJ0YW1lbnRvX2ZvcmVpZ24iKQogIEBAaW5kZXgoW2lkX2ZpbmFuY2lhbWllbnRvXSwgbWFwOiAicmNoX2VtcGxlYWRvc19pZF9maW5hbmNpYW1pZW50b19mb3JlaWduIikKICBAQGluZGV4KFtpZF9tb3Rpdm9fYmFqYV0sIG1hcDogInJjaF9lbXBsZWFkb3NfaWRfbW90aXZvX2JhamFfZm9yZWlnbiIpCiAgQEBpbmRleChbaWRfcGVuc2lvbl0sIG1hcDogInJjaF9lbXBsZWFkb3NfaWRfcGVuc2lvbl9mb3JlaWduIikKICBAQGluZGV4KFtpZF9wZXJzb25hXSwgbWFwOiAicmNoX2VtcGxlYWRvc19pZF9wZXJzb25hX2ZvcmVpZ24iKQogIEBAaW5kZXgoW2lkX3BsYXphXSwgbWFwOiAicmNoX2VtcGxlYWRvc19pZF9wbGF6YV9mb3JlaWduIikKICBAQGluZGV4KFtpZF9wdWVzdG9dLCBtYXA6ICJyY2hfZW1wbGVhZG9zX2lkX3B1ZXN0b19mb3JlaWduIikKICBAQGluZGV4KFtpZF9zaW5kaWNhdG9dLCBtYXA6ICJyY2hfZW1wbGVhZG9zX2lkX3NpbmRpY2F0b19mb3JlaWduIikKICBAQGluZGV4KFtpZF90aXBvZW1wbGVhZG9dLCBtYXA6ICJyY2hfZW1wbGVhZG9zX2lkX3RpcG9lbXBsZWFkb19mb3JlaWduIikKICBAQGluZGV4KFtpZF90aXBvcmVjdXJzb10sIG1hcDogInJjaF9lbXBsZWFkb3NfaWRfdGlwb3JlY3Vyc29fZm9yZWlnbiIpCiAgQEBpbmRleChbaWRfdHVybm9dLCBtYXA6ICJyY2hfZW1wbGVhZG9zX2lkX3R1cm5vX2ZvcmVpZ24iKQp9Cgptb2RlbCByY2hfZW1wbGVhZG9zX2FzaWduYWNpb25lcyB7CiAgaWQgICAgICAgICAgICAgICBJbnQgICAgICAgICAgICAgIEBpZCBAZGVmYXVsdChhdXRvaW5jcmVtZW50KCkpIEBkYi5VbnNpZ25lZEludAogIGlkX2VtcGxlYWRvICAgICAgSW50ICAgICAgICAgICAgICBAZGIuVW5zaWduZWRJbnQKICBpZF9hc2lnbmFjaW9uICAgIEludCAgICAgICAgICAgICAgQGRiLlVuc2lnbmVkSW50CiAgY3JlYXRlZF9hdCAgICAgICBEYXRlVGltZT8gICAgICAgIEBkYi5UaW1lc3RhbXAoMCkKICB1cGRhdGVkX2F0ICAgICAgIERhdGVUaW1lPyAgICAgICAgQGRiLlRpbWVzdGFtcCgwKQogIGNhdF9hc2lnbmFjaW9uZXMgY2F0X2FzaWduYWNpb25lcyBAcmVsYXRpb24oZmllbGRzOiBbaWRfYXNpZ25hY2lvbl0sIHJlZmVyZW5jZXM6IFtpZF0sIG9uVXBkYXRlOiBSZXN0cmljdCwgbWFwOiAicmNoX2VtcGxlYWRvc19hc2lnbmFjaW9uZXNfaWRfYXNpZ25hY2lvbl9mb3JlaWduIikKICByY2hfZW1wbGVhZG9zICAgIHJjaF9lbXBsZWFkb3MgICAgQHJlbGF0aW9uKGZpZWxkczogW2lkX2VtcGxlYWRvXSwgcmVmZXJlbmNlczogW2lkXSwgb25VcGRhdGU6IFJlc3RyaWN0LCBtYXA6ICJyY2hfZW1wbGVhZG9zX2FzaWduYWNpb25lc19pZF9lbXBsZWFkb19mb3JlaWduIikKCiAgQEBpbmRleChbaWRfYXNpZ25hY2lvbl0sIG1hcDogInJjaF9lbXBsZWFkb3NfYXNpZ25hY2lvbmVzX2lkX2FzaWduYWNpb25fZm9yZWlnbiIpCiAgQEBpbmRleChbaWRfZW1wbGVhZG9dLCBtYXA6ICJyY2hfZW1wbGVhZG9zX2FzaWduYWNpb25lc19pZF9lbXBsZWFkb19mb3JlaWduIikKfQoKbW9kZWwgcmNoX2VtcGxlYWRvc19leHRlcm5vcyB7CiAgaWQgICAgICAgICAgICAgICAgICAgIEludCAgICAgICAgICAgICAgIEBpZCBAZGVmYXVsdChhdXRvaW5jcmVtZW50KCkpIEBkYi5VbnNpZ25lZEludAogIHRpcG9fZW1wbGVhZG8gICAgICAgICBTdHJpbmc/CiAgbm9fcGVyc29uYWwgICAgICAgICAgIFN0cmluZz8gICAgICAgICAgIEBkYi5DaGFyKDcpCiAgbWVkaW9zX2NvbXVuaWNhY2lvbiAgIFN0cmluZz8KICBpbnN0aXR1Y2lvbl9lZHVjYXRpdmEgU3RyaW5nPwogIGNhcnJlcmEgICAgICAgICAgICAgICBTdHJpbmc/CiAgZmVjaGFfaW5pY2lvICAgICAgICAgIERhdGVUaW1lPyAgICAgICAgIEBkYi5EYXRlCiAgZmVjaGFfZmluICAgICAgICAgICAgIERhdGVUaW1lPyAgICAgICAgIEBkYi5EYXRlCiAgb2JzZXJ2YWNpb25lcyAgICAgICAgIFN0cmluZz8gICAgICAgICAgIEBkYi5UZXh0CiAgaWRfcGVyc29uYSAgICAgICAgICAgIEludCAgICAgICAgICAgICAgIEBkYi5VbnNpZ25lZEludAogIGlkX2RlcGFydGFtZW50byAgICAgICBJbnQgICAgICAgICAgICAgICBAZGIuVW5zaWduZWRJbnQKICBjcmVhdGVkX2F0ICAgICAgICAgICAgRGF0ZVRpbWU/ICAgICAgICAgQGRiLlRpbWVzdGFtcCgwKQogIHVwZGF0ZWRfYXQgICAgICAgICAgICBEYXRlVGltZT8gICAgICAgICBAZGIuVGltZXN0YW1wKDApCiAgZGVsZXRlZF9hdCAgICAgICAgICAgIERhdGVUaW1lPyAgICAgICAgIEBkYi5UaW1lc3RhbXAoMCkKICBjYXRfZGVwYXJ0YW1lbnRvcyAgICAgY2F0X2RlcGFydGFtZW50b3MgQHJlbGF0aW9uKGZpZWxkczogW2lkX2RlcGFydGFtZW50b10sIHJlZmVyZW5jZXM6IFtpZF0sIG9uVXBkYXRlOiBSZXN0cmljdCwgbWFwOiAicmNoX2VtcGxlYWRvc19leHRlcm5vc19pZF9kZXBhcnRhbWVudG9fZm9yZWlnbiIpCiAgY21wX3BlcnNvbmEgICAgICAgICAgIGNtcF9wZXJzb25hICAgICAgIEByZWxhdGlvbihmaWVsZHM6IFtpZF9wZXJzb25hXSwgcmVmZXJlbmNlczogW2lkXSwgb25VcGRhdGU6IFJlc3RyaWN0LCBtYXA6ICJyY2hfZW1wbGVhZG9zX2V4dGVybm9zX2lkX3BlcnNvbmFfZm9yZWlnbiIpCgogIEBAaW5kZXgoW2lkX2RlcGFydGFtZW50b10sIG1hcDogInJjaF9lbXBsZWFkb3NfZXh0ZXJub3NfaWRfZGVwYXJ0YW1lbnRvX2ZvcmVpZ24iKQogIEBAaW5kZXgoW2lkX3BlcnNvbmFdLCBtYXA6ICJyY2hfZW1wbGVhZG9zX2V4dGVybm9zX2lkX3BlcnNvbmFfZm9yZWlnbiIpCn0KCm1vZGVsIHJjaF9lbXBsZWFkb3NfaGlzdG9yaWFsX2NhbWJpb3MgewogIGlkICAgICAgICAgICAgICAgICAgICBJbnQgICAgICAgQGlkIEBkZWZhdWx0KGF1dG9pbmNyZW1lbnQoKSkgQGRiLlVuc2lnbmVkSW50CiAgcHJpbWVyX2FwZWxsaWRvICAgICAgIFN0cmluZz8KICBzZWd1bmRvX2FwZWxsaWRvICAgICAgU3RyaW5nPwogIG5vbWJyZXMgICAgICAgICAgICAgICBTdHJpbmc/CiAgY3VycCAgICAgICAgICAgICAgICAgIFN0cmluZz8KICByZmMgICAgICAgICAgICAgICAgICAgU3RyaW5nPwogIGZlY2hhX25hY2ltaWVudG8gICAgICBTdHJpbmc/CiAgZXN0YWRvX25hY2ltaWVudG8gICAgIFN0cmluZz8KICBzZXhvICAgICAgICAgICAgICAgICAgU3RyaW5nPwogIGlkX2VzdGFkb2NpdmlsICAgICAgICBTdHJpbmc/CiAgbWF0cmljdWxhICAgICAgICAgICAgIFN0cmluZz8KICBtZWRpb3NfY29tdW5pY2FjaW9uICAgU3RyaW5nPwogIG1hZHJlICAgICAgICAgICAgICAgICBTdHJpbmc/CiAgaG9yYV9lbnRyYWRhICAgICAgICAgIERhdGVUaW1lPyBAZGIuVGltZSgwKQogIGhvcmFfc2FsaWRhICAgICAgICAgICBEYXRlVGltZT8gQGRiLlRpbWUoMCkKICBwYWdvX3JpZXNnbyAgICAgICAgICAgU3RyaW5nPwogIGNlZHVsYV9wcm9mZXNpb25hbCAgICBTdHJpbmc/ICAgQGRiLkNoYXIoMTApCiAgY2hlY2EgICAgICAgICAgICAgICAgIFN0cmluZz8KICBlbWFpbCAgICAgICAgICAgICAgICAgU3RyaW5nPwogIGVtYWlsX2luc3RpdHVjaW9uYWwgICBTdHJpbmc/CiAgY3VlbnRhX2JhbmNhcmlhICAgICAgIFN0cmluZz8KICBhY3Rpdm8gICAgICAgICAgICAgICAgQm9vbGVhbiAgIEBkZWZhdWx0KHRydWUpCiAgZmVjaGFfYWx0YSAgICAgICAgICAgIERhdGVUaW1lPyBAZGIuRGF0ZVRpbWUoMCkKICBmZWNoYV9iYXNlICAgICAgICAgICAgRGF0ZVRpbWU/IEBkYi5EYXRlVGltZSgwKQogIGZlY2hhX2JhamEgICAgICAgICAgICBEYXRlVGltZT8gQGRiLkRhdGVUaW1lKDApCiAgb2JzZXJ2YWNpb25lcyAgICAgICAgIFN0cmluZz8gICBAZGIuVGV4dAogIG1vdGl2b19iYWphICAgICAgICAgICBTdHJpbmc/ICAgQGRiLlRleHQKICBtZWRpY28gICAgICAgICAgICAgICAgU3RyaW5nPyAgIEBkYi5DaGFyKDEpCiAgZ3VhcmRpYXMgICAgICAgICAgICAgIFN0cmluZz8KICBub21icmFtaWVudG8gICAgICAgICAgU3RyaW5nPwogIGlkX3BlcnNvbmEgICAgICAgICAgICBJbnQ/CiAgaWRfZW1wbGVhZG8gICAgICAgICAgIEludD8KICBpZF90aXBvZW1wbGVhZG8gICAgICAgSW50PwogIGlkX3BsYXphICAgICAgICAgICAgICBJbnQ/CiAgaWRfcGVuc2lvbiAgICAgICAgICAgIEludD8KICBpZF90aXBvcmVjdXJzbyAgICAgICAgSW50PwogIGlkX3B1ZXN0byAgICAgICAgICAgICBJbnQ/CiAgaWRfZGVwYXJ0YW1lbnRvICAgICAgIEludD8KICBpZF90dXJubyAgICAgICAgICAgICAgSW50PwogIGlkX2NhdGVnb3JpYSAgICAgICAgICBJbnQ/CiAgaWRfc2luZGljYXRvICAgICAgICAgIEludD8KICBpZF9iYW5jbyAgICAgICAgICAgICAgSW50PwogIGlkX2ZpbmFuY2lhbWllbnRvICAgICBJbnQ/CiAgaWRfdW5pZGFkX21lZGljYSAgICAgIEludD8KICBjYWxsZSAgICAgICAgICAgICAgICAgU3RyaW5nPwogIG51bV9pbnRlcmlvciAgICAgICAgICBTdHJpbmc/CiAgbnVtX2V4dGVyaW9yICAgICAgICAgIFN0cmluZz8KICB0ZWxlZm9ubyAgICAgICAgICAgICAgU3RyaW5nPwogIGNwICAgICAgICAgICAgICAgICAgICBTdHJpbmc/CiAgaWRfYXNlbnRhbWllbnRvICAgICAgIFN0cmluZz8KICBlbnRyZV9jYWxsZSAgICAgICAgICAgU3RyaW5nPwogIHlfY2FsbGUgICAgICAgICAgICAgICBTdHJpbmc/CiAgY2FsbGVfcG9zdGVyaW9yICAgICAgIFN0cmluZz8KICBkZXNjcmlwY2lvbl91YmljYWNpb24gU3RyaW5nPwogIHVzZXJuYW1lICAgICAgICAgICAgICBTdHJpbmc/CiAgZXF1aXBvICAgICAgICAgICAgICAgIFN0cmluZz8gICBAZGIuVGV4dAogIGNyZWF0ZWRfYXQgICAgICAgICAgICBEYXRlVGltZT8gQGRiLlRpbWVzdGFtcCgwKQogIHVwZGF0ZWRfYXQgICAgICAgICAgICBEYXRlVGltZT8gQGRiLlRpbWVzdGFtcCgwKQp9Cgptb2RlbCByY2hfZW1wbGVhZG9zX2hpc3RvcmlhbF9lc3RhdHVzIHsKICBpZCAgICAgICAgICAgICBCaWdJbnQgICAgICAgIEBpZCBAZGVmYXVsdChhdXRvaW5jcmVtZW50KCkpIEBkYi5VbnNpZ25lZEJpZ0ludAogIGFjdGl2byAgICAgICAgIEJvb2xlYW4/CiAgaWRfZW1wbGVhZG8gICAgSW50ICAgICAgICAgICBAZGIuVW5zaWduZWRJbnQKICBpZF9tb3Rpdm9fYmFqYSBJbnQ/CiAgbW90aXZvX2JhamEgICAgU3RyaW5nPyAgICAgICBAZGIuVGV4dAogIGZlY2hhX2luaWNpbyAgIERhdGVUaW1lPyAgICAgQGRiLkRhdGUKICBmZWNoYV9maW4gICAgICBEYXRlVGltZT8gICAgIEBkYi5EYXRlCiAgaWRVc3VhcmlvICAgICAgSW50PwogIG5pY2sgICAgICAgICAgIFN0cmluZz8KICBjcmVhdGVkX2F0ICAgICBEYXRlVGltZT8gICAgIEBkYi5UaW1lc3RhbXAoMCkKICB1cGRhdGVkX2F0ICAgICBEYXRlVGltZT8gICAgIEBkYi5UaW1lc3RhbXAoMCkKICByY2hfZW1wbGVhZG9zICByY2hfZW1wbGVhZG9zIEByZWxhdGlvbihmaWVsZHM6IFtpZF9lbXBsZWFkb10sIHJlZmVyZW5jZXM6IFtpZF0sIG9uVXBkYXRlOiBSZXN0cmljdCwgbWFwOiAicmNoX2VtcGxlYWRvc19oaXN0b3JpYWxfZXN0YXR1c19pZF9lbXBsZWFkb19mb3JlaWduIikKCiAgQEBpbmRleChbaWRfZW1wbGVhZG9dLCBtYXA6ICJyY2hfZW1wbGVhZG9zX2hpc3RvcmlhbF9lc3RhdHVzX2lkX2VtcGxlYWRvX2ZvcmVpZ24iKQp9Cgptb2RlbCByY2hfZW1wbGVhZG9zX2hpc3RvcmlhbF9ob3JhcmlvcyB7CiAgaWQgICAgICAgICAgICBJbnQgICAgICAgQGlkIEBkZWZhdWx0KGF1dG9pbmNyZW1lbnQoKSkKICBpZF9lbXBsZWFkbyAgIEludD8KICBpZF90dXJubyAgICAgIEludD8KICBmZWNoYV9pbmljaW8gIERhdGVUaW1lPyBAZGIuRGF0ZQogIGhvcmFfZW50cmFkYSAgRGF0ZVRpbWU/IEBkYi5UaW1lKDApCiAgaG9yYV9zYWxpZGEgICBEYXRlVGltZT8gQGRiLlRpbWUoMCkKICBndWFyZGlhcyAgICAgIFN0cmluZz8KICBvYnNlcnZhY2lvbmVzIFN0cmluZz8gICBAZGIuVGV4dAogIGlkVXNlciAgICAgICAgSW50PwogIG5pY2sgICAgICAgICAgU3RyaW5nPyAgIEBkYi5WYXJDaGFyKDUwKQogIGNyZWF0ZWRfYXQgICAgRGF0ZVRpbWU/IEBkYi5UaW1lc3RhbXAoMCkKICB1cGRhdGVkX2F0ICAgIERhdGVUaW1lPyBAZGIuVGltZXN0YW1wKDApCiAgZGVsZXRlZF9hdCAgICBEYXRlVGltZT8gQGRiLlRpbWVzdGFtcCgwKQp9Cgptb2RlbCByY2hfcGVybWlzb3MgewogIGlkICAgICAgICAgICAgICBJbnQgICAgICAgICAgICAgIEBpZCBAZGVmYXVsdChhdXRvaW5jcmVtZW50KCkpIEBkYi5VbnNpZ25lZEludAogIGZvbGlvICAgICAgICAgICBJbnQKICBmZWNoYV9pbmljaW8gICAgRGF0ZVRpbWUgICAgICAgICBAZGIuRGF0ZVRpbWUoMCkKICBmZWNoYV9maW4gICAgICAgRGF0ZVRpbWUgICAgICAgICBAZGIuRGF0ZVRpbWUoMCkKICBvYnNlcnZhY2lvbmVzICAgU3RyaW5nPyAgICAgICAgICBAZGIuVGV4dAogIGF1dG9yaXphZG8gICAgICBCb29sZWFuICAgICAgICAgIEBkZWZhdWx0KGZhbHNlKQogIGlkX2VtcGxlYWRvICAgICBJbnQ/ICAgICAgICAgICAgIEBkYi5VbnNpZ25lZEludAogIGlkX3Blcm1pc28gICAgICBJbnQ/ICAgICAgICAgICAgIEBkYi5VbnNpZ25lZEludAogIGlkX2V4dGVuc2lvbiAgICBJbnQ/ICAgICAgICAgICAgIEBkYi5VbnNpZ25lZEludAogIGNyZWF0ZWRfYXQgICAgICBEYXRlVGltZT8gICAgICAgIEBkYi5UaW1lc3RhbXAoMCkKICB1cGRhdGVkX2F0ICAgICAgRGF0ZVRpbWU/ICAgICAgICBAZGIuVGltZXN0YW1wKDApCiAgZGVsZXRlZF9hdCAgICAgIERhdGVUaW1lPyAgICAgICAgQGRiLkRhdGVUaW1lKDApCiAgcmNoX2VtcGxlYWRvcyAgIHJjaF9lbXBsZWFkb3M/ICAgQHJlbGF0aW9uKGZpZWxkczogW2lkX2VtcGxlYWRvXSwgcmVmZXJlbmNlczogW2lkXSwgb25EZWxldGU6IFJlc3RyaWN0LCBvblVwZGF0ZTogUmVzdHJpY3QsIG1hcDogInJjaF9wZXJtaXNvc19pZF9lbXBsZWFkb19mb3JlaWduIikKICBjYXRfZXh0ZW5zaW9uZXMgY2F0X2V4dGVuc2lvbmVzPyBAcmVsYXRpb24oZmllbGRzOiBbaWRfZXh0ZW5zaW9uXSwgcmVmZXJlbmNlczogW2lkXSwgb25EZWxldGU6IFJlc3RyaWN0LCBvblVwZGF0ZTogUmVzdHJpY3QsIG1hcDogInJjaF9wZXJtaXNvc19pZF9leHRlbnNpb25fZm9yZWlnbiIpCiAgY2F0X3Blcm1pc29zICAgIGNhdF9wZXJtaXNvcz8gICAgQHJlbGF0aW9uKGZpZWxkczogW2lkX3Blcm1pc29dLCByZWZlcmVuY2VzOiBbaWRdLCBvbkRlbGV0ZTogUmVzdHJpY3QsIG9uVXBkYXRlOiBSZXN0cmljdCwgbWFwOiAicmNoX3Blcm1pc29zX2lkX3Blcm1pc29fZm9yZWlnbiIpCgogIEBAaW5kZXgoW2lkX2VtcGxlYWRvXSwgbWFwOiAicmNoX3Blcm1pc29zX2lkX2VtcGxlYWRvX2ZvcmVpZ24iKQogIEBAaW5kZXgoW2lkX2V4dGVuc2lvbl0sIG1hcDogInJjaF9wZXJtaXNvc19pZF9leHRlbnNpb25fZm9yZWlnbiIpCiAgQEBpbmRleChbaWRfcGVybWlzb10sIG1hcDogInJjaF9wZXJtaXNvc19pZF9wZXJtaXNvX2ZvcmVpZ24iKQp9Cgptb2RlbCByY2hfdGlwb19lbXBsZWFkb19wZXJtaXNvcyB7CiAgaWQgICAgICAgICAgICAgICAgIEludCAgICAgICAgICAgICAgICBAaWQgQGRlZmF1bHQoYXV0b2luY3JlbWVudCgpKSBAZGIuVW5zaWduZWRJbnQKICBpZF90aXBvX2VtcGxlYWRvICAgSW50ICAgICAgICAgICAgICAgIEBkYi5VbnNpZ25lZEludAogIGlkX3Blcm1pc28gICAgICAgICBJbnQgICAgICAgICAgICAgICAgQGRiLlVuc2lnbmVkSW50CiAgY3JlYXRlZF9hdCAgICAgICAgIERhdGVUaW1lPyAgICAgICAgICBAZGIuVGltZXN0YW1wKDApCiAgdXBkYXRlZF9hdCAgICAgICAgIERhdGVUaW1lPyAgICAgICAgICBAZGIuVGltZXN0YW1wKDApCiAgY2F0X3Blcm1pc29zICAgICAgIGNhdF9wZXJtaXNvcyAgICAgICBAcmVsYXRpb24oZmllbGRzOiBbaWRfcGVybWlzb10sIHJlZmVyZW5jZXM6IFtpZF0sIG9uVXBkYXRlOiBSZXN0cmljdCwgbWFwOiAicmNoX3RpcG9fZW1wbGVhZG9fcGVybWlzb3NfaWRfcGVybWlzb19mb3JlaWduIikKICBjYXRfdGlwb3NfZW1wbGVhZG8gY2F0X3RpcG9zX2VtcGxlYWRvIEByZWxhdGlvbihmaWVsZHM6IFtpZF90aXBvX2VtcGxlYWRvXSwgcmVmZXJlbmNlczogW2lkXSwgb25VcGRhdGU6IFJlc3RyaWN0LCBtYXA6ICJyY2hfdGlwb19lbXBsZWFkb19wZXJtaXNvc19pZF90aXBvX2VtcGxlYWRvX2ZvcmVpZ24iKQoKICBAQGluZGV4KFtpZF9wZXJtaXNvXSwgbWFwOiAicmNoX3RpcG9fZW1wbGVhZG9fcGVybWlzb3NfaWRfcGVybWlzb19mb3JlaWduIikKICBAQGluZGV4KFtpZF90aXBvX2VtcGxlYWRvXSwgbWFwOiAicmNoX3RpcG9fZW1wbGVhZG9fcGVybWlzb3NfaWRfdGlwb19lbXBsZWFkb19mb3JlaWduIikKfQoKbW9kZWwgcmZuX2NvbnZlbmlvcyB7CiAgaWQgICAgICAgICAgICAgICAgIEludCAgICAgICAgICAgIEBpZCBAZGVmYXVsdChhdXRvaW5jcmVtZW50KCkpIEBkYi5VbnNpZ25lZEludAogIG51bWVyb19wZXJzb25hbCAgICBTdHJpbmcKICBudW1lcm9fZGVwZW5kaWVudGUgU3RyaW5nPwogIHByaW1lcl9hcGVsbGlkbyAgICBTdHJpbmcKICBzZWd1bmRvX2FwZWxsaWRvICAgU3RyaW5nCiAgbm9tYnJlcyAgICAgICAgICAgIFN0cmluZwogIHJmYyAgICAgICAgICAgICAgICBTdHJpbmc/ICAgICAgICBAZGIuQ2hhcig1MCkKICB2aWdlbmNpYSAgICAgICAgICAgRGF0ZVRpbWU/ICAgICAgQGRiLkRhdGUKICB6b25hICAgICAgICAgICAgICAgU3RyaW5nPwogIGlkX3N1YnJvZ2FkbyAgICAgICBJbnQgICAgICAgICAgICBAZGIuVW5zaWduZWRJbnQKICBjcmVhdGVkX2F0ICAgICAgICAgRGF0ZVRpbWU/ICAgICAgQGRiLlRpbWVzdGFtcCgwKQogIHVwZGF0ZWRfYXQgICAgICAgICBEYXRlVGltZT8gICAgICBAZGIuVGltZXN0YW1wKDApCiAgZGVsZXRlZF9hdCAgICAgICAgIERhdGVUaW1lPyAgICAgIEBkYi5UaW1lc3RhbXAoMCkKICBjYXRfc3Vicm9nYWRvcyAgICAgY2F0X3N1YnJvZ2Fkb3MgQHJlbGF0aW9uKGZpZWxkczogW2lkX3N1YnJvZ2Fkb10sIHJlZmVyZW5jZXM6IFtpZF0sIG9uVXBkYXRlOiBSZXN0cmljdCwgbWFwOiAicmZuX2NvbnZlbmlvc19pZF9zdWJyb2dhZG9fZm9yZWlnbiIpCgogIEBAaW5kZXgoW2lkX3N1YnJvZ2Fkb10sIG1hcDogInJmbl9jb252ZW5pb3NfaWRfc3Vicm9nYWRvX2ZvcmVpZ24iKQp9Cgptb2RlbCByb2xlX2hhc19wZXJtaXNzaW9ucyB7CiAgcGVybWlzc2lvbl9pZCBJbnQgICAgICAgICBAZGIuVW5zaWduZWRJbnQKICByb2xlX2lkICAgICAgIEludCAgICAgICAgIEBkYi5VbnNpZ25lZEludAogIHBlcm1pc3Npb25zICAgcGVybWlzc2lvbnMgQHJlbGF0aW9uKGZpZWxkczogW3Blcm1pc3Npb25faWRdLCByZWZlcmVuY2VzOiBbaWRdLCBvbkRlbGV0ZTogQ2FzY2FkZSwgb25VcGRhdGU6IFJlc3RyaWN0LCBtYXA6ICJyb2xlX2hhc19wZXJtaXNzaW9uc19wZXJtaXNzaW9uX2lkX2ZvcmVpZ24iKQogIHJvbGVzICAgICAgICAgcm9sZXMgICAgICAgQHJlbGF0aW9uKGZpZWxkczogW3JvbGVfaWRdLCByZWZlcmVuY2VzOiBbaWRdLCBvbkRlbGV0ZTogQ2FzY2FkZSwgb25VcGRhdGU6IFJlc3RyaWN0LCBtYXA6ICJyb2xlX2hhc19wZXJtaXNzaW9uc19yb2xlX2lkX2ZvcmVpZ24iKQoKICBAQGlkKFtwZXJtaXNzaW9uX2lkLCByb2xlX2lkXSkKICBAQGluZGV4KFtyb2xlX2lkXSwgbWFwOiAicm9sZV9oYXNfcGVybWlzc2lvbnNfcm9sZV9pZF9mb3JlaWduIikKfQoKbW9kZWwgcm9sZXMgewogIGlkICAgICAgICAgICAgICAgICAgIEludCAgICAgICAgICAgICAgICAgICAgQGlkIEBkZWZhdWx0KGF1dG9pbmNyZW1lbnQoKSkgQGRiLlVuc2lnbmVkSW50CiAgbmFtZSAgICAgICAgICAgICAgICAgU3RyaW5nCiAgZ3VhcmRfbmFtZSAgICAgICAgICAgU3RyaW5nCiAgY3JlYXRlZF9hdCAgICAgICAgICAgRGF0ZVRpbWU/ICAgICAgICAgICAgICBAZGIuVGltZXN0YW1wKDApCiAgdXBkYXRlZF9hdCAgICAgICAgICAgRGF0ZVRpbWU/ICAgICAgICAgICAgICBAZGIuVGltZXN0YW1wKDApCiAgYWRtX3R1dG9yaWFsZXNfcm9sZXMgYWRtX3R1dG9yaWFsZXNfcm9sZXNbXQogIG1vZGVsX2hhc19yb2xlcyAgICAgIG1vZGVsX2hhc19yb2xlc1tdCiAgcm9sZV9oYXNfcGVybWlzc2lvbnMgcm9sZV9oYXNfcGVybWlzc2lvbnNbXQp9Cgptb2RlbCBzZ2xfY29udHJvbF92ZWhpY3VsYXIgewogIGlkICAgICAgICAgQmlnSW50ICAgIEBpZCBAZGVmYXVsdChhdXRvaW5jcmVtZW50KCkpIEBkYi5VbnNpZ25lZEJpZ0ludAogIGNyZWF0ZWRfYXQgRGF0ZVRpbWU/IEBkYi5UaW1lc3RhbXAoMCkKICB1cGRhdGVkX2F0IERhdGVUaW1lPyBAZGIuVGltZXN0YW1wKDApCn0KCm1vZGVsIHNnbF90YXJqZXRvbiB7CiAgaWQgICAgICAgICAgICAgICAgICAgIEJpZ0ludCAgICAgICAgICAgICAgICAgIEBpZCBAZGVmYXVsdChhdXRvaW5jcmVtZW50KCkpIEBkYi5VbnNpZ25lZEJpZ0ludAogIGZvbGlvX3RhcmpldG9uICAgICAgICBJbnQKICBpZF9lbXBsZWFkbyAgICAgICAgICAgSW50PyAgICAgICAgICAgICAgICAgICAgQGRiLlVuc2lnbmVkSW50CiAgaWRfZXh0ZW5zaW9uICAgICAgICAgIEludD8gICAgICAgICAgICAgICAgICAgIEBkYi5VbnNpZ25lZEludAogIHRlbGVmb25vICAgICAgICAgICAgICBTdHJpbmcgICAgICAgICAgICAgICAgICBAZGIuVmFyQ2hhcigxMCkKICBjcmVhdGVkX2F0ICAgICAgICAgICAgRGF0ZVRpbWU/ICAgICAgICAgICAgICAgQGRiLlRpbWVzdGFtcCgwKQogIHVwZGF0ZWRfYXQgICAgICAgICAgICBEYXRlVGltZT8gICAgICAgICAgICAgICBAZGIuVGltZXN0YW1wKDApCiAgZGVsZXRlZF9hdCAgICAgICAgICAgIERhdGVUaW1lPyAgICAgICAgICAgICAgIEBkYi5UaW1lc3RhbXAoMCkKICByY2hfZW1wbGVhZG9zICAgICAgICAgcmNoX2VtcGxlYWRvcz8gICAgICAgICAgQHJlbGF0aW9uKGZpZWxkczogW2lkX2VtcGxlYWRvXSwgcmVmZXJlbmNlczogW2lkXSwgb25EZWxldGU6IFJlc3RyaWN0LCBvblVwZGF0ZTogUmVzdHJpY3QsIG1hcDogInNnbF90YXJqZXRvbl9pZF9lbXBsZWFkb19mb3JlaWduIikKICBjYXRfZXh0ZW5zaW9uZXMgICAgICAgY2F0X2V4dGVuc2lvbmVzPyAgICAgICAgQHJlbGF0aW9uKGZpZWxkczogW2lkX2V4dGVuc2lvbl0sIHJlZmVyZW5jZXM6IFtpZF0sIG9uRGVsZXRlOiBSZXN0cmljdCwgb25VcGRhdGU6IFJlc3RyaWN0LCBtYXA6ICJzZ2xfdGFyamV0b25faWRfZXh0ZW5zaW9uX2ZvcmVpZ24iKQogIHNnbF90YXJqZXRvbl92ZWhpY3VsbyBzZ2xfdGFyamV0b25fdmVoaWN1bG9bXQoKICBAQGluZGV4KFtpZF9lbXBsZWFkb10sIG1hcDogInNnbF90YXJqZXRvbl9pZF9lbXBsZWFkb19mb3JlaWduIikKICBAQGluZGV4KFtpZF9leHRlbnNpb25dLCBtYXA6ICJzZ2xfdGFyamV0b25faWRfZXh0ZW5zaW9uX2ZvcmVpZ24iKQp9Cgptb2RlbCBzZ2xfdGFyamV0b25fdmVoaWN1bG8gewogIGlkICAgICAgICAgICAgICAgICAgICBCaWdJbnQgICAgICAgICAgICAgICAgIEBpZCBAZGVmYXVsdChhdXRvaW5jcmVtZW50KCkpIEBkYi5VbnNpZ25lZEJpZ0ludAogIG1vZGVsbyAgICAgICAgICAgICAgICBTdHJpbmc/ICAgICAgICAgICAgICAgIEBkYi5WYXJDaGFyKDQpCiAgcGxhY2FzX3ZlaGljdWxvICAgICAgIFN0cmluZwogIGNvbG9yICAgICAgICAgICAgICAgICBTdHJpbmcKICBpbXByZXNvICAgICAgICAgICAgICAgU3RyaW5nCiAgb2JzZXJ2YWNpb25lcyAgICAgICAgIFN0cmluZz8gICAgICAgICAgICAgICAgQGRiLlZhckNoYXIoMjUwKQogIGxpbmVhICAgICAgICAgICAgICAgICBTdHJpbmc/ICAgICAgICAgICAgICAgIEBkYi5WYXJDaGFyKDI1MCkKICBpZF90YXJqZXRvbiAgICAgICAgICAgQmlnSW50PyAgICAgICAgICAgICAgICBAZGIuVW5zaWduZWRCaWdJbnQKICBpZF9tYXJjYSAgICAgICAgICAgICAgQmlnSW50PyAgICAgICAgICAgICAgICBAZGIuVW5zaWduZWRCaWdJbnQKICBpZF9zdWJtYXJjYSAgICAgICAgICAgQmlnSW50PyAgICAgICAgICAgICAgICBAZGIuVW5zaWduZWRCaWdJbnQKICBjcmVhdGVkX2F0ICAgICAgICAgICAgRGF0ZVRpbWU/ICAgICAgICAgICAgICBAZGIuVGltZXN0YW1wKDApCiAgdXBkYXRlZF9hdCAgICAgICAgICAgIERhdGVUaW1lPyAgICAgICAgICAgICAgQGRiLlRpbWVzdGFtcCgwKQogIGRlbGV0ZWRfYXQgICAgICAgICAgICBEYXRlVGltZT8gICAgICAgICAgICAgIEBkYi5UaW1lc3RhbXAoMCkKICBjYXRfdmVoaWN1bG9fbWFyY2EgICAgY2F0X3ZlaGljdWxvX21hcmNhPyAgICBAcmVsYXRpb24oZmllbGRzOiBbaWRfbWFyY2FdLCByZWZlcmVuY2VzOiBbaWRdLCBvbkRlbGV0ZTogUmVzdHJpY3QsIG9uVXBkYXRlOiBSZXN0cmljdCwgbWFwOiAic2dsX3RhcmpldG9uX3ZlaGljdWxvX2lkX21hcmNhX2ZvcmVpZ24iKQogIGNhdF92ZWhpY3Vsb19zdWJtYXJjYSBjYXRfdmVoaWN1bG9fc3VibWFyY2E/IEByZWxhdGlvbihmaWVsZHM6IFtpZF9zdWJtYXJjYV0sIHJlZmVyZW5jZXM6IFtpZF0sIG9uRGVsZXRlOiBSZXN0cmljdCwgb25VcGRhdGU6IFJlc3RyaWN0LCBtYXA6ICJzZ2xfdGFyamV0b25fdmVoaWN1bG9faWRfc3VibWFyY2FfZm9yZWlnbiIpCiAgc2dsX3RhcmpldG9uICAgICAgICAgIHNnbF90YXJqZXRvbj8gICAgICAgICAgQHJlbGF0aW9uKGZpZWxkczogW2lkX3RhcmpldG9uXSwgcmVmZXJlbmNlczogW2lkXSwgb25EZWxldGU6IFJlc3RyaWN0LCBvblVwZGF0ZTogUmVzdHJpY3QsIG1hcDogInNnbF90YXJqZXRvbl92ZWhpY3Vsb19pZF90YXJqZXRvbl9mb3JlaWduIikKCiAgQEBpbmRleChbaWRfbWFyY2FdLCBtYXA6ICJzZ2xfdGFyamV0b25fdmVoaWN1bG9faWRfbWFyY2FfZm9yZWlnbiIpCiAgQEBpbmRleChbaWRfc3VibWFyY2FdLCBtYXA6ICJzZ2xfdGFyamV0b25fdmVoaWN1bG9faWRfc3VibWFyY2FfZm9yZWlnbiIpCiAgQEBpbmRleChbaWRfdGFyamV0b25dLCBtYXA6ICJzZ2xfdGFyamV0b25fdmVoaWN1bG9faWRfdGFyamV0b25fZm9yZWlnbiIpCn0KCm1vZGVsIHNnbF92ZWhpY3VsbyB7CiAgaWQgICAgICAgICAgICBCaWdJbnQgICAgQGlkIEBkZWZhdWx0KGF1dG9pbmNyZW1lbnQoKSkgQGRiLlVuc2lnbmVkQmlnSW50CiAgaWRfbWFyY2EgICAgICBCaWdJbnQ/ICAgQGRiLlVuc2lnbmVkQmlnSW50CiAgaWRfdGlwbyAgICAgICBCaWdJbnQ/ICAgQGRiLlVuc2lnbmVkQmlnSW50CiAgaWRfbW9kZWxvICAgICBCaWdJbnQ/ICAgQGRiLlVuc2lnbmVkQmlnSW50CiAgbm9fcGxhY2FzICAgICBTdHJpbmcgICAgQGRiLlZhckNoYXIoNTApCiAgbm9fZWNvbm9taWNvICBTdHJpbmcgICAgQGRiLlZhckNoYXIoNTApCiAgbm9faW52ZW50YXJpbyBTdHJpbmcgICAgQGRiLlZhckNoYXIoNTApCiAgY29sb3IgICAgICAgICBTdHJpbmcgICAgQGRiLlZhckNoYXIoNTApCiAga21faW5pY2lhbCAgICBJbnQgICAgICAgQGRiLlVuc2lnbmVkSW50CiAgb2JzZXJ2YWNpb25lcyBTdHJpbmc/ICAgQGRiLlRleHQKICBjcmVhdGVkX2F0ICAgIERhdGVUaW1lPyBAZGIuVGltZXN0YW1wKDApCiAgdXBkYXRlZF9hdCAgICBEYXRlVGltZT8gQGRiLlRpbWVzdGFtcCgwKQogIGRlbGV0ZWRfYXQgICAgRGF0ZVRpbWU/IEBkYi5UaW1lc3RhbXAoMCkKfQoKbW9kZWwgdGFibGVfY2F0X2hvcmFyaW9zX2NvbWVkb3IgewogIGlkICAgICAgICAgQmlnSW50ICAgIEBpZCBAZGVmYXVsdChhdXRvaW5jcmVtZW50KCkpIEBkYi5VbnNpZ25lZEJpZ0ludAogIGNyZWF0ZWRfYXQgRGF0ZVRpbWU/IEBkYi5UaW1lc3RhbXAoMCkKICB1cGRhdGVkX2F0IERhdGVUaW1lPyBAZGIuVGltZXN0YW1wKDApCn0KCm1vZGVsIHRhYmxlX251dF9wYXNlc19jb21lZG9yIHsKICBpZCAgICAgICAgIEJpZ0ludCAgICBAaWQgQGRlZmF1bHQoYXV0b2luY3JlbWVudCgpKSBAZGIuVW5zaWduZWRCaWdJbnQKICBjcmVhdGVkX2F0IERhdGVUaW1lPyBAZGIuVGltZXN0YW1wKDApCiAgdXBkYXRlZF9hdCBEYXRlVGltZT8gQGRiLlRpbWVzdGFtcCgwKQp9Cgptb2RlbCB0YWJsZV9udXRfcmVnaXN0cm9zX2NvbWVkb3IgewogIGlkICAgICAgICAgQmlnSW50ICAgIEBpZCBAZGVmYXVsdChhdXRvaW5jcmVtZW50KCkpIEBkYi5VbnNpZ25lZEJpZ0ludAogIGNyZWF0ZWRfYXQgRGF0ZVRpbWU/IEBkYi5UaW1lc3RhbXAoMCkKICB1cGRhdGVkX2F0IERhdGVUaW1lPyBAZGIuVGltZXN0YW1wKDApCn0KCm1vZGVsIHRpY19lcXVpcG9zX2NvbXB1dG8gewogIGlkICAgICAgICAgICAgICAgIEludCAgICAgICAgICBAaWQgQGRlZmF1bHQoYXV0b2luY3JlbWVudCgpKSBAZGIuVW5zaWduZWRJbnQKICBwcm9jZXNhZG9yICAgICAgICBTdHJpbmcKICBtZW1vcmlhX3JhbSAgICAgICBTdHJpbmcKICBkaXNjb19kdXJvICAgICAgICBTdHJpbmcKICBzaXN0ZW1hX29wZXJhdGl2byBTdHJpbmcKICBub21icmVfZXF1aXBvICAgICBTdHJpbmcKICBzZXNpb25lcyAgICAgICAgICBTdHJpbmcKICBkb21pbmlvICAgICAgICAgICBTdHJpbmcKICBpcCAgICAgICAgICAgICAgICBTdHJpbmcKICB0aXBvX2luc3RhbGFjaW9uICBTdHJpbmcKICBwcm9waWV0YXJpbyAgICAgICBTdHJpbmcKICBvYnNlcnZhY2lvbmVzICAgICBTdHJpbmcgICAgICAgQGRiLlRleHQKICBpZF9lcXVpcG8gICAgICAgICBJbnQ/ICAgICAgICAgQGRiLlVuc2lnbmVkSW50CiAgY3JlYXRlZF9hdCAgICAgICAgRGF0ZVRpbWU/ICAgIEBkYi5UaW1lc3RhbXAoMCkKICB1cGRhdGVkX2F0ICAgICAgICBEYXRlVGltZT8gICAgQGRiLlRpbWVzdGFtcCgwKQogIGRlbGV0ZWRfYXQgICAgICAgIERhdGVUaW1lPyAgICBAZGIuVGltZXN0YW1wKDApCiAgY2F0X2VxdWlwb3MgICAgICAgY2F0X2VxdWlwb3M/IEByZWxhdGlvbihmaWVsZHM6IFtpZF9lcXVpcG9dLCByZWZlcmVuY2VzOiBbaWRdLCBvbkRlbGV0ZTogUmVzdHJpY3QsIG9uVXBkYXRlOiBSZXN0cmljdCwgbWFwOiAidGljX2VxdWlwb3NfY29tcHV0b19pZF9lcXVpcG9fZm9yZWlnbiIpCgogIEBAaW5kZXgoW2lkX2VxdWlwb10sIG1hcDogInRpY19lcXVpcG9zX2NvbXB1dG9faWRfZXF1aXBvX2ZvcmVpZ24iKQp9Cgptb2RlbCB1c2VycyB7CiAgaWQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEludCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBpZCBAZGVmYXVsdChhdXRvaW5jcmVtZW50KCkpIEBkYi5VbnNpZ25lZEludAogIG5hbWUgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTdHJpbmcKICB1c2VybmFtZSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU3RyaW5nICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQHVuaXF1ZShtYXA6ICJ1c2Vyc191c2VybmFtZV91bmlxdWUiKQogIGVtYWlsICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTdHJpbmcgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBAdW5pcXVlKG1hcDogInVzZXJzX2VtYWlsX3VuaXF1ZSIpCiAgcGFzc3dvcmQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFN0cmluZwogIHJlbWVtYmVyX3Rva2VuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTdHJpbmc/ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBAZGIuVmFyQ2hhcigxMDApCiAgY3JlYXRlZF9hdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIERhdGVUaW1lPyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBkYi5UaW1lc3RhbXAoMCkKICB1cGRhdGVkX2F0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRGF0ZVRpbWU/ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQGRiLlRpbWVzdGFtcCgwKQogIGRlbGV0ZWRfYXQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBEYXRlVGltZT8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBAZGIuVGltZXN0YW1wKDApCiAgaWRfdGlwb3BlcnNvbmEgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEludCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBkYi5VbnNpZ25lZEludAogIGlkX3BlcnNvbmEgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBJbnQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBAZGIuVW5zaWduZWRJbnQKICBpZF9lbXBsZWFkbyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSW50ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQGRiLlVuc2lnbmVkSW50CiAgZW5mX2VzY2FsYV92YWxvcmFjaW9uX2VuZl9lc2NhbGFfdmFsb3JhY2lvbl9pZF9hdXRvcml6b1RvdXNlcnMgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVuZl9lc2NhbGFfdmFsb3JhY2lvbltdICAgICAgICAgICAgICAgIEByZWxhdGlvbigiZW5mX2VzY2FsYV92YWxvcmFjaW9uX2lkX2F1dG9yaXpvVG91c2VycyIpCiAgZW5mX2VzY2FsYV92YWxvcmFjaW9uX2VuZl9lc2NhbGFfdmFsb3JhY2lvbl9pZF9jYW5jZWxvVG91c2VycyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVuZl9lc2NhbGFfdmFsb3JhY2lvbltdICAgICAgICAgICAgICAgIEByZWxhdGlvbigiZW5mX2VzY2FsYV92YWxvcmFjaW9uX2lkX2NhbmNlbG9Ub3VzZXJzIikKICBlbmZfZXNjYWxhX3ZhbG9yYWNpb25fZW5mX2VzY2FsYV92YWxvcmFjaW9uX2lkX3VzZXJUb3VzZXJzICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZW5mX2VzY2FsYV92YWxvcmFjaW9uW10gICAgICAgICAgICAgICAgQHJlbGF0aW9uKCJlbmZfZXNjYWxhX3ZhbG9yYWNpb25faWRfdXNlclRvdXNlcnMiKQogIGVuZl9tZWRpZGFzX2FudHJvcG9tZXRyaWNhc19lbmZfbWVkaWRhc19hbnRyb3BvbWV0cmljYXNfaWRfYXV0b3Jpem9Ub3VzZXJzICAgICAgICAgICAgICAgICAgICAgICAgICBlbmZfbWVkaWRhc19hbnRyb3BvbWV0cmljYXNbXSAgICAgICAgICBAcmVsYXRpb24oImVuZl9tZWRpZGFzX2FudHJvcG9tZXRyaWNhc19pZF9hdXRvcml6b1RvdXNlcnMiKQogIGVuZl9tZWRpZGFzX2FudHJvcG9tZXRyaWNhc19lbmZfbWVkaWRhc19hbnRyb3BvbWV0cmljYXNfaWRfY2FuY2Vsb1RvdXNlcnMgICAgICAgICAgICAgICAgICAgICAgICAgICBlbmZfbWVkaWRhc19hbnRyb3BvbWV0cmljYXNbXSAgICAgICAgICBAcmVsYXRpb24oImVuZl9tZWRpZGFzX2FudHJvcG9tZXRyaWNhc19pZF9jYW5jZWxvVG91c2VycyIpCiAgZW5mX21lZGlkYXNfYW50cm9wb21ldHJpY2FzX2VuZl9tZWRpZGFzX2FudHJvcG9tZXRyaWNhc19pZF91c2VyVG91c2VycyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVuZl9tZWRpZGFzX2FudHJvcG9tZXRyaWNhc1tdICAgICAgICAgIEByZWxhdGlvbigiZW5mX21lZGlkYXNfYW50cm9wb21ldHJpY2FzX2lkX3VzZXJUb3VzZXJzIikKICBlbmZfb3hpZ2Vub3RlcmFwaWFfZW5mX294aWdlbm90ZXJhcGlhX2lkX2F1dG9yaXpvVG91c2VycyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZW5mX294aWdlbm90ZXJhcGlhW10gICAgICAgICAgICAgICAgICAgQHJlbGF0aW9uKCJlbmZfb3hpZ2Vub3RlcmFwaWFfaWRfYXV0b3Jpem9Ub3VzZXJzIikKICBlbmZfb3hpZ2Vub3RlcmFwaWFfZW5mX294aWdlbm90ZXJhcGlhX2lkX2NhbmNlbG9Ub3VzZXJzICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZW5mX294aWdlbm90ZXJhcGlhW10gICAgICAgICAgICAgICAgICAgQHJlbGF0aW9uKCJlbmZfb3hpZ2Vub3RlcmFwaWFfaWRfY2FuY2Vsb1RvdXNlcnMiKQogIGVuZl9veGlnZW5vdGVyYXBpYV9lbmZfb3hpZ2Vub3RlcmFwaWFfaWRfdXNlclRvdXNlcnMgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbmZfb3hpZ2Vub3RlcmFwaWFbXSAgICAgICAgICAgICAgICAgICBAcmVsYXRpb24oImVuZl9veGlnZW5vdGVyYXBpYV9pZF91c2VyVG91c2VycyIpCiAgZW5mX3Byb2NlZGltaWVudG9zX2ludmFzaXZvc19lbmZfcHJvY2VkaW1pZW50b3NfaW52YXNpdm9zX2lkX2F1dG9yaXpvVG91c2VycyAgICAgICAgICAgICAgICAgICAgICAgIGVuZl9wcm9jZWRpbWllbnRvc19pbnZhc2l2b3NbXSAgICAgICAgIEByZWxhdGlvbigiZW5mX3Byb2NlZGltaWVudG9zX2ludmFzaXZvc19pZF9hdXRvcml6b1RvdXNlcnMiKQogIGVuZl9wcm9jZWRpbWllbnRvc19pbnZhc2l2b3NfZW5mX3Byb2NlZGltaWVudG9zX2ludmFzaXZvc19pZF9jYW5jZWxvVG91c2VycyAgICAgICAgICAgICAgICAgICAgICAgICBlbmZfcHJvY2VkaW1pZW50b3NfaW52YXNpdm9zW10gICAgICAgICBAcmVsYXRpb24oImVuZl9wcm9jZWRpbWllbnRvc19pbnZhc2l2b3NfaWRfY2FuY2Vsb1RvdXNlcnMiKQogIGVuZl9wcm9jZWRpbWllbnRvc19pbnZhc2l2b3NfZW5mX3Byb2NlZGltaWVudG9zX2ludmFzaXZvc19pZF91c2VyVG91c2VycyAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbmZfcHJvY2VkaW1pZW50b3NfaW52YXNpdm9zW10gICAgICAgICBAcmVsYXRpb24oImVuZl9wcm9jZWRpbWllbnRvc19pbnZhc2l2b3NfaWRfdXNlclRvdXNlcnMiKQogIGVuZl9wcm9jZWRpbWllbnRvc19pbnZhc2l2b3NfZGV0YWxsZV9lbmZfcHJvY2VkaW1pZW50b3NfaW52YXNpdm9zX2RldGFsbGVfaWRfYXV0b3Jpem9Ub3VzZXJzICAgICAgICBlbmZfcHJvY2VkaW1pZW50b3NfaW52YXNpdm9zX2RldGFsbGVbXSBAcmVsYXRpb24oImVuZl9wcm9jZWRpbWllbnRvc19pbnZhc2l2b3NfZGV0YWxsZV9pZF9hdXRvcml6b1RvdXNlcnMiKQogIGVuZl9wcm9jZWRpbWllbnRvc19pbnZhc2l2b3NfZGV0YWxsZV9lbmZfcHJvY2VkaW1pZW50b3NfaW52YXNpdm9zX2RldGFsbGVfaWRfY2FuY2Vsb1RvdXNlcnMgICAgICAgICBlbmZfcHJvY2VkaW1pZW50b3NfaW52YXNpdm9zX2RldGFsbGVbXSBAcmVsYXRpb24oImVuZl9wcm9jZWRpbWllbnRvc19pbnZhc2l2b3NfZGV0YWxsZV9pZF9jYW5jZWxvVG91c2VycyIpCiAgZW5mX3Byb2NlZGltaWVudG9zX2ludmFzaXZvc19kZXRhbGxlX2VuZl9wcm9jZWRpbWllbnRvc19pbnZhc2l2b3NfZGV0YWxsZV9pZF91c2VyVG91c2VycyAgICAgICAgICAgIGVuZl9wcm9jZWRpbWllbnRvc19pbnZhc2l2b3NfZGV0YWxsZVtdIEByZWxhdGlvbigiZW5mX3Byb2NlZGltaWVudG9zX2ludmFzaXZvc19kZXRhbGxlX2lkX3VzZXJUb3VzZXJzIikKICBlbmZfdWxjZXJhc19wcmVzaW9uX2VuZl91bGNlcmFzX3ByZXNpb25faWRfYXV0b3Jpem9Ub3VzZXJzICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZW5mX3VsY2VyYXNfcHJlc2lvbltdICAgICAgICAgICAgICAgICAgQHJlbGF0aW9uKCJlbmZfdWxjZXJhc19wcmVzaW9uX2lkX2F1dG9yaXpvVG91c2VycyIpCiAgZW5mX3VsY2VyYXNfcHJlc2lvbl9lbmZfdWxjZXJhc19wcmVzaW9uX2lkX2NhbmNlbG9Ub3VzZXJzICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVuZl91bGNlcmFzX3ByZXNpb25bXSAgICAgICAgICAgICAgICAgIEByZWxhdGlvbigiZW5mX3VsY2VyYXNfcHJlc2lvbl9pZF9jYW5jZWxvVG91c2VycyIpCiAgZW5mX3VsY2VyYXNfcHJlc2lvbl9lbmZfdWxjZXJhc19wcmVzaW9uX2lkX3VzZXJUb3VzZXJzICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVuZl91bGNlcmFzX3ByZXNpb25bXSAgICAgICAgICAgICAgICAgIEByZWxhdGlvbigiZW5mX3VsY2VyYXNfcHJlc2lvbl9pZF91c2VyVG91c2VycyIpCiAgaGNsX2hpc3RvcmlhX2NsaW5pY2FfaGNsX2hpc3RvcmlhX2NsaW5pY2FfaWRfYXV0b3Jpem9Ub3VzZXJzICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhjbF9oaXN0b3JpYV9jbGluaWNhW10gICAgICAgICAgICAgICAgIEByZWxhdGlvbigiaGNsX2hpc3RvcmlhX2NsaW5pY2FfaWRfYXV0b3Jpem9Ub3VzZXJzIikKICBoY2xfaGlzdG9yaWFfY2xpbmljYV9oY2xfaGlzdG9yaWFfY2xpbmljYV9pZF91c2VyVG91c2VycyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGNsX2hpc3RvcmlhX2NsaW5pY2FbXSAgICAgICAgICAgICAgICAgQHJlbGF0aW9uKCJoY2xfaGlzdG9yaWFfY2xpbmljYV9pZF91c2VyVG91c2VycyIpCiAgaHB6X2F1eGlsaWFyZXNfZHhfY29tZW50YXJpb3NfaHB6X2F1eGlsaWFyZXNfZHhfY29tZW50YXJpb3NfaWRfYXV0b3Jpem9Ub3VzZXJzICAgICAgICAgICAgICAgICAgICAgIGhwel9hdXhpbGlhcmVzX2R4X2NvbWVudGFyaW9zW10gICAgICAgIEByZWxhdGlvbigiaHB6X2F1eGlsaWFyZXNfZHhfY29tZW50YXJpb3NfaWRfYXV0b3Jpem9Ub3VzZXJzIikKICBocHpfYXV4aWxpYXJlc19keF9jb21lbnRhcmlvc19ocHpfYXV4aWxpYXJlc19keF9jb21lbnRhcmlvc19pZF91c2VyVG91c2VycyAgICAgICAgICAgICAgICAgICAgICAgICAgaHB6X2F1eGlsaWFyZXNfZHhfY29tZW50YXJpb3NbXSAgICAgICAgQHJlbGF0aW9uKCJocHpfYXV4aWxpYXJlc19keF9jb21lbnRhcmlvc19pZF91c2VyVG91c2VycyIpCiAgaHB6X2VuZl9pbnRlcnZlbmNpb25lc19ocHpfZW5mX2ludGVydmVuY2lvbmVzX2lkX2F1dG9yaXpvVG91c2VycyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhwel9lbmZfaW50ZXJ2ZW5jaW9uZXNbXSAgICAgICAgICAgICAgIEByZWxhdGlvbigiaHB6X2VuZl9pbnRlcnZlbmNpb25lc19pZF9hdXRvcml6b1RvdXNlcnMiKQogIGhwel9lbmZfaW50ZXJ2ZW5jaW9uZXNfaHB6X2VuZl9pbnRlcnZlbmNpb25lc19pZF9jYW5jZWxvVG91c2VycyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBocHpfZW5mX2ludGVydmVuY2lvbmVzW10gICAgICAgICAgICAgICBAcmVsYXRpb24oImhwel9lbmZfaW50ZXJ2ZW5jaW9uZXNfaWRfY2FuY2Vsb1RvdXNlcnMiKQogIGhwel9lbmZfaW50ZXJ2ZW5jaW9uZXNfaHB6X2VuZl9pbnRlcnZlbmNpb25lc19pZF91c2VyVG91c2VycyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBocHpfZW5mX2ludGVydmVuY2lvbmVzW10gICAgICAgICAgICAgICBAcmVsYXRpb24oImhwel9lbmZfaW50ZXJ2ZW5jaW9uZXNfaWRfdXNlclRvdXNlcnMiKQogIGhwel9pbmRpY2FjaW9uX21lZGljYW1lbnRvc19ocHpfaW5kaWNhY2lvbl9tZWRpY2FtZW50b3NfaWRfYXV0b3Jpem9Ub3VzZXJzICAgICAgICAgICAgICAgICAgICAgICAgICBocHpfaW5kaWNhY2lvbl9tZWRpY2FtZW50b3NbXSAgICAgICAgICBAcmVsYXRpb24oImhwel9pbmRpY2FjaW9uX21lZGljYW1lbnRvc19pZF9hdXRvcml6b1RvdXNlcnMiKQogIGhwel9pbmRpY2FjaW9uX21lZGljYW1lbnRvc19ocHpfaW5kaWNhY2lvbl9tZWRpY2FtZW50b3NfaWRfc3VzcGVuZGlvVG91c2VycyAgICAgICAgICAgICAgICAgICAgICAgICBocHpfaW5kaWNhY2lvbl9tZWRpY2FtZW50b3NbXSAgICAgICAgICBAcmVsYXRpb24oImhwel9pbmRpY2FjaW9uX21lZGljYW1lbnRvc19pZF9zdXNwZW5kaW9Ub3VzZXJzIikKICBocHpfaW5kaWNhY2lvbl9tZWRpY2FtZW50b3NfaHB6X2luZGljYWNpb25fbWVkaWNhbWVudG9zX2lkX3VzZXJUb3VzZXJzICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHB6X2luZGljYWNpb25fbWVkaWNhbWVudG9zW10gICAgICAgICAgQHJlbGF0aW9uKCJocHpfaW5kaWNhY2lvbl9tZWRpY2FtZW50b3NfaWRfdXNlclRvdXNlcnMiKQogIGhwel9pbmRpY2FjaW9uZXNfbWVkaWNhc19ocHpfaW5kaWNhY2lvbmVzX21lZGljYXNfaWRfYXV0b3Jpem9Ub3VzZXJzICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBocHpfaW5kaWNhY2lvbmVzX21lZGljYXNbXSAgICAgICAgICAgICBAcmVsYXRpb24oImhwel9pbmRpY2FjaW9uZXNfbWVkaWNhc19pZF9hdXRvcml6b1RvdXNlcnMiKQogIGhwel9pbmRpY2FjaW9uZXNfbWVkaWNhc19ocHpfaW5kaWNhY2lvbmVzX21lZGljYXNfaWRfY2FuY2Vsb1RvdXNlcnMgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBocHpfaW5kaWNhY2lvbmVzX21lZGljYXNbXSAgICAgICAgICAgICBAcmVsYXRpb24oImhwel9pbmRpY2FjaW9uZXNfbWVkaWNhc19pZF9jYW5jZWxvVG91c2VycyIpCiAgaHB6X2luZGljYWNpb25lc19tZWRpY2FzX2hwel9pbmRpY2FjaW9uZXNfbWVkaWNhc19pZF91c2VyVG91c2VycyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhwel9pbmRpY2FjaW9uZXNfbWVkaWNhc1tdICAgICAgICAgICAgIEByZWxhdGlvbigiaHB6X2luZGljYWNpb25lc19tZWRpY2FzX2lkX3VzZXJUb3VzZXJzIikKICBocHpfaW5ncmVzb19ob3NwaXRhbGFyaW9faHB6X2luZ3Jlc29faG9zcGl0YWxhcmlvX2lkX3VzZXJfY29uZmlybWFjaW9uVG91c2VycyAgICAgICAgICAgICAgICAgICAgICAgaHB6X2luZ3Jlc29faG9zcGl0YWxhcmlvW10gICAgICAgICAgICAgQHJlbGF0aW9uKCJocHpfaW5ncmVzb19ob3NwaXRhbGFyaW9faWRfdXNlcl9jb25maXJtYWNpb25Ub3VzZXJzIikKICBocHpfaW5ncmVzb19ob3NwaXRhbGFyaW9faHB6X2luZ3Jlc29faG9zcGl0YWxhcmlvX2lkX3VzZXJUb3VzZXJzICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHB6X2luZ3Jlc29faG9zcGl0YWxhcmlvW10gICAgICAgICAgICAgQHJlbGF0aW9uKCJocHpfaW5ncmVzb19ob3NwaXRhbGFyaW9faWRfdXNlclRvdXNlcnMiKQogIGhwel9pbmdyZXNvX3NpZ25vc192aXRhbGVzX2hwel9pbmdyZXNvX3NpZ25vc192aXRhbGVzX2lkX2F1dG9yaXpvVG91c2VycyAgICAgICAgICAgICAgICAgICAgICAgICAgICBocHpfaW5ncmVzb19zaWdub3Nfdml0YWxlc1tdICAgICAgICAgICBAcmVsYXRpb24oImhwel9pbmdyZXNvX3NpZ25vc192aXRhbGVzX2lkX2F1dG9yaXpvVG91c2VycyIpCiAgaHB6X2luZ3Jlc29fc2lnbm9zX3ZpdGFsZXNfaHB6X2luZ3Jlc29fc2lnbm9zX3ZpdGFsZXNfaWRfY2FuY2Vsb1RvdXNlcnMgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhwel9pbmdyZXNvX3NpZ25vc192aXRhbGVzW10gICAgICAgICAgIEByZWxhdGlvbigiaHB6X2luZ3Jlc29fc2lnbm9zX3ZpdGFsZXNfaWRfY2FuY2Vsb1RvdXNlcnMiKQogIGhwel9pbmdyZXNvX3NpZ25vc192aXRhbGVzX2hwel9pbmdyZXNvX3NpZ25vc192aXRhbGVzX2lkX3VzZXJUb3VzZXJzICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBocHpfaW5ncmVzb19zaWdub3Nfdml0YWxlc1tdICAgICAgICAgICBAcmVsYXRpb24oImhwel9pbmdyZXNvX3NpZ25vc192aXRhbGVzX2lkX3VzZXJUb3VzZXJzIikKICBocHpfbWVkaWNhbWVudG9fbWluaXN0cmFjaW9uX2hwel9tZWRpY2FtZW50b19taW5pc3RyYWNpb25faWRfYXV0b3Jpem9Ub3VzZXJzICAgICAgICAgICAgICAgICAgICAgICAgaHB6X21lZGljYW1lbnRvX21pbmlzdHJhY2lvbltdICAgICAgICAgQHJlbGF0aW9uKCJocHpfbWVkaWNhbWVudG9fbWluaXN0cmFjaW9uX2lkX2F1dG9yaXpvVG91c2VycyIpCiAgaHB6X21lZGljYW1lbnRvX21pbmlzdHJhY2lvbl9ocHpfbWVkaWNhbWVudG9fbWluaXN0cmFjaW9uX2lkX2NhbmNlbG9Ub3VzZXJzICAgICAgICAgICAgICAgICAgICAgICAgIGhwel9tZWRpY2FtZW50b19taW5pc3RyYWNpb25bXSAgICAgICAgIEByZWxhdGlvbigiaHB6X21lZGljYW1lbnRvX21pbmlzdHJhY2lvbl9pZF9jYW5jZWxvVG91c2VycyIpCiAgaHB6X21lZGljYW1lbnRvX21pbmlzdHJhY2lvbl9ocHpfbWVkaWNhbWVudG9fbWluaXN0cmFjaW9uX2lkX3VzZXJUb3VzZXJzICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhwel9tZWRpY2FtZW50b19taW5pc3RyYWNpb25bXSAgICAgICAgIEByZWxhdGlvbigiaHB6X21lZGljYW1lbnRvX21pbmlzdHJhY2lvbl9pZF91c2VyVG91c2VycyIpCiAgaHB6X3BhY2llbnRlX2F1eGlsaWFyZXNfZGlhZ25vc3RpY29faHB6X3BhY2llbnRlX2F1eGlsaWFyZXNfZGlhZ25vc3RpY29faWRfdXNlcl9jb25maXJtYWNpb25Ub3VzZXJzIGhwel9wYWNpZW50ZV9hdXhpbGlhcmVzX2RpYWdub3N0aWNvW10gIEByZWxhdGlvbigiaHB6X3BhY2llbnRlX2F1eGlsaWFyZXNfZGlhZ25vc3RpY29faWRfdXNlcl9jb25maXJtYWNpb25Ub3VzZXJzIikKICBocHpfcGFjaWVudGVfYXV4aWxpYXJlc19kaWFnbm9zdGljb19ocHpfcGFjaWVudGVfYXV4aWxpYXJlc19kaWFnbm9zdGljb19pZF91c2VyVG91c2VycyAgICAgICAgICAgICAgaHB6X3BhY2llbnRlX2F1eGlsaWFyZXNfZGlhZ25vc3RpY29bXSAgQHJlbGF0aW9uKCJocHpfcGFjaWVudGVfYXV4aWxpYXJlc19kaWFnbm9zdGljb19pZF91c2VyVG91c2VycyIpCiAgaHB6X3BhY2llbnRlX25vdGFfbWVkaWNhX2hwel9wYWNpZW50ZV9ub3RhX21lZGljYV9pZF9jYW5jZWxvVG91c2VycyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhwel9wYWNpZW50ZV9ub3RhX21lZGljYVtdICAgICAgICAgICAgIEByZWxhdGlvbigiaHB6X3BhY2llbnRlX25vdGFfbWVkaWNhX2lkX2NhbmNlbG9Ub3VzZXJzIikKICBocHpfcGFjaWVudGVfbm90YV9tZWRpY2FfaHB6X3BhY2llbnRlX25vdGFfbWVkaWNhX2lkX3VzZXJfY29uZmlybWFjaW9uVG91c2VycyAgICAgICAgICAgICAgICAgICAgICAgaHB6X3BhY2llbnRlX25vdGFfbWVkaWNhW10gICAgICAgICAgICAgQHJlbGF0aW9uKCJocHpfcGFjaWVudGVfbm90YV9tZWRpY2FfaWRfdXNlcl9jb25maXJtYWNpb25Ub3VzZXJzIikKICBocHpfcGFjaWVudGVfbm90YV9tZWRpY2FfaHB6X3BhY2llbnRlX25vdGFfbWVkaWNhX2lkX3VzZXJUb3VzZXJzICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHB6X3BhY2llbnRlX25vdGFfbWVkaWNhW10gICAgICAgICAgICAgQHJlbGF0aW9uKCJocHpfcGFjaWVudGVfbm90YV9tZWRpY2FfaWRfdXNlclRvdXNlcnMiKQogIGhwel9wYWNpZW50ZV9ub3RhX3RyYWJham9fc29jaWFsICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBocHpfcGFjaWVudGVfbm90YV90cmFiYWpvX3NvY2lhbFtdCiAgY21wX3BlcnNvbmEgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNtcF9wZXJzb25hICAgICAgICAgICAgICAgICAgICAgICAgICAgIEByZWxhdGlvbihmaWVsZHM6IFtpZF9wZXJzb25hXSwgcmVmZXJlbmNlczogW2lkXSwgb25VcGRhdGU6IFJlc3RyaWN0LCBtYXA6ICJ1c2Vyc19pZF9wZXJzb25hX2ZvcmVpZ24iKQogIGNhdF90aXBvc19wZXJzb25hICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXRfdGlwb3NfcGVyc29uYSAgICAgICAgICAgICAgICAgICAgICBAcmVsYXRpb24oZmllbGRzOiBbaWRfdGlwb3BlcnNvbmFdLCByZWZlcmVuY2VzOiBbaWRdLCBvblVwZGF0ZTogUmVzdHJpY3QsIG1hcDogInVzZXJzX2lkX3RpcG9wZXJzb25hX2ZvcmVpZ24iKQoKICBAQGluZGV4KFtpZF9wZXJzb25hXSwgbWFwOiAidXNlcnNfaWRfcGVyc29uYV9mb3JlaWduIikKICBAQGluZGV4KFtpZF90aXBvcGVyc29uYV0sIG1hcDogInVzZXJzX2lkX3RpcG9wZXJzb25hX2ZvcmVpZ24iKQp9CgplbnVtIHJjZl9yZXNndWFyZG9fdGlwbyB7CiAgQVNJR05BQ0lPTgogIFBSRVNUQU1PCn0KCmVudW0gcmNoX2VtcGxlYWRvc19tYWRyZSB7CiAgU0kKICBOTwp9CgplbnVtIGNhdF9lcXVpcG9zX2NsYXNpZmljYWNpb25fZXF1aXBvIHsKICBFTQogIE1BUQogIENPTVBVVE8KfQoKZW51bSBocHpfaW5ncmVzb19ob3NwaXRhbGFyaW9fZXN0YWRvX3NhbHVkIHsKICBOT19FU1BFQ0lGSUNBRE8gQG1hcCgiTk8gRVNQRUNJRklDQURPIikKICBWSVZPCiAgQ09OU0lFTlRFCiAgSU5DT05TSUVOVEUKICBNVUVSVE8KfQoKZW51bSBpbnRfcGFnZV9lc3RhdHVzIHsKICBQVUJMSUNBRE8KICBJTkFDVElWTwp9CgplbnVtIHJjaF9lbXBsZWFkb3NfcGFnb19yaWVzZ28gewogIE5PX0FQTElDQSBAbWFwKCJOTyBBUExJQ0EiKQogIEFMVE8KICBNRURJQU5PCiAgQkFKTwp9CgplbnVtIGNhdF9zZXJ2aWNpb3NfdGlwb0FnZW5kYSB7CiAgQwogIEUKICBSCn0KCmVudW0gcmNmX2luY2lkZW5jaWFzX3NlcnZpY2lvIHsKICBJTlRFUk5PCiAgRVhURVJOTwp9CgplbnVtIGhwel9pbmdyZXNvX2hvc3BpdGFsYXJpb19lc3RhZG9faW5ncmVzbyB7CiAgTk9fRVNQRUNJRklDQURPIEBtYXAoIk5PIEVTUEVDSUZJQ0FETyIpCiAgR1JBVkUKICBERUxJQ0FETwogIE1FSk9SSUEKfQoKZW51bSByY2Zfa2FyZGV4X3NlcnZpY2lvIHsKICBJTlRFUk5PCiAgRVhURVJOTwp9CgplbnVtIGNtcF9wZXJzb25hX3NleG8gewogIEhPTUJSRQogIE1VSkVSCn0KCmVudW0gcmNoX2VtcGxlYWRvc19jaGVjYSB7CiAgU0kKICBOTwp9CgplbnVtIGhwel9wYWNpZW50ZV9hdGVuY2lvbl9wcmlvcml0YXJpYSB7CiAgTklOR1VOQQogIERJU0NBUEFDSURBRF9GX1NJQ0EgICAgICBAbWFwKCJESVNDQVBBQ0lEQUQgRsONU0lDQSIpCiAgRElTQ0FQQUNJREFEX0lOVEVMRUNUVUFMIEBtYXAoIkRJU0NBUEFDSURBRCBJTlRFTEVDVFVBTCIpCiAgQURVTFRPX01BWU9SICAgICAgICAgICAgIEBtYXAoIkFEVUxUTyBNQVlPUiIpCiAgSU5EX0dFTkEgICAgICAgICAgICAgICAgIEBtYXAoIklORMONR0VOQSIpCn0KCmVudW0gcmNmX2thcmRleF90aXBvX3NlcnZpY2lvIHsKICBDT1JSRUNUSVZPCiAgSU5TVEFMQUNJT04KICBQUkVWRU5USVZPCiAgUlVUSU5BCiAgUFJFVkVOVElWT19NRU5PUiBAbWFwKCJQUkVWRU5USVZPIE1FTk9SIikKfQoKZW51bSBjYXRfZXF1aXBvc19lc3RhdHVzIHsKICBBQ1RJVk8KICBJTkFDVElWTwp9CgplbnVtIHJjaF9lbXBsZWFkb3Nfbm9tYnJhbWllbnRvIHsKICBTSQogIE5PCn0KCmVudW0gY2F0X3Byb3ZlZWRvcmVzX2VzdGF0dXMgewogIEFjdGl2bwogIEluYWN0aXZvCn0K",
  "inlineSchemaHash": "757738fd9d0e2eb99ff29a173dd9b192995e0829ebdb94da3cfb2267a4d6c334",
  "noEngine": false
}
config.dirname = '/'

defineDmmfProperty(exports.Prisma, config.runtimeDataModel)


config.injectableEdgeEnv = () => ({
  parsed: {
    DATABASE_SICA3_URL: typeof globalThis !== 'undefined' && globalThis['DATABASE_SICA3_URL'] || typeof process !== 'undefined' && process.env && process.env.DATABASE_SICA3_URL || undefined
  }
})

if (typeof globalThis !== 'undefined' && globalThis['DEBUG'] || typeof process !== 'undefined' && process.env && process.env.DEBUG || undefined) {
  Debug.enable(typeof globalThis !== 'undefined' && globalThis['DEBUG'] || typeof process !== 'undefined' && process.env && process.env.DEBUG || undefined)
}

const PrismaClient = getPrismaClient(config)
exports.PrismaClient = PrismaClient
Object.assign(exports, Prisma)
