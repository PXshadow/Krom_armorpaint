let project = new Project('Krom');

project.cpp11 = true;
project.addFile('Sources/**');

await project.addProject('Chakra/Build');

project.setDebugDir('Deployment');

if (platform === Platform.Windows) {
	project.addIncludeDir("Libraries/DirectX/Include");
	project.addLib("d3d11");
	project.addLib("d3dcompiler");
}

project.addIncludeDir("Libraries/nfd/include");
project.addFile('Libraries/nfd/nfd_common.c');
if (platform === Platform.Windows) {
	project.addFile('Libraries/nfd/nfd_win.cpp');
}
else if (platform === Platform.Linux) {
	project.addIncludeDir("/usr/include/gtk-3.0 ");
	project.addIncludeDir("/usr/include/at-spi2-atk/2.0");
	project.addIncludeDir("/usr/include/at-spi-2.0");
	project.addIncludeDir("/usr/include/dbus-1.0");
	project.addIncludeDir("/usr/lib/x86_64-linux-gnu/dbus-1.0/include");
	project.addIncludeDir("/usr/include/gtk-3.0");
	project.addIncludeDir("/usr/include/gio-unix-2.0/");
	project.addIncludeDir("/usr/include/mirclient");
	project.addIncludeDir("/usr/include/mircore");
	project.addIncludeDir("/usr/include/mircookie");
	project.addIncludeDir("/usr/include/cairo");
	project.addIncludeDir("/usr/include/pango-1.0");
	project.addIncludeDir("/usr/include/harfbuzz");
	project.addIncludeDir("/usr/include/pango-1.0");
	project.addIncludeDir("/usr/include/atk-1.0");
	project.addIncludeDir("/usr/include/cairo");
	project.addIncludeDir("/usr/include/pixman-1");
	project.addIncludeDir("/usr/include/freetype2");
	project.addIncludeDir("/usr/include/libpng16");
	project.addIncludeDir("/usr/include/gdk-pixbuf-2.0");
	project.addIncludeDir("/usr/include/libpng16");
	project.addIncludeDir("/usr/include/glib-2.0");
	project.addIncludeDir("/usr/lib/x86_64-linux-gnu/glib-2.0/include");
	project.addLib("gtk-3");
	project.addLib("gobject-2.0");
	project.addLib("glib-2.0");

	project.addFile('Libraries/nfd/nfd_gtk.c');
}
else {
	project.addFile('Libraries/nfd/nfd_cocoa.m');
}

resolve(project);
